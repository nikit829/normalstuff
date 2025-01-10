let url="https://cat-fact.herokuapp.com/facts"
let factPara=document.querySelector(".facts")
let btn=document.querySelector(".button")


async function getFacts(){
    let response = await fetch(url)
    console.log(response)
    let data= await response.json()
    factPara.innerText=data[0].text
    console.log(data[0])
}

// btn.addEventListener("click",()=>{
    getFacts();
//     fetch(url).then((response)=>{
//         return response.json()

//     }).then((data)=>{
//         factPara.innerText=data[1].text
//     })

// })