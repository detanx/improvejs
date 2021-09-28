(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f():typeof define==='function'&&define.amd?define(f):(g=typeof globalThis!=='undefined'?globalThis:g||self,g.improvejs=f());})(this,(function(){'use strict';function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var ALL_NUMBER_UP_LOW_ALPHABETS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];/**
 * @description // 生成随机 n 个字母、数字
 * @param { Number } n 整数
 * @param { Array } custom 自定义字符
 * @return { String } 
 */

var randomCode = function randomCode() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
  var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  n = n < 4 ? 4 : n;
  var codeArr = ALL_NUMBER_UP_LOW_ALPHABETS;

  if (Array.isArray(custom)) {
    custom.forEach(function (item) {
      var type = _typeof(item);

      if (type === 'string') {
        var _codeArr;

        (_codeArr = codeArr).push.apply(_codeArr, _toConsumableArray(Array.from(item)));
      } else if (type === 'number') {
        codeArr.push(item);
      }
    });
    codeArr = Array.from(new Set(codeArr));
  }

  var length = codeArr.length;
  var resultArr = [];

  for (var i = 0; i < n; i++) {
    resultArr.push(codeArr[Math.floor(Math.random() * length)]);
  }

  return resultArr.join('');
};var strings=/*#__PURE__*/Object.freeze({__proto__:null,randomCode:randomCode});/**
 * @description 数组分段, 用法: segArray([1, 2, 3, 4], 2) // [[1, 2], [3, 4]]
 * @param {Array} arr 原数组
 * @param {Integer} size 分段大小
 */
var segArray = function segArray(arr) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return arr.reduce(function (res, item, index) {
    if (!Array.isArray(arr)) {
      return [];
    }

    if (size < 2) {
      return arr;
    }

    if (index % size === 0) {
      res.push(arr.slice(index, index + size));
    }

    return res;
  }, []);
};var arrays=/*#__PURE__*/Object.freeze({__proto__:null,segArray:segArray});var index = _objectSpread2(_objectSpread2({}, strings), arrays);return index;}));