const {createDefaultConfig} = require('@open-wc/testing-karma')
const merge = require('deepmerge')

module.exports = (config: any) => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        {
          pattern: config.grep ? config.grep : '**/*.component.test.ts',
          type: 'module',
        },
      ],
      plugins: [require.resolve('@open-wc/karma-esm'), 'karma-*'],
      frameworks: ['esm'],
      esm: {
        nodeResolve: true,
        fileExtensions: ['.ts'],
        coverageExclude: ['**/*.component.test.ts'],
        customBabelConfig: {
          presets: ['@babel/preset-typescript'],
          plugins: [
            [
              '@babel/plugin-proposal-decorators',
              {decoratorsBeforeExport: true},
            ],
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
      coverageIstanbulReporter: {
        thresholds: {
          emitWarning: true,
          global: {
            statements: 90,
            functions: 90,
            branches: 90,
          },
        },
      },
    }),
  )
  return config
}
