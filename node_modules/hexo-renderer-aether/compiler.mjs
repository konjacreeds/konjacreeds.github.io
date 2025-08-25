/*
ShokaX ToolBox - Compiler
compatibility: ShokaX Aether Renderer 0.x
 */
import fs from 'fs/promises'
import { glob } from 'glob'
import { build } from 'esbuild'

console.log('ShokaX ToolBox - Compiler')
console.log('Start compiling...')

const entryPoints = await glob('./**/*.ts');

console.log('Using esbuild compiler...')

await build({
    entryPoints: ['./index.ts'],
    bundle: true,
    external: [
        'shiki'
    ],
    format: 'cjs',
    target: ['esnext'],
    platform: 'node',
    loader: { '.ts': 'ts' },
    outfile: 'index.js',
    resolveExtensions: ['.mjs', '.js', '.json', '.ts']
})

console.log('deleting ts files...')

await Promise.all(
    entryPoints.map(async (entry) => {
        await fs.unlink(entry)
    })
)

console.log('Finished compiling.')

console.log('Done.')




