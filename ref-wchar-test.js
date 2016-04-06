var iconv = require('iconv-lite');
var ref = require('ref');
var wchar = require('ref-wchar');
var wstring = wchar.string;

var utf16Buf = iconv.encode(new Buffer('abcd中文\0acc'), 'utf-16', { addBOM: false });
var str = utf16Buf.reinterpretUntilZeros(2).toString('utf16le');
console.log('str', str); // expect abc