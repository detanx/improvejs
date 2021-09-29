import { assert } from 'chai'
import { ALL_NUMBER_UP_LOW_ALPHABETS } from '../src/common/constant'
import * as methods from '../src/strings/index'

const jungle = (val, len = 4, custom = []) => {
  let customChar = []
  custom.forEach(item => {
    const type = typeof item
    if (type === 'string') {
      customChar.push(...Array.from(item))
    }
  })
  customChar = Array.from(new Set(customChar))
  custom = [...customChar, ...ALL_NUMBER_UP_LOW_ALPHABETS]
  return val.length === len && [...val].every(item => {
    return custom.includes(item)
  })
}

describe('string functions', function () {
  describe('- randomCode()', function () {
    it('should return true when run jungle(randomCode())', function () {
      assert(jungle(methods.randomCode()) === true, 'randomCode() length not 4 or return value not all in  ALL_NUMBER_UP_LOW_ALPHABETS')
    })

    it('should return true when run jungle(randomCode(6, ["!@#$$%", 100]), 6, ["!@#$$%", 100])', function () {
      assert(jungle(methods.randomCode(6, ['!@#$$%', 100]), 6, ['!@#$$%', 100]) === true, 'randomCode() length not 6 or return value not all in  ALL_NUMBER_UP_LOW_ALPHABETS.concat(["!@#$$%"])')
    })
  })
})