function maxSumOfElements(arr){
    var nums = [];
    var x;
    var ele = [];
    var max = -1;
    var hashEle = {};
    for(let i = 0;i < arr.length; i++){
        x = ""+arr[i];
        nums = x.split('');
        var sum = addDigits(nums);
        if(hashEle[sum]){
            hashEle[sum] = hashEle[sum] + arr[i];
            if(hashEle[sum] > max){
                max = hashEle[sum];
                console.log(max);
            }
        }
        else{
            hashEle[sum] = arr[i];
        }
    }
    
    return max;
}

function addDigits(nums){
    nums = nums.map(Number);
    var sum = 0 ;
    for(i in nums){
        sum = sum + nums[i];
    }
    return sum;
}
console.log(maxSumOfElements([51,17,60,11,42,71,10]));