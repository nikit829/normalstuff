let a=10
function print(){
    console.log(a)
}

//--------------------------setTimeout(func,time delay)---async func

setTimeout(print(),2000)

//----------------------------------------callback hell
//1.
/*setTimeout(()=>{
    print()
    a++;
    setTimeout(()=>{
        print()
        a++;
        setTimeout(()=>{
            print()
            a++
            setTimeout(()=>{
                print()
                a++
                setTimeout(()=>{
                    print()
                    a++
                },2000)
            },2000)
        },2000)
    },2000)
},2000)*/

//2.
/*
function printSum(b,method){
    setTimeout(()=>{
        console.log(`Sum is ${a+b}`)
    if(method){
        method();
    }
    },2000)
}
printSum(1,()=>{
    printSum(2,()=>{
        printSum(3,()=>{
            printSum(4,()=>{
                method();
            })
        })
    })
})
function method(){
    console.log("Sum printed")
}
*/

//----------------------------------------Promises

function printSum(b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Promise called`)
            console.log(`Sum is ${a+b}`)
            resolve("yeahh!!")
        },2000)
    })
}

// printSum(1).then((res)=>{
//     console.log(res)
//     return printSum(2)
// }).then((res)=>{
//     console.log(res)
//     return printSum(3)
// }).then((res)=>{
//     console.log(res)
//     return printSum(4)
// }).then((res)=>{
//     console.log(res)
//     return printSum(5)
// })

//----------------------------------------Async await

async function abc(){
    await printSum(1);
    await print(2);
    print(3);
    await printSum(4)
    print(5);
}
abc()

//----------------------------------------
