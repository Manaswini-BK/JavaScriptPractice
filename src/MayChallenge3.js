var canConstruct = function(ransomNote, magazine) {
    magazine = magazine.split('');
    for(var i =0 ; i< ransomNote.length ; i++){
        if(magazine.includes(ransomNote[i])){
            magazine[magazine.indexOf(ransomNote[i])] = '';
        }
        else
            return false;
    }
    return true;
    
};
console.log(canConstruct("morning","abcghimnoprsnab"));