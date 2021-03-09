/*

node scripts/test.js

 */

const assert = require('assert')
const ky = require('../index.cjs').default

main().then(() => console.log('passed'))

async function main() {
  const url = 'https://httpbin.org/get'
  const res = await ky.get(url).json()
  // console.log(res)
  assert(res.url === url)
}
