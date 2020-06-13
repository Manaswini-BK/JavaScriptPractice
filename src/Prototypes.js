function fun(name, age){
    this.name = name;
    this.age = age;
    function details(){
        console.log(this.name+ "  "+this.age);
    }
}
var p1 = new fun("Manu",23);
console.log(p1.prototype);

