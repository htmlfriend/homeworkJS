const a = 3;
const b = 4;

let result = a + b > 4 ? true : false;
console.log(result);

let login = 'Owner';
let message =
  login == 'Pitter'
    ? 'Hi'
    : login == 'Owner'
    ? 'Hello'
    : login == ''
    ? 'unknown'
    : '';

console.log(message);

const value = 'c';

if (value === 'a') {
  console.log('a');
} else if (value === 'b') {
  console.log('b');
} else if (value === 'c') {
  console.log('c');
} else if (value === 'd') {
  console.log('d');
} else if (value === 'e') {
  console.log('others');
} else {
  console.log('unknown');
}

//use switch

const val = 'c';

switch (val) {
  case 'a':
    console.log('a');
    break;
  case 'b':
    console.log('b');
    break;
  case 'c':
    console.log('c');
    break;
  case 'd':
    console.log('d');
    break;
  case 'e':
    console.log('e');
    break;

  default:
    console.log('unknown');
    break;
}

var i = 0;
while (i < 3) {
  console.log('номер ' + i++ + '!');
}

const array = [1, 2, 3, 4];
let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }

for (item of array) {
  if (item % 2 === 0) {
    sum += item;
  }
}
console.log(`Sum is ${sum}`);

const array1 = [1, 2, 3, 4, 5, 6];
let sumGrd = 0;

for (item of array1) {
  if (item > 3) {
    if (item % 2 === 0) {
      sumGrd += item;
    }
  }
}

console.log(`Sum is iquel ${sumGrd}`);

// reverse
const arr1 = [1, 2, 8, 3, 11, 4, 5, 6];
// const arr2 = [...arr1];
// const arr2 = [].concat(arr1);
// const arr2 = arr1.slice();

// deep copy
const arr2 = JSON.parse(JSON.stringify(arr1));
// const arr2 = Array.from(arr1);
// console.log(arr1.reverse());

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j <= arr1.length; j++) {
    if (arr1[i] > arr1[j]) {
      let a = arr1[i];
      arr1[i] = arr1[j];
      arr1[j] = a;
    }
  }
}
// 11,8,6,5,4,3,2,1

console.log('arr1 =', arr1);
console.log('arr2', arr2);
console.log(arr2 === arr1);
// console.log('%c Hi everyone!', 'color: #1c87c9; font-size: 18px');
// console.log(
//   '%c Style 1! %c Style 2!',
//   'color: #1c87c9; background: #ccc; font-size: 20px;',
//   'color: #8ebf42; background: # 666; font - size: 20 px;'
// );

const arr3 = [1, 2, 8, 3, 11, 4, 5, 6];
for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j <= arr3.length; j++) {
    if (arr3[i] < arr3[j]) {
      let a = arr3[i];
      arr3[i] = arr3[j];
      arr3[j] = a;
    }
  }
}

console.log('arr3', arr3);

const array11 = [2, 5, 9, 15, 0, 4];

for (item of array11) {
  if (item > 3 && item < 10) {
    console.log(item);
  }
}

const array3 = [2, -1, -3, 15, 0, 4];
let sum2 = 0;
for (item of array3) {
  if (item > 0) {
    sum2 += item;
  }
}
console.log('sum2', sum2);

const array21 = [1, 2, 5, 9, 4, 13, 4, 10, 4];
let count = 0;
for (item of array21) {
  if (item === 4) {
    console.log(`I am here elem ${item}`);
    count++;
    // break;
  }
}

console.log('count of elems', count);

const n = 1000;

let copyN = n;
let countLoop = 0;

while (copyN > 50) {
  copyN /= 2;
  countLoop += 1;
  console.log('copyN now', copyN);
}
console.log(countLoop);
