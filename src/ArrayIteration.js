//ForEach
var arr = [67,1,78,25,34,12];
var a = [];
arr.forEach(myFunc);

function myFunc(value){
  a.push(value + 1);
}
console.log(a);


//reduce
// var arr =[2,34,12,67,23];
// var sum = arr.reduce(fun);
// console.log(sum);

// function fun(tot,val){
//   console.log(tot+" "+val+" Function");
//   tot = tot+val;
//   return tot;
// }

//every
// var arr = [1,2,3,4];
// var check = arr.every(fun);
// console.log(check);

// function fun(val){
//   return val<=4;
// }
 //find
//  var arr = [5,3,2,4];
// var check = arr.find(fun);
// console.log(check);

// function fun(val){
//   return val<4;
// }

// //findIndex
// var arr = [5,3,2,4];
// var check = arr.findIndex(fun);
// console.log(check+1);

// function fun(val){
//   return val<4;
// }



