//rollup.config.smurf.js
export default {
    input: './src/index.js',
    output: {
       file: 'dist/smurf.js',
       format: 'es',
      validate: true
    },
    external: [
      
    ]
  };