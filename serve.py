#!/usr/bin/env python3
"""
RMO Prep Module - local server.

Serves the static site in web/ and persists the student's progress/notes to
user-data/state.json through a tiny JSON API. Python 3 standard library only.

    python3 serve.py [--port 5173] [--no-browser]
"""

import argparse
import json
import os
import shutil
import sys
import threading
import time
import webbrowser
from datetime import datetime
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse

ROOT = os.path.dirname(os.path.abspath(__file__))
WEB_DIR = os.path.join(ROOT, "web")
DATA_DIR = os.path.join(ROOT, "user-data")
STATE_FILE = os.path.join(DATA_DIR, "state.json")
BACKUP_DIR = os.path.join(DATA_DIR, "backups")

_lock = threading.Lock()

EMPTY_STATE = {
    "version": 1,
    "problems": {},      # problemId -> {status, flagged, note, attempts, updated}
    "chapters": {},      # chapterId -> {note, read, updated}
    "papers": {},        # paperId   -> {status, note, score, updated}
    "sessions": [],      # [{date, minutes, note}]
    "settings": {},
    "scratch": "",
}


def load_state():
    if not os.path.exists(STATE_FILE):
        return dict(EMPTY_STATE)
    try:
        with open(STATE_FILE, encoding="utf-8") as fh:
            state = json.load(fh)
    except (OSError, ValueError) as exc:
        print(f"  ! state.json unreadable ({exc}); starting from empty state")
        return dict(EMPTY_STATE)
    for key, default in EMPTY_STATE.items():
        state.setdefault(key, default if not isinstance(default, (dict, list)) else type(default)())
    return state


def save_state(state):
    """Write atomically, and keep a rolling daily backup."""
    os.makedirs(DATA_DIR, exist_ok=True)
    tmp = STATE_FILE + ".tmp"
    with open(tmp, "w", encoding="utf-8") as fh:
        json.dump(state, fh, indent=2, ensure_ascii=False)
    os.replace(tmp, STATE_FILE)

    os.makedirs(BACKUP_DIR, exist_ok=True)
    stamp = datetime.now().strftime("%Y-%m-%d")
    snapshot = os.path.join(BACKUP_DIR, f"state-{stamp}.json")
    if not os.path.exists(snapshot):
        shutil.copy2(STATE_FILE, snapshot)
        keep = sorted(os.listdir(BACKUP_DIR))[-14:]
        for name in os.listdir(BACKUP_DIR):
            if name not in keep:
                try:
                    os.remove(os.path.join(BACKUP_DIR, name))
                except OSError:
                    pass


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WEB_DIR, **kwargs)

    # --- helpers -----------------------------------------------------
    def _json(self, payload, code=200):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _read_body(self):
        length = int(self.headers.get("Content-Length") or 0)
        if length <= 0:
            return {}
        return json.loads(self.rfile.read(length).decode("utf-8"))

    # --- routes ------------------------------------------------------
    def do_GET(self):
        path = urlparse(self.path).path
        if path == "/api/state":
            with _lock:
                return self._json(load_state())
        if path == "/api/ping":
            return self._json({"ok": True, "storage": "disk"})
        return super().do_GET()

    def do_PUT(self):
        self.do_POST()

    def do_POST(self):
        path = urlparse(self.path).path
        if path != "/api/state":
            return self._json({"error": "not found"}, 404)
        try:
            incoming = self._read_body()
        except ValueError:
            return self._json({"error": "bad json"}, 400)
        if not isinstance(incoming, dict):
            return self._json({"error": "expected object"}, 400)
        with _lock:
            state = load_state()
            state.update(incoming)
            state["version"] = 1
            state["savedAt"] = datetime.now().isoformat(timespec="seconds")
            save_state(state)
        return self._json({"ok": True, "savedAt": state["savedAt"]})

    def end_headers(self):
        # Everything here is edited live while studying, and the app is tiny, so
        # never let the browser serve a stale copy.
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

    def log_message(self, fmt, *args):
        if "/api/" in (args[0] if args else ""):
            return
        return  # keep the console quiet


def main():
    ap = argparse.ArgumentParser(description="Serve the RMO prep module locally.")
    ap.add_argument("--port", type=int, default=5173)
    ap.add_argument("--host", default="127.0.0.1")
    ap.add_argument("--no-browser", action="store_true")
    args = ap.parse_args()

    os.makedirs(DATA_DIR, exist_ok=True)

    port = args.port
    for attempt in range(20):
        try:
            httpd = ThreadingHTTPServer((args.host, port), Handler)
            break
        except OSError:
            port += 1
    else:
        print("Could not bind a port in range.", file=sys.stderr)
        return 1

    url = f"http://{args.host}:{port}/"
    print("\n  RMO Prep Module")
    print(f"  running at  {url}")
    print(f"  saving to   {os.path.relpath(STATE_FILE, ROOT)}")
    print("  press Ctrl+C to stop\n")

    if not args.no_browser:
        threading.Timer(0.7, lambda: webbrowser.open(url)).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n  stopped. progress is saved.\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
