import { expect } from 'chai'
import * as methods from '../src/arrays/index'

describe('arrays functions', function () {
  describe('- splitArray()', function () {
    it('should return [[1, 2], [3, 4]] when run splitArray([1, 2, 3, 4])', function () {
      expect(methods.splitArray([1, 2, 3, 4])).deep.equal([[1, 2], [3, 4]])
    })

    it('should return [[1, 2, 3], [4, 5, 6]] when run splitArray([1, 2, 3, 4, 5, 6], 3)', function () {
      expect(methods.splitArray([1, 2, 3, 4, 5, 6], 3)).deep.equal([[1, 2, 3], [4, 5, 6]])
    })

    it('should return [[1, 2, 3], [4, 5]] when run splitArray([1, 2, 3, 4, 5], 3)', function () {
      expect(methods.splitArray([1, 2, 3, 4, 5], 3)).deep.equal([[1, 2, 3], [4, 5]])
    })
  })
})