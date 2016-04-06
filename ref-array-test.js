const ffi = require('ffi');
const ref = require('ref');
const ArrayType = require('ref-array');

const IntArray = ArrayType('int');
const StringArray = ArrayType('string');

const lib = ffi.Library('Debug/node-ffi-sample', {
  intArrFunc: ['void', [IntArray, 'int']],
  strArrFunc: ['void', [StringArray, 'int']],
});

const intArr = [1, 2, 3, 4];
lib.intArrFunc(intArr, intArr.length);

const strArr = [
  'abc',
  'bcd',
  'cde',
];
lib.strArrFunc(strArr, strArr.length);
