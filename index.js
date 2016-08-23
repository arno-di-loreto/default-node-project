'use strict';

const example = require('./lib/example');

console.log('2 + 3 = %d', example.dummy(2, 3));

exports.dummy = example.dummy;
