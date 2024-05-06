# Battlefield KdF Website

> [![Build and Deploy Prod](https://github.com/battlefieldkdf/website/actions/workflows/main.yml/badge.svg)](https://github.com/battlefieldkdf/website/actions/workflows/main.yml)

Live at: https://battlefieldkdf.org

Hand-made with Vue and Vuetify.

## Build/Run Scripts

First, install NPM dependencies.

```sh
npm install
```

Then:

| Script | Effect |
| :--- | :--- |
| `npm start` | Start Vite development server (live reload, source maps, etc) |
| `npm run start` | Same as `npm start` |
| `npm run start:prod` | Start Vite server, but use "production" bundling |
| `npm run build` | Build development-type bundles (including source maps, etc) |
| `npm run build:prod` | Build production bundles (minified, etc) |

## Develop

VSCode is the recommended editor. Settings for setting it up are included.
Other IDEs should be easy to set up too. This is not a complex project.

## Deploy

The website is hosted in AWS, using S3 for storage and Cloudfront as the "server".
A Github actions configuration for deploying it is included.
