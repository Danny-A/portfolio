import type { CodegenConfig } from '@graphql-codegen/cli';
import './envConfig.ts';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://graphql.datocms.com': {
        headers: {
          Authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
          'X-Exclude-Invalid': 'true',
        },
      },
    },
  ],
  documents: ['./src/graphql/**/*.graphql'],
  generates: {
    'src/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        strictScalars: true,
        scalars: {
          BooleanType: 'boolean',
          CustomData: 'Record<string, unknown>',
          Date: 'string',
          DateTime: 'string',
          FloatType: 'number',
          IntType: 'number',
          ItemId: 'string',
          JsonField: 'unknown',
          MetaTagAttributes: 'Record<string, string>',
          UploadId: 'string',
        },
        namingConvention: {
          enumValues: './src/utils/pascalCaseWithUnderscores.ts',
        },
      },
    },
  },
  hooks: { afterOneFileWrite: ['prettier --write'] },
};

export default config;
