[![Build Status](https://travis-ci.com/lyne-design-system/lyne-helper-eslint-config.svg?branch=master)](https://travis-ci.com/lyne-design-system/lyne-helper-eslint-config) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/lyne-design-system/lyne-helper-eslint-config?label=release)

# Lyne Helper ESLint Config

Base ESLint Configuration for all Lyne Repos.

## Installation

Install the Config with the following command:
```bash
npm install --save-dev lyne-helper-eslint-config
```

## Usage

Require the base configuration:
```
const baseConfig = require('lyne-helper-eslint-config');
```

Then expand/change it to your liking. e.g.:

```
baseConfig.globals = {
  module: 'readonly',
  require: 'readonly'
};
```

## Development

### Conventional Commits

Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to make sure we can automatically determine the next release version if necessary.

## Deployment

The package is automatically published to npm after successfull build via TravisCI
