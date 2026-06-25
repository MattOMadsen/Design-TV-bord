#!/bin/bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
PARTIALS=(
    hero
    produkter
    fordele
    proces
    galleri
    kontakt
    footer
)

mkdir -p "$ROOT/dist/css" "$ROOT/dist/js" "$ROOT/dist/images"

cp "$ROOT/css/"*.css "$ROOT/dist/css/"
cp "$ROOT/js/"*.js "$ROOT/dist/js/"
cp -r "$ROOT/images/"* "$ROOT/dist/images/"

{
    sed '/<!-- @build:partials-start -->/,$d' "$ROOT/index.html"
    for partial in "${PARTIALS[@]}"; do
        cat "$ROOT/partials/${partial}.html"
        printf '\n'
    done
    sed -n '/<!-- @build:partials-end -->/,$p' "$ROOT/index.html" | tail -n +2
} > "$ROOT/dist/index.html"

echo "Build færdig → dist/index.html"