const path = require('path')
// 帮助 Rollup 查找外部模块，然后导入
const resolve = require('rollup-plugin-node-resolve')
// 将CommonJS模块转换为 ES2015 供 Rollup 处理
const commonjs = require( 'rollup-plugin-commonjs')
// 让我们可以使用es6新特性来编写代码
const babel = require("rollup-plugin-babel")
// js代码检测
const { eslint }  = require('rollup-plugin-eslint')
// 压缩js代码，包括es6代码压缩
const { terser } = require('rollup-plugin-terser')

const improvejs = 'improvejs'

module.exports = (config) => {
  const { fileName, name, compress } = config
  return {
    input: {
      input: path.join(__dirname, '../src') + '/index.js',
      external: [
        'improvejs'
      ],
      plugins: [
        babel({
          exclude: 'node_modules/**'
        }),
        compress && terser()
        // resolve(),
        // commonjs(),
        // eslint(),
      ]
    },
    output: {
      file: fileName,
      format: 'umd',
      name: name || improvejs,
      globals: {
        improvejs
      },
      compact: true
    }
  }
}