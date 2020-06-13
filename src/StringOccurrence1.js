function noThreeOccurrences(str){
    var i = 1;
    str = str.split('');
    var countOfA = 0,countOfB = 0;
    while(i< str.length){
        if(str[i-1] == str[i] && str[i+1] == str[i]){
            if(str[i] == 'a'){
                countOfA++;
                str.splice(i+1,1,'b');
            }
            else if(str[i] == 'b'){
                countOfB++;
                str.splice(i+1,1,'a');
            }
        }
        i++;
    }
    if(countOfA == countOfB){
        return countOfA;
    }
    else{
        return countOfA>countOfB ? countOfA : countOfB;
    }
}

console.log(noThreeOccurrences("baaabbaabbba"));