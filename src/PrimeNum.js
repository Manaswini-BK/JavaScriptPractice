var n = 23;
var i=2,j=1,x = 0,count =0;;
while(i<=n){
    j=1;
    count =0;
    while(j<=i){
        if(i%j === 0){
            count++;
        }
        j++;
        
    }
    if(count === 2){
        console.log(i+" ");
    }
    i++;
}
