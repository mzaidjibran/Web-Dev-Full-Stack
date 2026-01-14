// let arr = [1,2,3,4,5];
// // console.log(arr);
// // console.log(typeof[arr]);
// // arr.toString();
// console.log(arr.toString());
// typeof[arr];

// let a = [1,5,2,8,0,4,7,2,7,55,34,12,21,48];
// console.log(a.sort());

let a = 2;
function factorial(number){
    let arr=Array.from(Array(number+1).keys());
    console.log(arr.slice(1,));
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    console.log(c);
}

  


factorial(a);
console.log(a.reduce);