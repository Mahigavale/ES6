const p1=new Promise((resolve,reject)=>
{ setTimeout((a)=>
    {
        a=1;
        if(a==1)
        {
            return resolve ("promise is kept in P1 !");
        }
        else
        {
            return reject ("promise is rejected !")
        }
    },4000)
})
const p2=Promise.resolve("the promse is kept in P2 immediately!");

console.log("*******************************************");
console.log("with async and await !");

async function demo()
{
  let result= await combined_promises;

  result.then((v)=>
  
  {
    console.log(v);
  }).catch((e)=>
  
  {

    console.log(e);
  })
}

console.log("***************************************************");
console.log("without async and await !");
let combined_promises=Promise.all([p1,p2]);
combined_promises.then((values)=>
{
    console.log(values);
}).catch((e)=>

{
    console.log(e);
})


