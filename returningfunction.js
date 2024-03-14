/*
the function which returns something to the caller is called
as the returning function.
return keyword is used to send something to the caller.
*/

function returnfunction(a,b=20)
{
  return(a+b);
 // console.log("this is return function.");
}

//console.log(returnfunction(23,23));
let cv=returnfunction(40,40);
console.log(cv);