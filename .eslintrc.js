module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: 'module', //类型为module，因为代码使用了使用了ECMAScript模块
    "ecmaVersion": 2015
  },
  env: {
    browser: true, //预定义的全局变量，这里是浏览器环境
  },
  globals: {
    console: true,
  },
  plugins: [
    'html' //插件，此插件用于识别文件中的js代码，没有MIME类型标识没有script标签也可以识别到，因此拿来识别.vue文件中的js代码
  ],

  // add your custom rules here
  'rules': {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: ['error', 'single'], //强制使用单引号
    semi: ['error', 'never'], //强制不使用分号结尾
    eqeqeq: ['error', 'always'], // 强制在任何情况下都使用 === 和 !==
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true
    }], // 强制在代码块中使用一致的大括号风格
    //这里写自定义规则
    "no-var": 2, //禁用var，用let和const代替

  }
}