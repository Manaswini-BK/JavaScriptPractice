/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var i = 1;
        var j = n;
        while(i<=j){
           var mid = Math.floor((i+j)/2);
            !isBadVersion(mid) ? i = mid + 1 : j = mid - 1;
        }
        return j+1;
    };
};