let p=new Promise((resolve,reject)=>
{
    setTimeout((a)=>
    {
        a=2;
        if(a==1)
        {
            return  resolve ("Fullfilled !");
        }
        else
        {
            return reject ("rejected !");
        }

    },2000)
});
console.log(p);

p.then((value)=>
{
    console.log(value);
}).catch((e)=>
{
    console.log(e);
})