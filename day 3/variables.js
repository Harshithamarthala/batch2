//variables
console.log("start");

//global scope

var a = 10;
console.log(a);

//local scope
let b = 20;
console.log(b)

const c = 30;
console.log(c);

{
    var m = 100;
    console.log(m);

    //local scope
    let n = 200;
    console.log(n)

    const o = 500;
    console.log(o);
}

console.log("end");

//datatypes
//string
let str1="double quotes";
console.log(str1 , typeof(str1));

let str2='single quotes';
console.log(str2 , typeof(str2));

let str3=`template literals`;
console.log(str3 , typeof(str3));

//boolean
let bool1=true;
console.log(bool1, typeof(bool1));


let bool2=false;
console.log(bool2, typeof(bool2));
//number
let num1=10;
console.log(num1,typeof(num1));

let num2=10.2345;
console.log(num2,typeof(num2));

let num3=10e3;
console.log(num3,typeof(num3));


//undefined
let h;
console.log(h, typeof(h));

//null

let x=null;
console.log(x, typeof(x));






