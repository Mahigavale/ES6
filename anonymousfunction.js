// // /*

// // the function having no name for it is callled as the anonymous function.
// // there is no hoisting possible with the anonymous function.
// // */

// // let demo=function(a,b)
// // {
// //     let c;
// //     let d;
// //     c=a;
// //     d=b;
// //     console.log(c+d);
// // }

// // demo(10,10);

 

// let v1=function()
// {
//     console.log('anonymous');
// }

// function demo(v1,A,B)
// {
//     console.log(A+B);
// }
// demo(v1,20,40);


let arr=[5,6,7,8]

// let n;
// function demo(n)
// {
//     if (n>5)
//     return n;
// }

console.log(arr);
console.log(arr.map((n)=>
{
    if (n>7)
    return n;
}));
console.log(arr);