/*let para=document.querySelector(".box")

let btn1=document.querySelector("button")
btn1.onclick=()=>{
    alert("Button's clicked!")
}

let div=document.querySelector("div")
div.onmouseover=()=>{
    console.log("Yes, you will be!!")
}
*/

//---------------------------------question
let mode="Light"

let btn=document.querySelector("#mode")
let body=document.querySelector(".container");

btn.addEventListener("click",()=>{
    if(mode==="Light"){
        mode="Dark"
        body.style.backgroundColor="black"
        body.style.color="white"
    }
    else if(mode==="Dark"){
        mode="Light"
        body.style.backgroundColor="white"
        body.style.color="black"
    }
    console.log(`Current mode: ${mode}`)
})

