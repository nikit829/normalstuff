// for(let count=1;count<=5; count++){
//     console.log("Hello World!",count)
// }

// i=0
// while(i<10){
// console.log(i* ++i)
// }

// let i=1;
// do{
//     console.log("i=",i);
//     ++i;
// }while(i<=10);

//for-of loop
/*let str="Hello World!"
let characters=0;
for(let i of str){
    console.log("i=",i)
    characters++;
}
console.log(characters)*/

//for-in loop
/*const student={
    name:"Nikit Singh",
    age:21,
    cgpa:8.9,
    isPass:true
}
for(let key in student){
    console.log("key=",key,"value=",student[key])
}*/

// let even=0
// while(even<=100){
//     if( even%2==0)
//         console.log(even);
//     even++;
// }
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }


//number game
let trials=0;
let num=4;
do{
    
    let guessedNo = prompt("Guess a number:");
    // guessedNo=Number(guessedNo);
    
    if(guessedNo == num){
        console.log("You are Right.");
        alert("Congrats, You are Right!!!");
        break;
    }else{
        console.log("Guessed number is wrong.");
    }
    trials++;
}while(trials<=10);