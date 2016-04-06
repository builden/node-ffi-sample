// [参考API](http://tootallnate.github.io/ref/)

const ref = require('ref');

// 默认是小端
console.log('ref endianness', ref.endianness);
console.log('ref.NULL', ref.NULL);
console.log('ref.NULL memory addr', ref.address(ref.NULL));

console.log('\n========= get address ==========');
var buf = new Buffer(2); // 分配2个字节空间
console.log('buf', buf);
console.log('buf memory addr', ref.address(buf));

console.log('ref.NULL isNull', ref.isNull(ref.NULL));
console.log('buf isNull', ref.isNull(buf));

// read js Object from Buffer
console.log('\n========= read obj ==========');
const obj = { foo: 'bar' };
buf = ref.alloc('Object', obj);
console.log('obj buf', buf); // buf的内容为object对象的指针
const obj2 = ref.readObject(buf, 0);
console.log('obj2', obj2);

// read buffer
console.log('\n========= read buffer =========');
buf = new Buffer('hello world');
var pointer = ref.alloc('pointer', buf);
const buf2 = ref.readPointer(pointer, 0, buf.length);
console.log('buf2', buf2.toString());

// read CString
console.log('\n========= read buffer =========');
buf = new Buffer('hello\0world\0');
const str = ref.readCString(buf, 0);
console.log('str', str);

// read 大端的int64
// uint64 对应writeUInt64BE, readUInt64BE
console.log('\n========= read int64 BE =========');
buf = ref.alloc('int64'); // 这里不是指针
ref.writeInt64BE(buf, 0, '9223372036854775807');
console.log('buf', buf);
var val = ref.readInt64BE(buf, 0);
console.log('val', val);

// read 小端的int64
// uint64 writeUInt64LE, readUInt64LE
console.log('\n========= read int64 LE =========');
buf = ref.alloc('int64'); // 这里不是指针
ref.writeInt64LE(buf, 0, '9223372036854775807');
console.log('buf', buf);
val = ref.readInt64LE(buf, 0);
console.log('val', val);

// 指针
console.log('\n========= 类型指针 =========');
console.log('refType("int")', ref.refType('int'));
console.log('ref.types.int', ref.types.int);
console.log('refType("string")', ref.refType('string'));
console.log('refType("double")', ref.refType('double'));

/**
 * @name alloc
 * @param {Object|String} 类型指针
 * @param {?} 默认数据
 * @return {Buffer} 返回Buffer
 */
var intBuf = ref.alloc(ref.types.int);
var intWith4 = ref.alloc(ref.types.int, 8);
console.log('int', ref.alloc('int', 8));
console.log('intBuf', intBuf);
console.log('intWith4', intWith4);

/**
 * function allocCString (string, encoding)
 * @name allocString
 * @param {String}
 * @param {String}
 */
buf = ref.allocCString('hello world');
console.log(buf.toString());

buf = ref.alloc('int', 8);
val = ref.deref(buf);
console.log('var', val); // 8

/**
 * ref.types
 *   void
 *   int8
 *   uint8
 *   int16
 *   uint16
 *   int32
 *   uint32
 *   float
 *   double
 *   Object
 *   CString
 * 
 *   bool
 *   byte
 *   char
 *   uchar
 *   short
 *   ushort
 *   int
 *   uint
 *   long
 *   ulong
 *   longlong
 *   ulonglong
 *   size_t
 */