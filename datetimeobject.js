

let date=new Date(2018,11,12,6,56,2,45);

console.log(date);
//console.log(date.toISOString());


let date1=new Date(18);
console.log(date1);

let date2=new Date(-24*60*60*1000)

console.log(date2);
//if we provide only two digits in the year then it will take it as a previous century.
//we cannot omit the month in the js format.
//we have to provide it.

/*
in js we store the date in the form of the miliseconds .
it gets stored from the  january 1 1970.
we can access the dates before it by providing the  negavtive values of the miliseconds 
from the january 1 1970.

to calculate the miliseconds in one day 24*60*60*60= 84600
*/
