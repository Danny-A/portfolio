import type { CodegenConfig } from '@graphql-codegen/cli';

import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://graphql.datocms.com/': {
        headers: {
          authorization: `Bearer ${process.env.AUTH_TOKEN}`,
        },
      },
    },
  ],
  documents: ['./graphql/**/*.tsx'],
  generates: {
    './generated/gql/': {
      preset: 'client',
      plugins: [],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
  config: { namingConvention: './utils/graphql-naming-fn.ts' },
};

export default config;
