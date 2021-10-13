console.log("hello world");

// const startPoint = document.querySelector("#app")! as HTMLElement;
// const h3 = document.createElement("h3");
// h3.innerHTML = "add element to the root";
// startPoint.appendChild(h3);
// console.log(startPoint);

// ####### START HERE #######
// TypeScript is a superset of JavaScript.

// Ts types are inferred from the values assigned to variables.
//  number , string , boolean , any , void , null , undefined , interface, never , object
//  function , class , enum , type alias , tuple , array , object , symbol
//  union , intersection , mapped type

// define array in ts 
const arr: string[] = [];
const arr2: Array<string> = [];

// define objects in ts
const obj: { name: string; age: number } = {
    name: "",
    age: 0,
};


// tuple in ts
//  tuple is special type of array which have fixed length and type of elements 
//  can be used to return multiple values from a function
const tuple: [string, number] = ["", 0];
tuple[0] = "hey";
tuple[1] = 1;
console.log(tuple);


// enum in ts 
//  enum is a way to define a set of named constants
//  enum can be used to define a set of named constants
enum Role {
    ADMIN,  // 0 and can be assigned to any number or string 
    READ_ONLY,
    AUTHOR,
}
console.log(Role)
console.log("enum in ts")

//  literal types in ts
//  literal types are types that are predefined
// string , number , boolean , null , undefined , symbol ... we can assign any value to a literal type and they have to enter that specific value any type to be assigned
let myName: "saadoun" | "saad" = "saadoun"; // so here the value can be only saadoun or saad and type string 
myName = "saad";
console.log(myName);


// make our types more flexible
//  we can make our types more flexible by using union types
//  union types are types that can be one of multiple types
//  union types are used to define a set of types that can be assigned to a variable
type namehere = string | number | boolean;
let anyvalue : namehere;
//  so here we can assign any value from to the above types to anyvalue variable by passing the type namehere to the variable




// type alias in ts
//  type alias is a way to define a new name for an existing type
type mytype = string;


// function type in TypeScript
//  function types are used to define the type of a function

const funAdd : (num1: number , num2:number) => number = (num1:number  , num2:number ) =>{
    return num1 + num2;
}

const conName : (fname: string , lname:string ) => string = (fname:string, lname:string) =>{
    return fname + lname;
}

function addNum(num1:number , num2:number , cb:(num : number)=> number){
    return cb(num1 + num2);
}
// call the  function with callback function
const  res = addNum(1,2,(num)=>{
    return num + 2;
})
console.log(res);