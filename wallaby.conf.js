var babel = require('babel-core')
module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'node_modules/babel/node_modules/babel-core/browser-polyfill.js', instrument: false},
      {pattern: 'node_modules/babel-core/browser-polyfill.js', instrument: false},
      {pattern: 'node_modules/chai/chai.js', instrument: false},
      'index.js',
      'src/**/*.js',
      'src/**/*.jsx'
    ],

    tests: [
      'test/setup.js',
      'test/**/*test.js'
    ],

    env: {
      type: 'node',
      params: {
        env: 'NODE_PATH=./src;NODE_ENV=test'
      }
    },

    testFramework: 'mocha',
    // for node.js tests you need to set env property as well
    // http://wallabyjs.com/docs/integration/node.html

    compilers: {
      'index.js': wallaby.compilers.babel({
        babel: babel,

        // NOTE: If you're using Babel 6, it should be `presets: ['es2015']` instead of `stage: 0`.
        // You will also need to
        // npm install babel-core (and require it instead of babel)
        // and
        // npm install babel-preset-es2015
        // See http://babeljs.io/docs/plugins/preset-es2015/

        presets: ['es2015', 'react']
      }),
      '**/*.js': wallaby.compilers.babel({
        babel: babel,

        presets: ['es2015', 'react']
      })
    }
  };
};
