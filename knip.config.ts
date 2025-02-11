import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/index.ts'],
  project: ['src/**/*.ts'],
  ignore: ['**/*.test.ts'],
  rules: {
    files: 'error',
    dependencies: 'error',
    exports: 'warn',
  },
};

export default config;
