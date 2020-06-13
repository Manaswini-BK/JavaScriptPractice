var myPromise = new Promise(function(resolve,reject){
    var x = 2;
    if(x>0)
    resolve('Wooohooo !!!');
    else
    reject('Ooooppss !!'); 
});
//1st way
myPromise.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})

//2nd way
myPromise.then((response)=>{
    console.log(response);
},error =>{
    console.log(error);
})

