let person ={
    name: 'Manaswini',
    job: 'Software Engineer'
}
function details(city,country){
    console.log(this.name+"\n"+this.job+"\n"+city+"\n"+country);
}

var detFun = details.bind(person,"Hyderabad");
detFun("India");

Function.prototype.myBind = function(...args){
    let obj = this;
    params = args.slice(1);
    return function(...args1){
        obj.apply(args[0],[...params,...args1]);
    }
}

var detFunPolly = details.myBind(person,"Hyderabad");
detFunPolly("India");