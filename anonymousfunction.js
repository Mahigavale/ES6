/*

the function having no name for it is callled as the anonymous function.
there is no hoisting possible with the anonymous function.
*/

let demo=function(a,b)
{
    let c;
    let d;
    c=a;
    d=b;
    console.log(c+d);
}

demo(10,10);