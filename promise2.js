

let promise2=new Promise((c,b)=>
{
    setTimeout((a)=>
    {
        a=1;
        if(a==1)
        {
            return  c ("the promise is kept !");
    }
    else{

        return b(" falied promise !")
    }
    },5000)
})

console.log(promise2.then((v)=>
{
    console.log(v);
}));