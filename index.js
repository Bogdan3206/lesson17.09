let arr = [];

for (let i = 0; i < 100; i++) {
  arr.push(Math.round(Math.random() * 200 - 100));
}

arr.sort(function(a, b) {
  return b - a;
});

let html = "<ul>";
for (i = 0; i < arr.length; i++) {
  html += "<li>" + arr[i] + "</li>";
}

html += "</ul>";

document.body.innerHTML += html;

let b = document.querySelectorAll("li");
console.log(b);
for (let i = 0; i < b.length; i++) {
  let cc = +b[i].innerHTML;
  if (cc % 2 == 0) {
    b[i].remove();
  }
}

// let ar = [];
// let out = "";
// for (i = 0; i < 100; i++) {
//   ar.push(Math.round(Math.random() * 200 - 100));
// }
// ar.sort(function(a, b) {
//   return b - a;
// });
// for (i = 0; i < ar.length; i++) {
//   document.body.innerHTML += "<ul class='lll'>" + ar[i] + "</ul>";
// }
// let mm = document.querySelectorAll("li");
// let html = (document.querySelectorAll.innerHTML += "<li>" + ar + "</li>");
// console.log(ar);

// let a = [];
// let buffer = document.body.children;

// for (let i = 0; i < buffer.length; i++) {
//   console.log(buffer[i].children);
//   a[i] = buffer[i];
//   for (let j = 0; j < buffer[i].children; j++) {
//     console.log(buffer[i].children[j].children);
//     a.push(buffer[i].children[j]);
//     for (let k = 0; k < buffer[i].children[j].children.length; k++) {
//       console.log(bufer[i].children[j].children[k].children);
//       a.push(bufer[i].children[j].children[k]);
//     }
//   }
//   a.push(buffer[i]);
// }
// console.log([...document.querySelectorAll("body *")]);
// let b = [];
// let r = document.querySelectorAll("body *");
// for (let i = 0; i < r.length; i++) {
//   b.push();
// }

// console.log(s);

// sum(3)(4);

// let i = {
//   name: "bogdan",
//   surname: "Rudnev",
//   gender: "male",
//   weight: 82,
//   Age: 22,
//   growth: 186,
//   color: "white"
// };
// console.log(i[kay]);
// for (const kay in i) {
//   if (i[kay].lengts > 3) {
//     delete i(kay);
//   }
// }
// function mySome(arr, cb) {
//   let buffer = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let b = cb(arr[i], i, arr);
//     if (b) {
//       buffer += 1;
//     }
//   }
//   return buffer != 0;
// }
// mySome([23, true, "Hello", -123, false], function(e, i, self) {
//   return typeof e == "bollean";
// });
// console.log(mySome(arr, cb));

// function rand(min, max) {
//   return Math.random() * (max - min) + min;
// }

// function createArray() {
//   let arr = [];
//   let rnd = rand(10, 100);
//   for (let i = 0; i < rnd; i++) {
//     arr.push(parseInt(rand(-10, 11)));
//   }
//   return arr;
// }

// function bubleSort(arr) {
//   let sort = false;
//   while (!sort) {
//     sort = true;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         sort = false;
//         let tmpElem = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = tmpElem;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubleSort(createArray()));

// const a = createArray();

// let sum = 0;
// a.forEach(function(item, i) {
//   console.log(item, i);
// });
// console.log(sum);

// var arr2 = [];

// for (i = 0; i < 100; i++) {
//   arr2.push(Math.round(Math.random() * 10 - 10));
// }
// console.log(arr2);

// var max = 10;
// var min = -10;

// var R = Math.random();

// var _max = Math.abs(max);
// var _min = Math.abs(min);

// for (var i = 0; i < 20; i++) {
//   console.log(min * ((Math.random() * (_max + _min)) / min + 1));
//   var max = 10;
//   var min = 10;
//   var r = min * (((Math.random() * (Math.abs(max) + Math.abs(min))) / min) * 1);
//   console.log(r);
// }

// function palindrome(string) {
//   var reverseString = "";
//   for (var k in string) {
//     reverseString += string[string.length - k - 1];
//   }
//   if (string === reverseString) {
//     alert("Пaлиндром");
//   } else {
//     alert("Не палиндром");
//   }
// }
// palindrome("osososososososososososo");

// arr = [1, 3, 2, 2, 2];
// function checkEmptyArray(arr) {
//   return arr.Length;
// }
// console.log(checkEmptyArray(arr));

// var dataFull = [3, 5, 7];
// var dataEmpty = [];

// var dataFull = [3, 5, 7];
// var dataEmpty = [];
// if (dataFull.length == 0) {
//   alert("Массив dataFull пустой");
// } else {
//   alert("В массиве dataFull что-то есть");
// }
// if (dataEmpty.length == 0) {
//   alert("Массив dataEmpty пустой");
// } else {
//   alert("В массиве dataEmpty что-то есть");
// }
// Array = [];
// function checkArray

// function random(min = 1, max = 0) {
//   return Math.ceil(Math.random() * (max - min) + min);
// }

// t = 100;

// while (t--) {
//   var f = parseInt(random(15));

//   console.log(f.toString());
// }

// var end = b < 0 ? 1 / res : res;
// return end;
// function pow(a, b) {
//   var res = 1;
//   for (var i = 0; i < Math.abs(b); i++) {
//     res *= a;
//   }
//   console.log(b < 0 ? 1 / res : res);
// }
// pow(6, 6);

// function pow(x, n) {
//   result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// x = prompt("x?");
// n = prompt("n?");
// console.log(pow(x, n));

// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert(pow(x, n));
// }

// function pow(a,b){
//   console.log(a *())
// }

// function sum(a, b) {
//   console.log(a + b);
// }

// var g = 628;
// var j = "kkadas";

// sum(g, j);
// sum(3, 5);
// sum(3, 5);
// sum(3, 5);
// sum(3, 5);

// var max = 10;
// var min = -10;

// var R = Math.random();

// var _max = Math.abs(max);
// var _min = Math.abs(min);

// for (var i = 0; i < 20; i++) {
//   console.log(min * ((Math.random() * (_max + _min)) / min + 1));
// var max = 10;
// var min = 10;
// var r = min * (((Math.random() * (Math.abs(max) + Math.abs(min))) / min) * 1);
// console.log(r);

// for (var i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// var a = [5, 2bgbgg, 3, 4, 5, 1, 2, -1, 2];

// var _ = 1;
// var k = 0;

// while (_ > 0) {
//   _ = a[k++];
// }
// console.log(_, k);

// var input = "";
// var userInputs = [];
// var k = 0;
// // var buferInput = parseInt[];
// console.log(userInputs);

// for (; typeof input == "string"; ) {
//   input = prompt("3Ha4eHue");
//   // var buferInput = parseInt(a);
//   console.log(typeof input);
//   var bufer = parseInt(input);
//   if (!isNaN(bufer)) {
//     userInputs[k] = bufer;
//     k++;
//   }
// }
// console.log(userInputs);

// userInputs[0] = 1;
// userInputs[1] = 23;
// console.log(userInputs);

// for (; typeof a == "string"; ) {
//   a = prompt("3Ha4eHue");
//   console.log(typeof a);
// }
