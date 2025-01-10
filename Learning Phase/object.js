/*const emp={
    calcTax1(){
        console.log(`10% Tax is applicable `)
    },
    calcTax2(){
        console.log(`20% Tax is applicable `)
    },
    calcTax3(){
        console.log(`30% Tax is applicable `)
    }
}
const karan={
    salary:5000,
    calcTax(){
        console.log("Tax 50%")
    }
    // emp.calcTax1();
}
karan.__proto__=emp;
*/

// ------------------------------------------question

class user{
    name="Pillai"
    email="pillai@gmail.com"
    viewData(){
        console.log(`College name is ${this.name}`)
        console.log(`Contact college using ${this.email}`)
    }
}
 let obj=new user();

// ------------------------------------------question

class Admin extends user{
    editData(){
        this.name="LPU"
        this.email="lpu@gmail.com"
        this.viewData();
    }
}
let obj1=new Admin();

// ------------------------------------------question


