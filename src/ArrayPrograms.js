/* var arr = [1,2,3,5,6,7,8,9,10];
var cnt = 1;
console.log(findMissingNum(arr));
function findMissingNum(arr){
    for(i in arr){
        if(arr[i]!== cnt){
            return cnt;
        }
        cnt+=1;
    }
    return false;
} */

// var arr =[8,4,6,5,9,1,2,8,7]
// console.log(findDuplicates(arr));
// function findDuplicates(arr){
//     var a=[];
//     for(i in arr){
//         if(a.includes(arr[i])){
//             return arr[i]
//         }
//         else{
//             a.push(arr[i]);
//         }
//     }
//     return false;
// }

//  var arr =[8,4,6,5,9,1,2,8,7]
// console.log(findDuplicates(arr));
// function findDuplicates(arr){
//     const hashEle = {};
//     for(i in arr){
//         if(hashEle[arr[i]]){
//             console.log(hashEle);
//             return arr[i];
//         }
//         else{
//             hashEle[arr[i]] = arr[i]
//         }
//     }
//     return false;
// } 

// var arr = [13,67,84,2,1,120,14,189];
// console.log(findMaxMin(arr));
// function findMaxMin(arr){
//     var min = arr[0]; var max = arr[0];
//     for(i in arr){
//         if(arr[i]<min){
//             min = arr[i]
//         }
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return {"min": min, "max": max};
// }

// var arr =[1,1,2,7,8,3,4,45,2,9,8,5,7,3,45,20,2];
// console.log(multipleDuplicates(arr));
// function multipleDuplicates(arr){
//     const hashEle = {};
//     var dupli = [];
//     var cnt = 0;
//     for(i in arr){
//         if(hashEle[arr[i]]){
//             if(hashEle[arr[i]] === 1){
//                 dupli.push(arr[i]);
//             }
//             hashEle[arr[i]] = hashEle[arr[i]] + 1;
//         }
//         else{
//             hashEle[arr[i]] = 1;
//         }
//     }
//     console.log(hashEle);
//     return dupli;
// }

var arr = [1,5,6,1,0,1,7];
var val = 6;

console.log(findSum(arr,val));
function findSum(arr,val){
    var res =[];
    for(i in arr){
        let target = val - arr[i];
        if(arr.includes(target)){
            if(!(res.includes([arr[i],target])))
            res.push([arr[i],target]);
    }
}
    return res;
}