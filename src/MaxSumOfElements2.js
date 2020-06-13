function maxSumofEle(arr){
    var nums = [];
    var x;
    var max = -1;
    var hashEle = {};
    for(let i = 0;i < arr.length; i++){
        var ele = [];
        var sum = addDigits(arr[i]);
        ele.push(arr[i]);
        for(let j= i+1;j< arr.length;j++){
            var sum1 = addDigits(arr[j]);
            if(sum == sum1){
                ele.push(arr[j]);
            }
        }
        ele.sort();
        var k = ele[ele.length-1]+ele[ele.length-2]
        if(k > max){
            max = k;
        }
        
    }   
    return max; 
}
function addDigits(num){
    x = ""+num;
    nums = x.split('');
    nums = nums.map(Number);
    var sum = 0 ;
    for(i in nums){
        sum = sum + nums[i];
    }
    return sum;
}
console.log(maxSumofEle([42,33,60]));