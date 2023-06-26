# SDK for [Computer Vision Annotation Tool (CVAT)](https://github.com/cvat-ai/cvat)

[![NPM](https://img.shields.io/npm/v/cvat-sdk.svg)](https://www.npmjs.com/package/cvat-sdk) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This package provides a Javascript client library for the CVAT server. It can be useful for
workflow automation and writing custom CVAT server clients.

The SDK API includes several layers:

- Server API wrappers (`ApiClient`). Located in at [`cvat-sdk/api-client`](./src/api-client/).
- High-level tools (`Core`). Located at [`cvat-sdk/core`](./src/core).

Package documentation is available [here](https://subho57.github.io/cvat-sdk/docs).

## Installation & Usage

To install a prebuilt package, run the following command in the terminal:

```bash
npm install cvat-sdk # or yarn add cvat-sdk
```

After installation, you can import the package:

```typescript
import { ApiClient, Configuration, TasksApi } from 'cvat-sdk/api-client';
import { Core } from 'cvat-sdk/core';
```

[![cvat-sdk npminsights.com](https://npminsights.com/api/package/readme-image/cvat-sdk?v=2023-02-22)](https://npminsights.com/package/cvat-sdk)

## Module Stats

[See Rollup Visualizer](./stats.html)
