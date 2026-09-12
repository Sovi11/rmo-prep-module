#!/usr/bin/env bash
# Publish the current web/ folder to GitHub Pages.
#   ./deploy.sh "optional commit message"
set -e
cd "$(dirname "$0")"

python3 tools/build_manifest.py

if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "${1:-Update content}"
fi

git push origin main
git branch -D gh-pages-tmp 2>/dev/null || true
git subtree split --prefix web -b gh-pages-tmp >/dev/null
git push -f origin gh-pages-tmp:gh-pages
git branch -D gh-pages-tmp >/dev/null

echo
echo "  deployed -> https://sovi11.github.io/rmo-prep-module/"
echo "  (GitHub Pages takes a minute or two to update)"
