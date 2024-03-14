

function* demo()
{
    console.log("first step");
    yield 110;

    console.log("second step");
    yield 220;

    console.log("third stop");
    yield 330;

     return ("daaada");
    console.log("fourth stop");
    yield 220;

}

var demo2=demo();


 console.log(demo2.next().value=123);
// console.log(demo2.next());
// console.log(demo2.next());
// console.log(demo2.next());
// console.log(demo2.next().done);


// for (i of demo2)
// {
//     console.log(i);
// }
// console.log(demo2.next().done);

//console.log(demo2);
// for(i in demo2)
// {
//     console.log(i);
// }

// for(i of demo2)
// {
//     console.log(i);
// }


// console.log("arrayyyyyyyyyyyyyyyyyyy");

// let arr=[10,20,30]

// for(let i of arr)
// {
//     console.log(i);
// }

// for (let i in arr)
// {
//     console.log(i);
// }


