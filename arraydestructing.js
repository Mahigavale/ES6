/*
the array destructing is used to ease the process to access the array elements.
and to print them.


in this process we can decalre a shalow copy of array in the variables and equate them with the 
given array .
if we want skipparticular elements then just place comma in the place of the given variable.
so we can't access it fro anywhere.

*/


let arr=[1,2,3,4,5,6,7,8,9];

let[a,,,b]=arr;
//while destructing the array remeber that the values of a here start from the 1 and 
//so when we use them as for indices then it will also work from 1 only.

console.log(a,b);
console.log(arr[a]);//indices here and not the elements. first index not zero
console.log(arr[b]);//
//console.log(arr[c]);