#!/bin/sh

# Copyright (C) 2022 CVAT.ai Corporation
#
# SPDX-License-Identifier: MIT

set -e

SOURCE_DIR="src"
LAYER1_LIB_NAME="${SOURCE_DIR}/api-client"
LAYER2_LIB_NAME="${SOURCE_DIR}/models"
DST_DIR="$(cd "$(dirname -- "$0")/.." && pwd)"
DOCS_DIR="$DST_DIR/docs"
GEN_DIR="${DST_DIR}/gen"
SCHEMA_PATH="https://raw.githubusercontent.com/opencv/cvat/master/cvat/schema.yml"

rm -f -r "$DOCS_DIR" "${DST_DIR}/${LAYER1_LIB_NAME}" "${DST_DIR}/${LAYER2_LIB_NAME}"
wget -O "$GEN_DIR/schema.yml" "$SCHEMA_PATH"
python3 -m pip install niet
VERSION=$(niet ".info.version" "$GEN_DIR/schema.yml")

# Pass template dir here
# https://github.com/OpenAPITools/openapi-generator/issues/8420
docker run --rm -u "$(id -u)":"$(id -g)" \
    -v "${GEN_DIR}:/mnt/gen:ro" \
    -v "${DST_DIR}:/mnt/dst" \
    openapitools/openapi-generator-cli generate \
        -i "/mnt/gen/schema.yml" \
        --config "/mnt/gen/generator-config.yml" \
        -p "packageVersion=$VERSION" \
        -p "httpUserAgent=cvat-sdk/$VERSION" \
        -g typescript-axios \
        -o "/mnt/dst/src"

jq -c '.version = $version' --arg version "$VERSION" "$DST_DIR/package.json" > tmp.$$.json && mv tmp.$$.json "$DST_DIR/package.json"

rm "$GEN_DIR/schema.yml"
rm -rf "$DST_DIR/$SOURCE_DIR/.openapi-generator"

cd "$DST_DIR" && rm -rf node_modules bun.lock && bun install && bun lint-fix && bun run build

cd "$DST_DIR" && git add . && git commit -m "chore(deps): update SDK to $VERSION" && git push --no-verify && git tag -a "v$VERSION" -m "SDK version $VERSION" && git push origin "tags/v$VERSION" --no-verify
