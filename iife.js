
/*
iife is immediaetly invoked function expression.
it is invoked right after it is declared and is executed immediaetly.

*/


(function()
{
    console.log("this is the iife function!");
})();



(function demo(a,b,c,...param)
{
    let sum=0;
    for(let i of param)
    {
        sum+=i;
    }
    //console.log(typeof(sum));
    console.log(a+b+c+sum);
   // console.log(typeof(param));

})(12,12,12,10,10);



((n)=>{
  console.log(n+5);
})(5);