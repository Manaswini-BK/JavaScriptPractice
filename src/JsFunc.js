var det={
     details : function(city, country){
        let firstName= this.firstName;
        let lastName = this.lastName;
        console.log(firstName+" "+lastName+" "+city+" "+country);
    }
}

var person1 ={
    firstName:'Manaswini',
    lastName: 'Bhaskarpatla'
}

var person2 ={
    firstName:'Saurabh',
    lastName: 'Gupta'
}

var person3 ={
    firstName:'Priyanshi',
    lastName: 'Agrawal'
}

det.details.apply(person1,["Raipur","India"]);
det.details.call(person2,"Rai","IN");
var pfun = det.details.bind(person3,"Pune","MH");
pfun();

