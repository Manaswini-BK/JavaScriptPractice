let n = 4;
let matrics = new Array(n).fill().map(()=> new Array(n).fill(''));
let startRow = 0;
let endRow = n-1;
let startCol = 0;
let endCol = n-1;
let counter =1;
while(startRow<=endRow && startCol<=endCol){
    for(let i =startCol; i<=endCol; i++){
        matrics[startRow][i] = counter;
        counter++;
    }
    startRow++;
    for(let i =startRow; i<=endRow;i++){
        matrics[i][endCol] = counter;
        counter++;
    }
    endCol--;
    for(let i=endCol;i>=startCol;i--){
        matrics[endRow][i] = counter;
        counter++;
    }
    endRow--;
    for(let i=endRow;i>=startRow;i--){
        matrics[i][startCol] = counter;
        counter++;
    }
    startCol++;
}
console.log(matrics);