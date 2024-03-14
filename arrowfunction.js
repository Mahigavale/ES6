

let v=(x)=>
{
    return x+15;
}

console.log(v(15));
//when there is only one parameter then parenthesis is optional in the arrow function.




let cv=(x,y,z,...params)=>
{
     console.log(x+" "+y+" "+z+" "+params);
     //console.log(...params);
}
(cv(10,20,30,40,50,60));



let cvz=(a,b,c,...rtr)=>
{
    return a+b+c+rtr;
}

console.log(cvz(10,20,30,78,89));


let arr56=[2,3,45,67,3,2];

console.log(arr56.map((n)=>
{
    if(n>5)
    {
        return n;
    }
}));