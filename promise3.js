

// // let promise4=new Promise((done,failed)=>
// // {
// //     setTimeout((a)=>
// //     {
// //         a=1;
// //         if (a==1)
// //         {
// //             return done("promise kept !");
// //         }
// //         else{
// //             return failed("promise failed !")
// //         }

// //     },4000)
// // })

// // console.log(promise4);

// // promise4.then((value)=>
// // {
// //     console.log(value);
// // }).catch((value)=>
// // {
// //     console.log(value);
// // })





// async function demo()
// {
//     let profile={

//         name:"mahesh",
//         email:"maheshgavale07@gmail.com",
//         city:"pune"
//     }

//     let promise4=new Promise((done,failed)=>
//     {
//         setTimeout((a) => {
//               a=1;
//              if(a==1)
             
//              {
//                 return done(profile.name)
//              }

//              else{
//                 return failed("failed !")
//              }
//         }, 4000);
//     })
// }
// console.log(demo());


let promise4=new Promise((done, reject)=>
{
    setTimeout((a) => {
        a=1;
    
    let profile={
        name:"Mahesh",
        city:"pune",
        email:"maheshgavale07@gmail.com",
        pincode:123456,
        mobile:777777777
    }
  if(a==1)

  {
    return done(profile.name);
  }
  else{
    return reject("failed !");
  }
},4000);
})

console.log(promise4);
//console.log(promise4());

promise4.then((value)=>
{
  return value;
}).then((value)=>
{
    let name=new String(value);

    console.log("the second then block and the name is splitted",name.split(''));
    return(name);
}).then((value)=>
{
    console.log("the third then block ",value);
})

.catch((e)=>
{
    console.log(e);
})