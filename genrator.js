

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


console.log(demo2.next());
console.log(demo2.next());
console.log(demo2.next());
console.log(demo2.next());
console.log(demo2.next().done);