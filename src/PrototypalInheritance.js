function Employee(name,age,dept,hike,salary){
    this.name = name;
    this.age = age;
    this.dept = dept;
    this.hike = hike;
    this.salary = salary;
}
Employee.prototype = {
    getDetails : function(){
        let emp = {};
        emp.name = this.name;
        emp.age = this.age;
        emp.dept = this.dept;
        return emp;
    },
    getCurrentSalary : function(){
        let currentSal = this.salary + (this.hike/100)*this.salary;
        return currentSal;
    }
}

function Person(name,age,dept,hike,salary,experience){
    Employee.call(this,name,age,dept,hike,salary);
    this.experience = experience;
}
Person.prototype = Employee.prototype;
Object.defineProperty(Person.prototype,"constructor",{
    value: Person,
    enumerable: false,
    writable: true
});

Person.prototype.getExp =function(){
    return this.experience;
}



let emp1 = new Employee("Manaswini",24,"MLTS",50,2000000);
let emp1Details = emp1.getDetails();
console.log("Name: "+emp1Details.name+" Age: "+emp1Details.age+" Department: "+emp1Details.dept);
let emp1CurrSal = emp1.getCurrentSalary();
console.log("Current Salary of "+emp1Details.name+" is: "+emp1CurrSal);


let p = new Person("Saurabh",24,"Mlts",50,2000000,2);
let pExp = p.getExp();
console.log();
let pCurrSal = p.getCurrentSalary();
console.log(p.name+" has "+pExp+" years of experience and his current salary is "+pCurrSal);

