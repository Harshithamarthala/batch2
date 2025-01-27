// let ele=document.getElementsByClassName("test");
// ele[0].style.backgroundColor="dodgerblue"
// console.log(ele);
// console.log(Array.isArray(ele));

// let x=[...ele];
// console.log(x,Array.isArray(x));
// x.map(element=>{
//     element.style.backgroundColor="tomato";
//     element.style.color="white";
//     element.style.textTransform="uppercase";
// })


// let ele=document.querySelector("#demo");
// console.log(ele);
// let ele=document.querySelector(".test");
// console.log(ele);

// let ele=document.querySelectorAll(".test");
// console.log(ele);


// let bgColor= document.querySelectorAll(".bgColor");
// // console.log(bgColor);
//  [...bgColor].map(element=>{
//     // console.log(element);
//     element.addEventListener("mouseover",()=>{
//         // console.log(element.innerText);
//         element.style.backgroundColor = element.innerText;
//     });
    
//     element.addEventListener("mouseleave",()=>{
//         // console.log(element.innerText);
//         element.style.backgroundColor = "transparent";
//     });
//  })


// let ele = document.createElement("h1");
// ele.innerText="dynamic creation of html element";

// // ele.id="demo";

// ele.setAttribute("id","demo");
// console.log(ele);

// // ele.removeAttribute("id");

// document.body.appendChild(ele);

// let image = document.createElement("img");
// image.src="";
// console.log(image);
// document.body.appendChild(image);


// let mainEle=document.createElement("div");
// mainEle.setAttribute("id","mainBlock");
// console.log(mainEle);

// let topEle=document.createElement("div");
// topEle.setAttribute("class","topBlock");
// // console.log(topEle);

// let image=document.createElement("img");
// image.src="https://cdn.pixabay.com/photo/2018/01/12/14/24/night-3078326_1280.jpg";
// image.width="300";
// image.height="300";
// image.style.objectFit="cover";

// let bottomEle=document.createElement("div");
// bottomEle.setAttribute("class","bottomBlock");
// // console.log(bottomEle);
// let h1=document.createElement("h1");
// h1.innerText="CAT";

// let btn=document.createElement("button");
// btn.innerText="View more";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);
// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);

// document.body.appendChild(mainEle);


let form = document.querySelector("form");
let username = document.getElementById("uName");
let password = document.getElementById("uPass");

let gender = document.getElementsByName("gender");
// console.log(gender);

form.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";
    for(let i = 0;i<=gender.length-1;i++){
        // console.log(gender[i].value);
        // console.log(gender[i].checked);
        if(gender[i].checked == true){
            // console.log(gender[i].value);
            gen += gender[i].value;
        }
    };
    let userDetails={
        username:un,
        password:up,
        gender:gen

    };
    console.log(userDetails);
    sessionStorage.setItem("userData" ,JSON.stringify(userDetails) )
})