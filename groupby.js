



let profile=
[
 {name:"mg", age:25},
 {name:"abhi", age:21},
 {name:"sun", age:32}
]


 console.log(Object.groupBy(profile,({age})=>{
    return age >25 ? "Ok" :"not ok"
 }));