const expect = require('chai').expect;
const ffi = require('ffi');
const ref = require('ref');
const iconv = require('iconv-lite');
// const ArrayType = require('ref-array');
const wchar = require('ref-wchar');
const wstring = wchar.string;

const intPtr = ref.refType('int');
const boolPtr = ref.refType('bool');
const floatPtr = ref.refType('float');
const doublePtr = ref.refType('double');
const charPtr = ref.refType('char');

const lib = ffi.Library('Debug/node-ffi-sample', {
  voidFunc: ['void', []],
  intFunc: ['int', ['int', intPtr]],
  boolFunc: ['bool', ['bool', boolPtr]],
  floatFunc: ['float', ['float', floatPtr]],
  doubleFunc: ['double', ['double', doublePtr]],
  charFunc: ['char', ['char', charPtr]],
  strFunc: ['int', ['string', 'pointer', 'int']],
  wstrFunc: ['int', [wstring, 'pointer', 'int']],
});

// void
expect(lib.voidFunc()).to.be.null;

// int
const outInt = ref.alloc('int');
expect(lib.intFunc(1, outInt)).to.equal(1);
const actualInt = outInt.deref();
expect(actualInt).to.equal(1);

// bool
const outBool = ref.alloc('bool');
expect(lib.boolFunc(false, outBool)).to.false;
const actualBool = outBool.deref();
expect(actualBool).to.false;

// float
const EPSILON = 0.0000001;
const outFloat = ref.alloc('float');
expect(lib.floatFunc(1.1, outFloat)).to.closeTo(1.1, EPSILON);
const actualFloat = outFloat.deref();
expect(actualFloat).to.closeTo(1.1, EPSILON);

// double
const outDouble = ref.alloc('double');
expect(lib.doubleFunc(1.1, outDouble)).to.equal(1.1);
const actualDouble = outDouble.deref();
expect(actualDouble).to.equal(1.1);

// char
const expectChar = 'a'.charCodeAt(0); // new Buffer('a')[0];
const outChar = ref.alloc('char');
expect(lib.charFunc('a', outChar)).to.equal(expectChar);
const actualChar = outChar.deref();
expect(actualChar).to.equal(expectChar);

// str
const str = 'abcd';
const MAX_PATH = 256;
const outStringbuf = new Buffer(MAX_PATH);
expect(lib.strFunc(str, outStringbuf, MAX_PATH)).to.equal(str.length);
const actualString = ref.readCString(outStringbuf, 0);
expect(actualString).to.equal(str);

// wstr
const wstr = 'abcdef中文a';
// const inWStringBuf = iconv.encode(new Buffer(wstr), 'utf-16', { addBOM: false });
// console.log('inWStringBuf', inWStringBuf);
const outWstringBuf = new Buffer(MAX_PATH * 2);
outWstringBuf.fill(0);
const actualLen = lib.wstrFunc(wstr, outWstringBuf, MAX_PATH);
expect(actualLen).to.equal(wstr.length);
console.log('outWstringBuf', outWstringBuf);
// const actualWstring = iconv.decode(outWstringBuf, 'utf-16');
const actualWstring = wstring.get(outWstringBuf, 0);
console.log('actualWstring', actualWstring);
// console.log('indexOf', outWstringBuf.indexOf('\u0000'));

// const actualWstring = outWstringBuf.toString('utf16le', 0, actualLen * 2);
expect(actualWstring).to.equal(wstr);
