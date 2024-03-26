let p1= new Promise((resovle,reject)=>
{
    return resovle("dada! ");
})

let p2=new Promise((resolve,reject)=>
{
    return resolve("failed !");
})

let p3=Promise.all([p1,p2]);
p3.then((values) => {
    console.log(values);
}).catch((err) => {
    console.log(err);
});

let p4=Promise.any([p1,p2]);
p4.then((v)=>

{
    console.log(v);
}).catch((e)=>
{
    console.log(e);
})