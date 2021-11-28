export default {
    input: './index-a.js',
    output: {
      file: 'dist/a.js',
      format: 'es'
    },
    treeshake: {
      preset: 'smallest'
    }
  };