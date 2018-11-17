module.exports = {
    'roots': [
      '<rootDir>/tests'
    ],
    'transform': {
      '.*\.tsx?$': 'ts-jest'
    },
    'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    'moduleFileExtensions': [
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'node'
    ],
    moduleNameMapper: {
        '\.(css|jpg|png|scss)$': '<rootDir>/empty-module.js',
      },
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/index.tsx',
      ]
  }