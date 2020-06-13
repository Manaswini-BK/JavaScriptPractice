// var x = -5;
    // var y = x >>> 0;
    // y = y.toString(2);
    // console.log(y);
    // var z;
    // z = parseInt(y,2);
    // z = z << 0;
    // console.log(z);
    // var findComplement = function(num) {
    //     if(num == 1){
    //         return 0;
    //     }
    //     else if(num == 2){
    //         return 1;
    //     }
    //     else{
    //         num = (num >>> 0).toString(2);
    //         num = num.split('').map((element) => element == '0'? '1': '0').join('');
    //         num = parseInt(num,2);
    //         num = num << 0;
    //         return num;
    //     }
            
    // };
    /**
 * @param {string} s
 * @return {number}
 */
// var x = NaN;
// if( !(x > 100) ){
//     console.log("woo");
// }
// else{
//     console.log("oops");
// }
// console.log(undefined * 1);
// var salary = "1000$";

// (function () {
//   console.log("Original salary was " + salary);

//   var salary = "5000$";

//   console.log("My New Salary " + salary);
// })();
// var person = {
//     name: 'Manu',
//     age:24,
//     job: 'Software Engineer'
// };
// Object.defineProperty(person,'phone',{
//     value: 7032834890,
//     enumerable: false
// });

// console.log(person);
// console.log(Object.keys(person))

// alert(foo());
// function foo() {  
//     var bar = function() 
//     {    
//         return 3;  
//     };
//     return bar();  
//     var bar = function()
//     { 
//         return 8;
//     };
// }

var oddEvenList = function(head) {
    if(head === null || head.next === null){
        return head;
    }
    var oddHead = head;
    var oddList = oddHead;
    var evenHead = head.next;
    var evenList = evenHead;
    while(oddList!=null && oddList.next!=null && evenList!=null && evenList.next!=null){
        oddList.next = evenList.next;
        oddList = oddList.next;
        
        evenList.next = oddList.next;
        evenList = evenList.next;
    }
    oddList.next = evenHead;
    head = oddHead
    return head;
    
};

var oddEvenList = function(head) {
    if(!head) return null;
    let odd = head;
    let even = head.next;
    let evenHead = even;
    
    while (even != null && even.next != null) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        
        odd = odd.next;
        even = even.next;
    }
    
    
    odd.next = evenHead;
    
    return head;
}; 
