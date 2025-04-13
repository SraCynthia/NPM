const _ = require('lodash');
const moment = require('moment');

const diff = _.difference([2,4,5,6,7],[4,5,6,7]);

console.log(diff);

const arr1 = [1,2,3];

const arr2 = [4,5,6];

const arr3 = _.concat(arr1, arr2);

console.log(arr3);

//moment
console.log(moment().format());
console.log(moment().format("D/M/Y, h:mm:ss a"));