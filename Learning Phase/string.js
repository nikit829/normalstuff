let obj={
    item:"Course",
    price:2999
}
let a=99;

console.log(`Cost of ${obj.item} is ${obj.price}`)
console.log(`A is ${a}`)


//Q
let fullname=prompt("Enter your Full Name (without spaces):");
let sanitizedFullname = fullname.replace(/\s+/g, '')
let username="@" + sanitizedFullname + fullname.length;
console.log(username);alert(`Your username is ${username}`);