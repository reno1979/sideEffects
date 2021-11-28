export default {
    input: './index-ac.js',
    output: {
      file: 'dist/ac.js',
      format: 'es'
    },
    treeshake: {
      preset: 'smallest'
    }
  };