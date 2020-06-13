/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    var maxLen = -1
    var nLen = nums.length;
    var start = 0;
    var len = -1;
    var i = 0,j=1;
    if(nLen == 2){
        return nLen;
    }
    while(j<nLen){
        nums[i] != nums[j] ? len = j-start+1 : start = i;
        if(!(len & 1)) // to check if len is even as we want equal number of 0s and 1s
            maxLen = Math.max(maxLen,len);
        i++; j++;
    }
    return maxLen;
};
console.log(findMaxLength([0,1,0,1,0,1,1,0,1]));