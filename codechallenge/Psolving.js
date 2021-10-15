// ==========================  interview questions ===============================
//  find and remove duplicate form an array 
// let arr = [1,1,2,2,4,7,6,5,5] 
// let mySet  = new Set([...arr]) 
// arr = [...mySet] 
// console.log(arr)
// console.log(mySet)

// function removeDuplicates(arr){
//     let duplicate  = [] 
//     for (let i=0 ; i<=arr.length; i++){
//         for(let j=1 ; j<=arr.length ; j++){
//             if (i !== j){
//                 if (arr[i] === arr[j]){
//                     duplicate.push(arr.splice(j, 1))
//                 }
//             }
//         }
//     }
//     console.log(arr)
//     return [arr , duplicate]
// }
// let [arr , duplicate] = removeDuplicates(["saad", "saad", "salem" , "dhirat" ,"dhirat"])
// console.log(arr , duplicate)


// get the pair that the sun of them = target 
// function getPair ( arr , target ) {
//     let mySet = new Set()
//     for (let num of arr){
//         let temp = target - num //take the temp  // 7 // 6 // 2  if the temp and num 
//         if (mySet.has(temp)){
//             return [num , temp]
//         }
//         mySet.add(num) // 1 , 2, 6
//     }
//     return null

// }

// let output = getPair([1,7,2,6,5,3,8,6], 8)
// console.log(output)


//  sum series using array and return array  
// function sumSeries (arr){
//     let output = [];
//     let temp;
//     for(let num of arr){

//         if (num === temp){
//             output[output.length -1] += num 
//         }else{
//             output.push(num)
//             temp = num
//         }
//     }
//     return output 
// }

// console.log(sumSeries([1,1,1,2,2,5,5,1]))


// get the changed point in the array  

// function getChangedPoint(arr){
//     let holdArr = [];
//     let move = "";

//     if(arr[0] > arr[1]){
//         move = "dec"
//     }else{
//         move = "inc"
//     }

//     for (let i of Array(arr.length).keys()){
//         if (move = "inc"){
//             if (arr[i] > arr[i+1]){
//                 move = "dec"
//                 holdArr.push(arr[i])
//             }
//         }else{
//             if (arr[i] < arr[i+1]){
//                 move = "inc"
//                 holdArr.push(arr[i])
//             }
//         }
//     }
    
//     return holdArr
// }

// const out = getChangedPoint([1,2,3,6,5,4,3,2,10,11,12,11,10,3,5,6,1,2])
// console.log(out)


//  get the index of the number that has the sum of the target 
// function getIndexOfSum(arr , target){
//     for (let i of Array(arr.length).keys()){
//         for (let j of Array(arr.length).keys()){
//             if(arr[i] + arr[j] === target){
//                 return [i, j]
//             }
//         }
//     }
//     return null
// }
// console.log(getIndexOfSum([3,2,4],7))

//  permutation of array and return new array
// function permutation(arr){
//     let output = []
//     for (let i of Array(arr.length).keys()){
//         console.log(i)
//         output.push(arr[arr[i]])
//     }
//     return output
// }

// console.log(permutation([0,2,1,5,3,4]))


// function return the arr that has the sum of the previous numbers
// function sumPrevious(arr){
//     let output = []
//     let sum = 0
//     for (let i of Array(arr.length).keys()){
//         sum += arr[i]
//         output.push(sum)
//     }
//     return output 
// }

// console.log(sumPrevious([1,2,3,4,5]))

//  find how many smaller numbers in the array 

function smaller(arr){
    let output  = []
    let counter = 0 
    for (let i of Array(arr.length).keys()){
        counter = 0 
        for (let j of Array(arr.length).keys()){
            if(arr[i] > arr[j]){
                counter +=1
            } 
        }
        output.push(counter)
    }
    return output
}

console.log(smaller([8,2,1,1,5]));