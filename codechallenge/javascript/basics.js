// solving some array problems from leet codes and other sources

//  ============= Questions #1 ===============

// array Two sum
// => given an array of numbers and target find the numbers some of the target
// => if we used 2 loop it will take 0(n^2) but using dictionary we solve it using 0(n)

// const twoSum = (arr , target)=>{
//     let storage = {};
//     for(let [idx , val] of arr.entries()){
//         if (storage[val] !== undefined){
//            return [storage[val] , arr[idx]]
//         }
//         let temp = target - val // 2
//         storage[temp] = val

//     }
// }
// let out = twoSum([1,2,3,4,5], 3)
// console.log(out)

// ================= Questions #2 ==================

// Count the Number of Islands
// => given grid that has representation of islands as "1" and water as "0" around them
// input
// 11110
// 11010
// 11000
// 00000
//  # of islands is one cuz all the once are connected  vertically and horizontally
// output = 1 number of islands

/*  input [
            [11110],
            [11010],
            [11000],
            [00000]
        ]
*/

// Solution
// const numOfIslands = (grid) => {
//     let islandNums = 0; 
//     for (let rowIn in grid) {
//     for (let colIn in grid) {
//         if(grid[rowIn][colIn] == "1"){
//             islandNums++;
//             helperFn(parseInt(rowIn), parseInt(colIn), grid)
//         }
//     }
//   }
//   return islandNums;
// };

// const helperFn = (rowIn , colIn , grid)=>{
//     if (grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === "0") {return};
    
//     //  to make all the surrounding areas === 0
//     grid[rowIn][colIn] = "0"

//     // do that for all directions 
//     helperFn(rowIn+1, colIn, grid)
//     helperFn(rowIn-1, colIn, grid)
//     helperFn(rowIn, colIn+1, grid)
//     helperFn(rowIn, colIn-1, grid)
// }

// const out = numOfIslands([
//         ["1","1","0","0","0"],
//         ["1","1","0","0","0"],
//         ["0","0","1","0","0"],
//         ["0","0","0","1","1"]
//     ]);
// console.log(out)
/* [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"]
]*/ 
// output = 1 islands


// [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
// ]
// output =3 islands 


//  ===================== Questions#3 =====================