const ffi = require('ffi');
const ref = require('ref');
const StructType = require('ref-struct');

const Test1Struct = new StructType({
  a: ref.types.int,
  b: ref.types.int,
  c: ref.types.double,
});

const Test1SturctPtr = ref.refType(Test1Struct);

const lib = ffi.Library('Debug/node-ffi-sample', {
  structFunc: ['void', [Test1SturctPtr]],
});

const test1 = new Test1Struct({
  a: 1,
  b: 2,
  c: 1.1,
});

lib.structFunc(test1.ref());
