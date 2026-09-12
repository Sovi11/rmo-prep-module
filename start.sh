#!/usr/bin/env bash
# Launch the RMO prep module.
cd "$(dirname "$0")" && exec python3 serve.py "$@"
