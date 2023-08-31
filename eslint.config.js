import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugins from '@typescript-eslint/eslint-plugin'
export default [
    {
        files: [
            "packages/**/*.ts"
        ],
        ignores: [
            "packages/**/*.d.ts"
        ],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: "./tsconfig.eslint.json",
            },
        },
        plugins: {
            "@typescript-eslint": typescriptPlugins
        },
        rules: {
            '@typescript-eslint/ban-ts-comment': 'error',
            '@typescript-eslint/ban-types': 'error',
            'no-array-constructor': 'off',
            '@typescript-eslint/no-array-constructor': 'error',
            '@typescript-eslint/no-duplicate-enum-values': 'error',
            // '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-extra-non-null-assertion': 'error',
            'no-loss-of-precision': 'off',
            '@typescript-eslint/no-loss-of-precision': 'error',
            '@typescript-eslint/no-misused-new': 'error',
            '@typescript-eslint/no-namespace': 'error',
            '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
            '@typescript-eslint/no-this-alias': 'error',
            '@typescript-eslint/no-unnecessary-type-constraint': 'error',
            '@typescript-eslint/no-unsafe-declaration-merging': 'error',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-var-requires': 'error',
            '@typescript-eslint/prefer-as-const': 'error',
            '@typescript-eslint/triple-slash-reference': 'error'
        }
    }
];
