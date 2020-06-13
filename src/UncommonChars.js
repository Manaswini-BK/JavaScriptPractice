function uncommonChars(str1,str2){
    var arr1 = [];
    var arr2 = [];
    var set1 = new Set(str1);
    var set2 = new Set(str2);
    arr1 = Array.from(set1); // to convert the set into array
    arr2 = Array.from(set2);
    var size = arr2.length;
    for(let i = 0; i<size ; i++){
        if(!(arr1.includes(arr2[i]))){
            arr1.push(arr2[i]);
        }
        else{
            let x = arr1.indexOf(arr2[i]);
            arr1.splice(x,1);
        }
    }
    console.log(arr1);
}
uncommonChars("apple", "pineapple");