// let square = a => a*a;
// var x = square(3);
// console.log(x);

var arr =[
    {
        title:'Did Yoga?',
        isDone:true
    },
    {
        title:'Had breakfas?',
        isDone:true
    },
    {
        title:'Did ofc work in morning?',
        isDone:false
    },
    {
        title:'Investment Done?',
        isDone:true
    },
    {
        title:'Completed JS?',
        isDone:false
    }];

    // arr.filter(done=> done.isDone).forEach(val => console.log(val.title+" "+val.isDone));
    //console.log(thingsDone);


    // var obj ={
    //     fruit :'Orange',
    //     vitamin:'C',
    //     display(){
    //         console.log(this.fruit+" "+this.vitamin)
    //     }
    // };
    // obj.display();

    // var obj ={
    //     fruit :'Orange',
    //     vitamin:'C',
    //     display : () => console.log(this.fruit+" "+this.vitamin)
    //     };
    // obj.display();


    var obj ={
        fruit:'Orange',
        vitamin: 'C',
        display: function(){
          return  () => console.log(this.fruit+" "+this.vitamin);
        }
    };
    obj.display()();