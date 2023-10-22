module.exports = {
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs']
    }
  },
  presets: [['@babel/preset-env', { modules: false }], '@vue/babel-preset-jsx'],
  plugins: [['@babel/plugin-transform-runtime']],
  ignore: ['node_modules/**']
}
