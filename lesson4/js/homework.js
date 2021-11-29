//1
//let arr = [1,33,456,986,122]
//найти суму квадратов всех значений масива (reduce)
//2
//let arr = [ 'Tanita', 'Vasyl', 'George', 'Stepan']
//получить массив вида: [ 'My name is Tanita','My name is Vasyl', и тд... ] использовать map
//3
//написать функцию которая будет принимать входным параметром массив
//и переставит в нем елементы так что в начале массива будут только цифры а в конце только строки
//
//let arr =[2, 6, 7, "a", "b", "q"]
// function sortTheArray(someArray){
//     // ваш код
// }
//
// sortTheArray(["b", 6, "a", "q", 7, 2])

// --------------------------------------------------------------------------

// 1. 
let arr1 = [1, 33, 456, 986, 122];
let result = arr1.reduce((sum, current) => sum + current * current, 0);
console.log(result);

// 2.
let arr2 = ['Tanita', 'Vasyl', 'George', 'Stepan'];
let result2 = arr2.map((item) => `My name is ${item}`);
console.log(result2);

// 3.
function sortTheArray(someArray) {
  const numbArr = someArray.filter((item) => {
    return typeof item === 'number';
  });
  numbArr.sort();
  const strArr = someArray.filter((item) => {
    return typeof item === 'string';
  });
  strArr.sort();
  const concatArr = numbArr.concat(strArr);
  console.log(concatArr);
}

sortTheArray(["b", 6, "a", "q", 7, 2])