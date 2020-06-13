function removeThreeConsecutiveOccurence(str){
    str = str.split('');
    var arr = [];
    arr.push(str[0]);
    for(let i=1; i<str.length; i++){
        arr.push(str[i]);
        if((str[i] === str[i-1]) && str[i] === str[i+1]){
            i = i + 1;
        }
    }
    arr = arr.join('');
    return check(arr) ? removeThreeConsecutiveOccurence(arr): arr;
}

function check(str){
    var needRecursion = false;
    str = str.split('');
    for(i = 1; i< str.length;i++){
        if((str[i] === str[i-1]) && str[i] === str[i+1]){
            needRecursion = true;
            break;
        }
    }
    return needRecursion ? true : false;
}
console.log(removeThreeConsecutiveOccurence('xxxxtxxxxtxxxt'));