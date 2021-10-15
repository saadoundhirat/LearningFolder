'use strict';
let x=5 , y=7;
x = x + y;
y = x - y
x = x - y

console.log(x , y)

function print(num){
    let counter =1
    for (let i=1 ; i<= num ; i++){
        let str = ""
        for(let j=1 ; j<=i ; j++){
            str += counter++ 
        }
        console.log(str)
    }
}

console.log(print(4))

function getSum(num){
    if (num <= 9){
        return num
    }
    let arr = num.toString().split("")
    let sum = 0 
    let temp = 0
    function helper(arr){
        if (arr.length > 1){
            for (let i of arr){
                sum += +i;
            }
        }
    }
    helper(arr)
    temp = sum 
    sum = 0
    if (temp.toString().split("").length > 1){
        helper(temp.toString().split(""))
    }
    return sum
} 

console.log(getSum(12345))