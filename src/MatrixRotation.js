let n = 4,m=3;

let x = 1;
let startRow = 0;
let endRow = n-1;
let startCol = 0;
let endCol = m-1;
let prev,curr;
let matrics = new Array(n).fill().map(()=> new Array(m).fill(0));

for(let i =0;i<n;i++){
    for(j=0;j<m;j++){
        matrics[i][j] = x;
        x++
    }
}
console.log(matrics);
while(startRow<=endRow && startCol<=endCol){
    prev = matrics[startRow+1][startCol];
    for(let i =startCol; i<=endCol;i++){
        curr = matrics[startRow][i];
        matrics[startRow][i] = prev;
        prev = curr;
    }
    startRow++;
    for(let i= startRow;i<=endRow;i++){
        curr = matrics[i][endCol];
        matrics[i][endCol] = prev;
        prev = curr;
    }
    endCol--;
    for(let i =endCol;i>=startCol;i--){
            curr = matrics[endRow][i];
            matrics[endRow][i] = prev;
            prev = curr;
    }
    endRow--;
    for(let i=endRow;i>=startRow;i--){
        curr = matrics[i][startCol];
        matrics[i][startCol] = prev;
        prev = curr;
    }
    startCol++;
}
console.log(matrics);