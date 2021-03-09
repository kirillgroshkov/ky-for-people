'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const fetch = require('node-fetch')
const ky = require('./ky.cjs')

const TEN_MEGABYTES = 1000 * 1000 * 10

if (!globalThis.fetch) {
  globalThis.fetch = (url, options) => fetch(url, { highWaterMark: TEN_MEGABYTES, ...options })
}

if (!globalThis.Headers) {
  globalThis.Headers = fetch.Headers
}

if (!globalThis.Request) {
  globalThis.Request = fetch.Request
}

if (!globalThis.Response) {
  globalThis.Response = fetch.Response
}

// if (!globalThis.AbortController) {
//   globalThis.AbortController = AbortController;
// }
//
// if (!globalThis.ReadableStream) {
//   try {
//     globalThis.ReadableStream = await import('web-streams-polyfill/ponyfill/es2018');
//   } catch {}
// }

exports.default = ky.default
