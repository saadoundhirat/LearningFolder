//  root scope (window scope)

// let sum = 0;
// function innerFn (){
//     // function scope that has access to the window scope 
//     //  
// }
// console.log(innerFn())

//  concepts
// 1- closures in js 
// 2- function carries
// 3- compose => function that takes two functions that returns a function that will be the input to one of the functions   
    // const compose  = (fn1 , fn2) => (fn3) => fn1(fn2(fn3))
    // const sum = (number) => number + 1;
    // // compose(sum , sum)(5) // to call it  // to understand the concept replace each function with sum and follow the code  
    // console.log(compose(sum , sum)(5))

// 4-  avoid side effect => side effect can happen when a function change values on the global scope 
// 5- function purity => no matter how many time we run a function it always returns the same value, so its not effecting the global variables and change the return value each time. 


// 6- advanced object concepts 
    //  1- reference type:
        // => pass by value and pass by reference type 
    //  2- context vs scope
        // tell us where we are in the object => it's the (this) keyword which is the window object each scope has its own access this keyword.
    //  3- instantiation
        // => when you make a copy of an object and reuse the code such as (class) and how we make objects from it 



// ===============================================================================================
//  Cloning an object 
// 1-  using shallow clone or copy => Object.assign(Name of the obj here ) 
// 2-  using spread operator (...) copy => newobj = {... name of the object here } 
// 3-  using Deep clone with the use of JSON  => newObject2  = JSON.parse(JSON.stringify(Name of the object here)) // best way to clone the object // but it takes a lot of time so be carful when we us it 

// ===============================================================================================
// Type coercion // the funny part of js 
//  1 == "1" => True ... it will change the type of the string "1"

// ===============================================================================================
// New methods comes with es8 and es10 
//  1- flat() , flatmap()
//  2- trimStart() , trimEnd()
//  3- padStart() , padEnd()
//  4- fromEntries => transform  a list of key value pair to object 
        // to use it => const newObject = Object.fromEntries(take an array here)

// ===============================================================================================

//  for In and for of 
//  1- for in => used with object to enumerate over and object values 
//  2- for of => used to iterate over arrays and strings

// ===============================================================================================

// =================== < important to understand => asked at interviews > ========================
// javascript has is a single threaded language means that it has only one call stack to parse and execute the code (means do one thing at atime)

// how js works => make sure to understand the process of executing the code using the (js-run time environment )
// 1- call stack and memory heap => called synchronous (based on the V8 engine) executing 
// 2- web api => 1- DOM , 2- AJAX(XML (API request)) , 3- Timeout(setTimeout)
// 3- Callback Queue
// 4- Event loop 

// ===============================================================================================

// IIFE => Immediately invoked function execution 
(function(){
    const fn = function(){
        // do something
    }
})(); //  the syntax of iify function 

