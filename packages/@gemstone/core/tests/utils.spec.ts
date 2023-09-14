import { isFileExists } from "../src/utils"
import { expect, test } from 'vitest'
import path from "path"

const index = path.resolve(process.cwd(),"packages/@gemstone/core","./index.d.ts")

test('isFileExists', () => {
    expect(isFileExists(index)).toBe(true)
})
