
/*

default value: given in the function definiton only.

*/

function demo(a,b=20)
{
    console.log(a);
    console.log(b);
}

console.log(demo);
demo(12);
///
demo(12,12,12);
