import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'packages/@gemstone/*',
  {
    test: {
      include: ['tests/**/*.spec.ts'],
      name: 'cli',
      environment: 'node',
    }
  },
  {
    test: {
      include: ['tests/**/*.spec.ts'],
      name: 'core',
      environment: 'node',
    }
  },
  {
    test: {
      include: ['tests/**/*.spec.ts'],
      name: 'web-server',
      environment: 'node',
    }
  }
])
