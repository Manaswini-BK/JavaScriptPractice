var arrOfObj = function(){
    let arr = [];
    arr=[
        {
            name: "Sam",
            age: 24
        },
        {
            name:"Robert",
            age:42
        },
        {
            name:"Elsa",
            age:18
        },
        {
            name:"Emma",
            age:10
        },
        {
            name:"Daniel",
            age: 33
        }
    ];
    let newArr = arr.filter((val)=>{
        return val.age > 20;
    });
    console.log(newArr);
}
arrOfObj();