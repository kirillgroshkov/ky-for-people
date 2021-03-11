/*

yarn tsn build

 */

import { pMap } from '@naturalcycles/js-lib'
import { getGot } from '@naturalcycles/nodejs-lib'
import { execCommand } from '@naturalcycles/nodejs-lib/dist/exec'
import { kpySync } from '@naturalcycles/nodejs-lib/dist/fs'
import { runScript } from '@naturalcycles/nodejs-lib/dist/script'
import * as fs from 'fs-extra'
import * as path from 'path'
const projectDir = path.join(__dirname, '/..')
const tmpDir = projectDir + '/tmp'

const files = [
  'index.js',
  'index.d.ts',
]

const got = getGot({
  prefixUrl: 'https://raw.githubusercontent.com/sindresorhus/ky/main',
  logFinished: true,
})

runScript(async () => {
  fs.ensureDirSync(tmpDir)

  // Download
  await pMap(files, async file => {
    const s = await got.get(file).text()
    // console.log(s)
    await fs.writeFile(`${tmpDir}/${file}`, s, 'utf-8')
  })

  // Copy
  kpySync({
    baseDir: tmpDir,
    outputDir: projectDir,
  })

  // fs.moveSync(`${tmpDir}/index.js`, `${projectDir}/index.js`)

  // tsc index.js to tmp/dist/index.js (CommonJS)
  await execCommand(`tsc --module commonjs`)

  fs.renameSync(`${tmpDir}/dist/index.js`, `${projectDir}/ky.cjs`)

  // tsc index.js to tmp/dist/index.js (ESM)
  await execCommand(`tsc --module esnext`)

  fs.renameSync(`${tmpDir}/dist/index.js`, `${projectDir}/index.esm.js`)

  fs.unlinkSync(`${projectDir}/index.js`)
})
