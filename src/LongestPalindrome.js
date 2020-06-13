/**
 * @param {string} s
 * @return {string}
 */
var maxLen = 0;
var startFrom = 0;
var longestPalindrome = function(s) {
    var len = s.length;
    if(len < 2){
        return s;
    }
    else if(s === (s.split('').reverse().join(''))){
        return s;
    }
    else{
        for(let i=0;i<len-1;i++ ){
            findPalindrome(s,i,i);
            findPalindrome(s,i,i+1);
        }
        return s.substring(startFrom, startFrom + maxLen);
    }
    
};

function findPalindrome(s,start,end){
   while(start>=0 && end<s.length && (s[start] === s[end])) {
       start--;
       end++;
   }
   if(maxLen< (end-start-1)){
       maxLen = (end-start-1);
       startFrom = start+1; 
   } 
}
console.log(longestPalindrome("cbbd"));