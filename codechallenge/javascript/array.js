// practice the build-in methods in javascript 

//  1- ==================foreach method==================
//  foreach runs callback function for each element in the array
/* let myArray = [1,2,3,4,5,6,7,8,9,10];


// myArray.forEach((element , indx, array)=>{
//     console.log(element);
//     // console.log(indx);
//     // console.log(array);
// });

let letters = ['a','a','a','a','a','a','a','a','a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'd', 'e','f', 'g', 'h', 'i', 'j', 'd', 'e','f', 'g', 'h', 'i', 'j'];
let resObject = {};

letters.forEach((element)=>{
    if (resObject[element]){
        resObject[element]++;
    }else{
        resObject[element] = 1;
    }
});

console.log(resObject);
 */


//  2- ==================map method==================
//  map method used to create a new array with the results of calling a provided function on every element in the calling array

// let myArray = [1,2,3,4,5,6,7,8,9,10];
// let out = myArray.map((element)=>{
//     return element*2;
// }) ;
// console.log(out)

// let letter2 = ['1', '2', '3', '4', '5', '6']
// let out2 = letter2.map((element)=>+element);
// console.log(out2)

// let out3 = letter2.map(Number);
// console.log(out3)



// 3- ==================filter method==================
// let myArray = [1,2,3,4,5,6,7,8,9,10];
// for (let num of myArray){
//     if (num%2 === 0){
//         console.log(num);
//     }
// }

// for (let i=0 ; i <= myArray.length-1 ; i++){
//     if (myArray[i]%2 === 0){
//         console.log(myArray[i]);
//     }
// }

// for (let i in myArray){
//     if (myArray[i]%2 === 0){
//         console.log(myArray[i]);
//     }
// }

// let out = myArray.filter((element)=>{
//     return element%2 === 0;
// });

// console.log(out);

// 4- ==================reduce method==================
// reduce method is used to reduce the array to a single value