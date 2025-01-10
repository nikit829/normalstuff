// /*
// function vowels(str){
//     let count=0;
//     for(let i of str.toLowerCase()){
//     // if(str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"){
//     //     count++;
//     // }
//     if('aeiou'.includes(i)){
//         count++;
//     }
//     }
//     console.log(count);
//     console.log(str);
// }
// vowels("RAHUL SINGH");
// */

// // -----------------------------------------------forEach method

// let arr=[1,2,3,4,5,6]
// arr.forEach((val,i)=>{
//     console.log(val*val,'Index is:',i)
// })

// //----------------------------------------------- OR

// let num=[1,2,3,4,5]
// let calcSq =(num) => {
//     console.log(num*num);
// }

// num.forEach(calcSq);

// //-----------------------------------------------map method

// let newarr=arr.map((i)=>{
//     return i*i;
// })
// console.log(newarr);

// //-----------------------------------------------filter method

// let newarr2=arr.filter((i)=>{
//     return i%2==0;
// })
// console.log(newarr2)

// //-----------------------------------------------reduce method

// const output=arr.reduce((res,val)=>{
//     return res>val?res:val;
// })
// console.log(output)

// //-----------------------------------------------Question

// let stud=[67,59,88,75,91];
// let  toppers=stud.filter((val)=>{
//     return val>80;
// })
// console.log(toppers);

//-----------------------------------------------Question

let n=prompt("Enter a number");
let array=[]
let i=1
do{
    array.push(i);
    i++
}while(i<=n);
console.log(array);

let sum=array.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(`Sum of all elements of ${array} is ${sum}`);

let factorial=array.reduce((prev,curr)=>{
    return prev*curr;
})
console.log(`Product of all elements of ${array} is ${factorial}`);





