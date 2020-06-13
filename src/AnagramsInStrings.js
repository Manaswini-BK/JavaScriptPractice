var findAnagrams = function(s, p) {
    var sMap={};
    var pMap={};
    var result =[];
    var plen = p.length;
    var slen = s.length;
    for(let i=0;i<plen;i++){
        pMap[p[i]] =  ~~pMap[p[i]] + 1;
    }
    for(let i=0;i<slen;i++){
        sMap[s[i]] = ~~sMap[s[i]] + 1;
        if(i>=plen){
            sMap[s[i-plen]] == 1 ? delete sMap[s[i-plen]] : sMap[s[i-plen]]-- ;
        }
        if(isEqual(sMap,pMap)){
            result.push(i-plen+1);
        }
    }
    return result;
};
//To compare two maps
function isEqual(sMap,pMap){
    if(Object.keys(sMap).length != Object.keys(pMap).length){
        return false;
    }
    for(let key in sMap){
        if(sMap[key] !== pMap[key]){
            return false;
        }
    }
    return true;
}
console.log(findAnagrams('cbaebabacd','abc'));