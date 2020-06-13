// var manaswini ={
//     nickName:'Manu',
//     age: 24,
//     job: 'Software Engineer',
//     whatIsSheDoingNow: function(activity){
//         return this.nickName+" is right now "+ activity;
//     }
// }
// let act = manaswini.whatIsSheDoingNow("coding");
// console.log(act);
// let myArr = Object.values(manaswini);
// console.log(myArr);
// manaswini.whatIsSheDoingNow = manaswini.whatIsSheDoingNow.toString();
// let myArr1 = JSON.stringify(manaswini);
// console.log(myArr1);

//object accessors

var obj = {
    name:'Manaswini',
    age: 24,
    job:"",
     set professionSet(profession){
        this.job = profession;
    },
    get professionGet(){
        return this.job;
    }

};
obj.professionSet = 'Software Engineer';
console.log(obj.professionGet);