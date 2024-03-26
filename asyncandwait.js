// const p=Promise.resolve("34");

// console.log(p);

// const p2=Promise.reject("56");


// p2.catch((e)=>
// {
//     console.log(e);
// })
// console.log(p2);


// const promiseall=[p,p2];

// console.log(promiseall);


// promiseall.values((v,v2)=>
// {
//     console.log(v,v2);
// })



let promise1=new Promise((resolve,reject)=>
{
    setTimeout((a)=>
    {
        a=1;
        if(a==1)
        {
            return resolve("the promise is fullfilled !");
        }
        else{


            return reject("the promise is failed here !");
        }
    },4000)
})

let promise2=new Promise((resolve,reject)=>{
    setTimeout((a) => {
        a=1;

        if(a==1)
        {
            return resolve("the promise 2 is kept !");
        }
         else{
            return reject("the promise is rejected here !");
         }

    },0);
})




  function demo()
{
let combined_promises=   Promise.all([promise1,promise2])

return combined_promises;
}

demo().then((values)=>
{
    console.log(values);
}).catch((e)=>
{
    console.log(e);
})