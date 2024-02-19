import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  // schema: `${process.env.NEXT_PUBLIC_BE_URL}/graphql`,
  schema: 'http://localhost:4000/graphql',
  documents: './src/lib/graphql/(queries|mutations)/**/*.ts',
  generates: {
    './src/lib/graphql/codegen/': {
      preset: 'client'
    }
  }
}

export default config
