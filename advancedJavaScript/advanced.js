var arr = [1,2];
var arr2 = [1,2];
var arr3 = [];
arr3.push(arr);
arr3.push(arr2);
console.log(arr3);
var arr4 = [...arr,...arr2];
console.log(arr4)