let n = 3;
let matrix = new Array(n).fill().map(()=> new Array(n).fill(''));
let startRow = 0;
let endRow = n-1;
let startCol = 0;
let endCol = n-1;
let counter =1;

while(startRow<=endRow){
    if(startRow%2 === 0){
        for(let i =startCol;i<= endCol;i++){
            matrix[startRow][i] = counter++;
        }
        startRow++;
    }
    else{
        for(i=endCol;i>=startCol;i--){
            matrix[startRow][i] = counter++;
        }
        startRow++;
    }
}
console.log(matrix);