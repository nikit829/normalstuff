// var << let / const ------------keywords
// const variable cant be updated but const object can be update

// number,string,boolean,undefined,null,bigInt,symbol --------------------primitive datatypes
// objects(arrays,function) --------------------non primitive datatypes

console.log("Hello World!")
const name="NIKIT SINGH";age=20.44;x=null;y=undefined;boo=true
console.log(name)
// name='nikit singh' 
let Name='NIKIT SINGH'
console.log(Name,name,age,x,y,boo);
typeof name;
typeof y;

// fullName --camelcase
// FullName --Pascalcase
// full-name --kababcase
// full_name --snakecase
// fullname --X

var a;
a=BigInt(910299991882);
console.log(a)

const student = {
    name:"nikit",
    age:21,
    cgpa:9.4,
    isPass:true,
};
student.age += 1 
console.log(typeof student,student)