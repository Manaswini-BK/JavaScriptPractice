class Employee{
    constructor(name,age,dept,hike,salary){
        this.name = name;
        this.age = age;
        this.dept = dept;
        this.hike = hike;
        this.salary = salary;
    }
    getDetails = function(){
        let emp = {};
        emp.name = this.name;
        emp.age = this.age;
        emp.dept = this.dept;
        return emp;
    }
    getCurrentSalary = function(){
        let currentSal = this.salary + (this.hike/100)*this.salary;
        return currentSal;
    }
}
class Person extends Employee{
    constructor(name,age,dept,hike,salary,experience){
        super(name,age,dept,hike,salary);
        this.experience = experience;
    }
    getExp = function(){
        return this.experience;
    }
}
let emp = new Employee("Manaswini",24,"MLTS",50,2000000);
let empdet = emp.getDetails();
console.log("Name: "+empdet.name+" Age: "+empdet.age+" Department: "+empdet.dept);
let empCurrSal = emp.getCurrentSalary();
console.log("Current Salary of "+empdet.name+" is: "+empCurrSal);

let p = new Person("Saurabh",24,"Mlts",50,2000000,2);
let pExp = p.getExp();
console.log();
let pCurrSal = p.getCurrentSalary();
console.log(p.name+" has "+pExp+" years of experience and his current salary is "+pCurrSal);
