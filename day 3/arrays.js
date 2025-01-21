let users=["Harshi","Yashu","Bindu","Deekshu","Ramya"];

// users.map((user,i)=>{
//     console.log(user,i);
    
// })

// let x=users.map((user,i)=>{
//         return user;
// });
// console.log(x);

// let x=users.forEach((user,i)=>{
//     return user;
// });
// console.log(x);

let userData ={
    name:"harshi",
    age:"19"
}
console.log(userData.name , typeof(userData));

let x=JSON.stringify(userData);
console.log(x, typeof(x));

let y =JSON.parse(x);
console.log(y);

