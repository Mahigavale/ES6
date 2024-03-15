
/*
the spread operator is used to spread the array into another array by adding it
to the particular position.
we used to add only at start or end and not at anywhere we want in the array.
let us see by a demonstration here!
*/

let arr=[1,2,3,4,5,6]
let arr2=[7,8,9,10];


arr=[1,2,3,...arr2,4,5,6];

console.log(arr);