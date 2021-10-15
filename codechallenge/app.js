'use strict'; 
//  problem solving using javascript


//  swap two numbers without using third variable
// let a =5 
// let b =10
// a = a + b 
// b = a - b
// a = a - b
// console.log(a,b)

//  if the values where strings 
// let alpha = "hi", beta = "bye";
// [beta, alpha] = [alpha, beta]
// console.log(alpha,beta)


// let x = "Hello";
// let y = "World!";
// console.log(x, y); // Hello World!
// [x, y] = [y, x]; //
// console.log(x, y); // World! Hello



// reverse number without make it as string 
// let num = 12345  // out= 54321

// let reverse  = (num) =>{
//     let number = Math.abs(num) , reversed= 0 , last_digit;
//     while (number != 0){
//         last_digit = number % 10 ;
//         reversed  = reversed * 10 + last_digit
//         number  = Math.floor(number / 10) 
//     }
//     if (num < 0){
//         return reversed * -1 
//     }else {
//         return reversed
//     }
// }
// let out = reverse(1234)
// console.log(out)

// function reverseNum(num){
//     let number  = Math.abs(num)
//     let outNum = number.toString().split("").reverse().join("")
//     return +outNum
// }
// console.log(reverseNum(1234))




















































// ============== collection of functions ==============

// //  find the smallest number in array
// let array = [1,2,3,4,5,6,7,8,9,10]
// let min = array[0]
// for(let i=0; i<array.length; i++){
//     if(min > array[i]){
//         min = array[i]
//     }
// }
// console.log(min)

// //  find the largest number in array
// let max = array[0]
// for(let i=0; i<array.length; i++){
//     if(max < array[i]){
//         max = array[i]
//     }
// }
// console.log(max)

// //  find the sum of the array
// let sum = 0
// for(let i=0; i<array.length; i++){
//     sum = sum + array[i]
// }
// console.log(sum)

// //  find the average of the array
// let avg = sum/array.length
// console.log(avg)

// //  find the median of the array
// let median = 0
// if(array.length % 2 == 0){
//     median = (array[array.length/2] + array[array.length/2-1])/2
// } else {
//     median = array[(array.length-1)/2]
// }
// console.log(median)

// //  find the mode of the array
// let mode = array[0]
// let count = 1
// for(let i=0; i<array.length; i++){
//     for(let j=i+1; j<array.length; j++){
//         if(array[i] == array[j]){
//             count = count + 1
//         }
//     }
//     if(count > mode){
//         mode = array[i]
//     }
//     count = 1
// }
// console.log(mode)
