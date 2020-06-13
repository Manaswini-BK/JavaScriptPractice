function printSomething(){
    let word = 'Hello! ';
    var printInsidePrint = function(){
        word = word + 'World ';
        return word;
    }
    return printInsidePrint;
}
var print = printSomething();
var p1 = print();
var p2 = print();
var p3 = print();

console.log(p1);
console.log(p2);
console.log(p3);