/*
the object destrucuring is dame like the array destructuirng but there is on e cathac in it.
the name in the shallow copy must match with the properties names of the objects.


wile declaring the array destructor we declare it inside the [];
but in the object destructor we  declare it inside the {}
*/

let profile={
    name:'mahesh',
    city:'pune',
    number:123455678,
    pincode:412332
}


let {name,city,pincode}=profile;

console.log(name,city,pincode);