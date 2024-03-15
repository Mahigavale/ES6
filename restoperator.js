/*
the rest operator is used to provide the felxibility to user to provide the 
number of elements it wants.
rest opeartor is used to take all the arguments from the end points.

remember that the rest operator must be the last argument in the functions taking the arguments.
it is prefixed by the ... and ,
the rest operator at any place other than the function description is behaved as the spread operator.

*/




(function(a,b,c,...alot)
{

let sum=0;

for(i of alot)
{
    sum+=i;
}

 console.log(a+b+c+sum);
})(1,1,1,2,2,2,45,'dada',23,56,67);


/*
 remember one thing ,
 whenever we define the arguments of same type then it will work properly or it will
 take the largest data type as the whole datatype of that particular rest operator.

 correction 1: 
 the ...rest param will have the multiple data types and till it encounters the same data 
 type it will behave like the arithmetic operator and the moment it encounters the string
 it starts to concat the result and then concat it to the rest of the result.
*/