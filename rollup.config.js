import fs from 'fs';
import path from 'path';
import typescript from "@rollup/plugin-typescript"
import json from '@rollup/plugin-json';
import resolve from "@rollup/plugin-node-resolve"
const packages = path.resolve(process.cwd(), 'packages/@depanlz');
const packageDir = fs.readdirSync(packages);

function output(pkg) {
    return [
        {
            input: [`./packages/@depanlz/${pkg}/src/index.ts`],
            output: [
                {
                    file: `./packages/@depanlz/${pkg}/dist/index.cjs`,
                    format: 'cjs',
                },
                {
                    file: `./packages/@depanlz/${pkg}/dist/index.mjs`,
                    format: 'esm',
                }
            ],
            plugins: [
                typescript({
                    compilerOptions: {
                        declarationDir: `./packages/@depanlz/${pkg}/dist/`
                    }
                }),
                json(),
                resolve()
            ],
            external: [
                "@depanlz/core",
                "@depanlz/web-server",
            ]
        }
    ];
}

const config = packageDir.map((item) =>output(item)).flat()

export default config
