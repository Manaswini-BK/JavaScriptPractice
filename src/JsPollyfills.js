if(!String.prototype.startsWith){
    String.prototype.startsWith = function(str,pos){
        pos = pos || 0;
        return (this.substr(pos,str.length)) === str;
    }
}

Number.isNaN = Number.isNaN || function (input){
    return (typeof input === 'number') && (input!== input);
}