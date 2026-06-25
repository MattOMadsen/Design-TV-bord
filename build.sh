#!/bin/bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
SHELL="$ROOT/shell.html"
PARTIALS=(
    hero
    produkter
    fordele
    proces
    galleri
    kontakt
    footer
)

build_html() {
    {
        sed '/<!-- @build:partials-start -->/,$d' "$SHELL"
        for partial in "${PARTIALS[@]}"; do
            cat "$ROOT/partials/${partial}.html"
            printf '\n'
        done
        sed -n '/<!-- @build:partials-end -->/,$p' "$SHELL" | tail -n +2
    }
}

mkdir -p "$ROOT/dist/css" "$ROOT/dist/js" "$ROOT/dist/images"

cp "$ROOT/css/"*.css "$ROOT/dist/css/"
cp "$ROOT/js/"*.js "$ROOT/dist/js/"
cp -r "$ROOT/images/"* "$ROOT/dist/images/"

# Fuld side til GitHub Pages (rod) + kopi i dist/
build_html > "$ROOT/index.html"
build_html > "$ROOT/dist/index.html"

echo "Build færdig → index.html (GitHub Pages) + dist/index.html"