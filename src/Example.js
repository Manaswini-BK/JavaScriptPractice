// var a ={a:1,b:1};
// var b= a;
// b.a = 2;
// console.log(a);
// console.log(b);

// a = {a:5,b:3};
// console.log(a);
// console.log(b);
// var Person = {
//     name : "John",
//     age : 23,
//     getDetails: function(){
//         console.log("Name "+this.name);
//         console.log("Age "+this.age);
//     }
// }
// console.log(Person.getDetails());
function person(name,age){
    var pname = name;
    var page = age;
    let getDetails = function(){
        console.log("1 Name "+name);
        console.log("1 Age "+age);
    }
    this.getDetails1 = function(){
        console.log("2 Name "+name);
        console.log("2 Age "+age);
    }
    //return getDetails();
}
var a = new person("John",23);
console.log(a.pname);
a.getDetails;
a.getDetails1();
var a =[];
a.push(1);