function zigZag(s,numRows){
    var cycle = (numRows*2)-2;
    var len = s.length;
    var rotation = len/cycle;
    rotation= Math.ceil(rotation);
    var i = 1; var j = cycle -1;
    var str = '';
    //if string length is less than cycle * rotation, adding '' (empty string)
    if(len < (cycle*rotation)){
        let diff = (cycle*rotation) - len;
        s = s.split('');
        let k = 0;
        for(k=0;k<diff;k++){
            s.push('');
        }
    }

    if(numRows == 1){
        return s;
    }
    else{
        for(let l=0;l<rotation;l++){
            str = str+s[l*cycle]; //for first time 
        }
       while(i<=j){
           a=i;
           b=j;
           if(i==j){
            for(let x =0;x<rotation;x++){
                str =str + s[a];
                a=a+cycle;
            }
            j--; //to stop the loop
           }
           else{
            for(let x =0;x<rotation;x++){
                str =str + s[a]+s[b];
                a=a+cycle;
                b=b+cycle;
            }
            i++;
            j--;
           }
       }
       return str;
    }
}
var res = zigZag("PAYPALISHIRING",4);
console.log(res);