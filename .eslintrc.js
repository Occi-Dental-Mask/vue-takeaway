// module.exports = {
//   root: true,
//   env: 
//     node: true
//   },
//   extends: [
//     'plugin:vue/vue3-essential',
//     '@vue/standard'
//   ],
//   parserOptions: {
//     parser: 'babel-eslint'
//   },
//   rules: {
//     "indent": ["off", 1],
//     'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
//   }
// }
module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: "babel-eslint"
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 'off',
  },
  extends: [
    "eslint:recommended", "plugin:vue/vue3-essential"
  ]
}