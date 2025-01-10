// alert("Be Cautious");
// console.dir(document.getElementById("heading1"))

//-----------------------------------question
// let append=" from Youtube";
// let h1=document.querySelector("#heading1");
// h1.innerText = h1.innerText + append;

//-----------------------------------question

/*
let divs=document.querySelectorAll(".box");
for(let div of divs){
    console.log(div.innerText);
}

divs[0].innerText="Hello there, ";
divs[1].innerText="I am ";
divs[2].innerText="Nikit Singh. ";
for(let div of divs){
    console.log(div.innerText);
}*/

//-----------------------------------

// let h1=document.querySelector("h1");
// let attr=h1.getAttribute("class");
// console.log(attr);

//-----------------------------------question

let newbtn=document.createElement("button")
newbtn.innerText="Click me!"
newbtn.style.backgroundColor="red"
newbtn.style.color="white"

let node=document.querySelector("body")
node.prepend(newbtn)

//-----------------------------------question

let para =document.querySelector("p")

para.getAttribute("class")
// para.setAttribute("class","newClass")  ---dont use setAttribute because the properties of previous class would have been changed if made a newclass and set-ted its property using setAttributefor that use classList
para.classList.add("newClass")