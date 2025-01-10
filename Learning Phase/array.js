/*
let arr=[250,645,300,900,50]
for(let i of arr){
    console.log(i);

    let final_price=0;
    let discount = i/10;
    final_price = i-discount;
    i = final_price;
    console.log(`After Offer: ${i}`);
}
*/
// console.log("Printing Final Price")
// for(let i=0;i<arr.length;i++){
//     let final_price=0;
//     let discount = arr[i]/10;
//     final_price = arr[i]-discount;
//     arr[i]=final_price;
//     console.log(arr[i]);
// }

let arr1=["BloomBerg","Microsoft","Uber","Google","IBM","Netflix"];
arr1.shift();
console.log(arr1);

arr1.splice(3,1,"Ola");
console.log(arr1);

arr1.push("Amazon");
console.log(arr1)