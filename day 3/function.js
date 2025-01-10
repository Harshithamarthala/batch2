// function test1(a,b){
//     console.log("hii");
//     return a+b;
// }
// console.log(test1(5,5));

// let x=(a,b) => {return a*b};
// console.log(x(5,5));

// let y= (a,b) => a+b;
// console.log(y(100,200));

function hof(a) {
    return a();
    
}
let x=hof(function(){return "callback function"});
console.log(x);

let y=function(){return "callback function"};
console.log(y());

let users=["Harshi","Yashu","bindu","deekshu"];
console.log(users);
users.map(function(user){console.log(user);
})


