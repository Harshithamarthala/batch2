let a= Number(prompt("Enter a number"));
let b= Number(prompt("Enter b number"));
let c= Number(prompt("Enter c number"));
if(a>b && a>c){
    console.log("a is greater among b and c");    
}
else if(b>c && b>a){
    console.log("b is greater among a and c");   
}
else{
    console.log("c is greater among a and b");
    
}

let m= Number(prompt("Enter m number"));
let n= Number(prompt("Enter n number"));
let o= Number(prompt("Enter o number"));

switch (true) {
    case m>n && m>o:
        console.log("m is greater among n and o"); 
        break;

    case n>o && n>m:
        console.log("n is greater among m and o"); 
        break;  


    default:
        console.log("o is greater among m and n");
        break;
}