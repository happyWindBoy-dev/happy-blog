module.exports = {
  compilerOptions: {
    target:
      'es5' /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. */ /* Specify library files to be included in the compilation. */,
    strict: true /* Enable all strict type-checking options. */,
    allowJs: true,
    esModuleInterop:
      true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
    skipLibCheck: true /* Skip type checking of declaration files. */,
    forceConsistentCasingInFileNames:
      true /* Disallow inconsistently-cased references to the same file. */,
    moduleResolution: 'node',
  },
  paths: {
    '@vueuse/core': ['node_modules/@@vueuse/core/index.d.ts'],
  },
};
