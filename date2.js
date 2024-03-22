

const d=new Date();

console.log("time since 1970 :",d.getTime());
console.log("Day :",d.getDate());
console.log("Day:",d.getDay());
console.log("Hours :",d.getHours());
console.log("Minutes :",d.getMinutes());
console.log("Month :",d.getMonth());
console.log("Full year:",d.getFullYear());

console.log("Difference in ISO and UTC:",d.getTimezoneOffset());


const date3=Date.parse("2024 2 15");
const date4=Date.parse("2024 March 15")
console.log(date3);
console.log(date4);

const date5=new Date(2014,4);

console.log(date5.setDate(23));
console.log(date5);