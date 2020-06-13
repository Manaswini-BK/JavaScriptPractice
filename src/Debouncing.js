var counter = 0;

function getData(){
    console.log("Fetching Data...", counter++);
}

function someSuggestions(func,delay){
    let timer;
   
    return function (){
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(context,args);
        },delay);
    }
}

const getSuggestions = someSuggestions(getData,400);