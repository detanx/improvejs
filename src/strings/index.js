import { ALL_NUMBER_UP_LOW_ALPHABETS } from '../common/constant'
/**
 * @description // 生成随机 n 个字母、数字
 * @param { Number } n 整数
 * @param { Array } custom 自定义字符
 * @return { String } 
 */
export const randomCode = (n = 4, custom = []) => {
  n = n < 4 ? 4 : n
  let codeArr = [...ALL_NUMBER_UP_LOW_ALPHABETS]
  if (Array.isArray(custom)) {
    custom.forEach(item => {
      const type = typeof item
      if (type === 'string') {
        codeArr.push(...Array.from(item))
      }
    })
    codeArr = Array.from(new Set(codeArr))
  }
  const length = codeArr.length
  const resultArr = []
  for(let i = 0;i < n; i ++) {
    resultArr.push(codeArr[Math.floor(Math.random() * length)])
  }
  return resultArr.join('')
}