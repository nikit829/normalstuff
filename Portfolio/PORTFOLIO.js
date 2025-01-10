
// About section
let hiddenAbout=document.querySelector(".aboutDetails");
let hiddenSkills=document.querySelector(".skillDetails");
let hiddenEdu=document.querySelector(".eduDetails");

let aboutButton=document.querySelector("#aboutLi")
let skillButton=document.querySelector("#skillLi")
let eduButton=document.querySelector("#eduLi")

//bydefault about visibility
document.addEventListener("DOMContentLoaded", () => {
    hiddenAbout.classList.remove("hide");  
    hiddenSkills.classList.add("hide");  
    hiddenEdu.classList.add("hide");     
});

//now dynamically button click changes happens
aboutButton.addEventListener("click",()=>{
    hiddenAbout.classList.remove("hide")
    hiddenSkills.classList.add("hide")
    hiddenEdu.classList.add("hide")
})
skillButton.addEventListener("click",()=>{
    hiddenSkills.classList.remove("hide")
    hiddenAbout.classList.add("hide")
    hiddenEdu.classList.add("hide")
})
eduButton.addEventListener("click",()=>{
    hiddenEdu.classList.remove("hide")
    hiddenAbout.classList.add("hide")
    hiddenSkills.classList.add("hide")
})

//Projects section

// let projectImgs=document.querySelectorAll(".projectImg")
// let projectDivs=document.querySelectorAll(".projectHover")

// projectImgs.forEach((img,index)=>{
//     const hoverDiv = projectDivs[index];

//     img.addEventListener("mouseover",()=>{
//         hoverDiv.classList.remove("hide")
//     })
//     img.addEventListener("mouseout",()=>{
//         hoverDiv.classList.add("hide")
//     })
// })

//Training section

// let trainingBlocks=document.querySelectorAll(".trainingBlock")
// let hiddenDivs=document.querySelectorAll(".hidden")
// let trainingVisibles=document.querySelectorAll(".trainingVisible")



// trainingBlocks.forEach((block,index)=>{
//     const hiddendiv=hiddenDivs[index];
//     const trainingVisible=trainingVisibles[index];

//     block.addEventListener("mouseover",()=>{
//         trainingVisible.classList.add("hide")
//         hiddendiv.classList.remove("hide")
//     })
//     block.addEventListener("mouseout",()=>{
//         trainingVisible.classList.remove("hide")
//         hiddendiv.classList.add("hide")
//     })

//     document.addEventListener("DOMContentLoaded",()=>{
//         trainingVisible.classList.remove("hide")
//     })
    
// })




















// /* Timeline Container */
// .timeline {
//     position: relative;
//     max-width: 94%;
//     margin: 60px 14px;
//     padding: 20px 0;
// }

// /* Timeline Vertical Line */
// .timeline::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 5px;
//     height: 78%;
//     background: linear-gradient(to bottom, #b8b8b8, #404040);
//     border-radius: 20px;
//     /* z-index: 1; */
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// }

// /* Individual Education Box */
// .educationBox {
//     position: relative;
//     width: 25rem;
//     padding: 20px;
//     margin: 20px 0;
//     background: #202020;
//     color: white;
//     border-radius: 12px;
//     /* z-index: 2; */
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
//     transition: transform 0.3s ease, box-shadow 0.3s ease;
// }

// /* Left Side Boxes */
// .eduleft {
//     /* float: left; */
//     clear: both;
//     text-align: right;
//     margin-right: 28rem;
// }

// /* Right Side Boxes */
// .eduright {
//     /* float: right; */
//     clear: both;
//     text-align: left;
//     margin-left: 28rem;
// }

// /* Dots for Each Event */
// .educationBox::before {
//     content: "";
//     position: absolute;
//     top: 20px;
//     /* left: 50%; */
//     transform: translateX(-50%);
//     width: 16px;
//     height: 16px;
//     background: #404040;
//     border: 3px solid #b8b8b8;
//     border-radius: 50%;
//     /* z-index: 3; */
// }

// /* Hover Effect for Boxes */
// .educationBox:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
//     background: #2a2a2a;
// }

// /* Adjust Dots for Left and Right Boxes */
// .eduleft::before {
//     left: auto;
//     right: -46px;
// }

// .eduright::before {
//     right: auto;
//     left: -24px;
// }

// /* Small Text Styling */
// .educationBox small {
//     display: block;
//     margin-top: 10px;
//     font-size: 0.9rem;
//     color: #b0b0b0;
// }

// /* Responsive Design for Smaller Screens */
// @media screen and (max-width: 930px) {
    
//     .timeline::before {
//         left: 12rem;
//         width: 4px;
//     }

//     .educationBox {
//         /* width: 90%; */
//         /* margin: 10px auto; */
//         /* text-align: center; */
//     }

//     .eduleft{
//         margin-right: -2rem;
//     }
//     .eduright {
//         /* float: none; */
//         margin-left: 2rem;
//     }

//     .eduleft::before {
//         right: 20.9em;
//     }
//     .eduright::before {
//         left: -1.2em;
//     }
//     .educationBox::before {
//         /* left: 50%;
//         right: auto; */
//     }
// }
// /* @media screen and (max-width: 768px) {
//     .timeline::before {
//         left: 5%;
//     }

//     .educationBox {
//         width: 90%;
//         margin: 10px auto;
//         text-align: center;
//     }

//     .eduleft,
//     .eduright {
//         float: none;
//         margin: 0 auto;
//     }

//     .educationBox::before {
//         left: 50%;
//         right: auto;
//     }
// } */
