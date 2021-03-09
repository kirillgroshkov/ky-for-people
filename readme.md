## ky-for-people

> [ky](https://github.com/sindresorhus/ky) + [ky-universal](https://github.com/sindresorhus/ky-universal) transpiled down to es2017

[![npm](https://img.shields.io/npm/v/ky-for-people/latest.svg)](https://www.npmjs.com/package/ky-for-people)

# Features

- Transpiled down to es2017, so, no `unknown keyword export` errors
- No `type: module` in package.json, so it works in Nuxt.js SSR
  
# To do

- [ ] `globalThis` simple polyfill included 

# Develop

## Update to recent version of ky

```bash
yarn build
```

Will download the recent version from GitHub.
