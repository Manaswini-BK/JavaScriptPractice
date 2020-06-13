/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var count = 0;
    for(i in S){
        if(J.includes(S[i])){
            count++;
        }
    }
    return count;
};