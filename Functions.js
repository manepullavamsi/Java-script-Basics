//Normal For loop
let citys=["Narrobe","Tkyo","Berlin","Masko","Professor"];
for(let i=0;i<citys.length;i++)
{
  console.log(citys[i]);
  console.log(i);
}
/*
Output:

Narrobe
0
Tkyo
1
Berlin
2
Masko
3
Professor
4
*/

//=========================== 

/*for in
This loop is used to fetch the indexes of an array.
*/
//Note : THis is manly is used for Objects(JSON Objects used to keys).

let citys=["Narrobe","Tkyo","Berlin","Masko","Professor"];
for(let city in citys)
{
  console.log(city);
}
/*
Output:

0
1
2
3
4
*/

//=======================

//For --of This for loop is used to get contents of an array 

//Note : THis is manly is used for Arrays.

for(let city of citys)
{
  console.log(city);
}
/*
Output:

Narrobe
Tkyo
Berlin
Masko
Professor
*/
//=======================


//Json Object(JAVS Script Object Notation
//Note: Json objects are not iterable it doesn't work with for (of )loop because for of is going iterable the objects.

// for(let keys of obj)
//                 ^

// TypeError: obj is not iterable

let obj={name:"venkat",Id:"777777",place:"Tirupathi",Dist:"Chitoor"}
for(let keys in obj)
{
  console.log("Keys of an object are ",keys);
}

// Output:

// Keys of an object are  name
// Keys of an object are  Id
// Keys of an object are  place
// Keys of an object are  Dist


// Functions Can be Normal Functions, Anymonus Functions and Arrow Functions

//Normal Function

function show()
{
  console.log("This is Normal Function");
  
}
show();

//Anymonus Function

const show=function(){
  console.log("This is an Anyomonus Function")
}
show();


//Arrow Function

let show= ()=>{
  console.log("This is an Arrow Function");
}

//PLaying with Functions.

function sumavg(fun1,fun2)
{
  console.log(fun1+fun2);
}

sumavg(3,2);
sumavg("Venkat","Eshwara");
// Output:

// 5
// VenkatEshwara


//This is example how Anomus function store function Defination So Js is called object first

const show=function(){
  console.log("This is an Anyomonus Function")
}
let fun1= ()=>{
  console.log("This is an Arrow Function");
}

function sumavg(fun1,fun2)
{
 console.log(fun1+fun2);
}

sumavg(show,fun1);

// Output:

// function(){
//   console.log("This is an Anyomonus Function")
// }()=>{
//   console.log("This is an Arrow Function");
// }

//THis Example when 2 functions return Values.

const show=function(){
  console.log("This is an Anyomonus Function");
  return 5;
}
let fun1= ()=>{
  console.log("This is an Arrow Function");
  return 6;
}

function sumavg(fun1,fun2)
{
 console.log(fun1()+fun2());
}

sumavg(fun1,show);

// Output:

// This is an Arrow Function
// This is an Anyomonus Function
// 11

const show=function(){
  console.log("This is an Anyomonus Function");
  return 5;
}
let fun1= ()=>{
  console.log("This is an Arrow Function");
  return 6;
}

function sumavg(fun1,fun2)
{
 console.log(fun1()+fun2());
}

sumavg(()=>{console.log("This Anymous Function Defined at calling Area....\n")//The Function which is defined at calling are can't use return Statement.
},fun1);

// Output:

// This Anymous Function Defined at calling Area....

// This is an Arrow Function
// NaN

## Note:How to print variable value inside qutration with the string We use Backticks present below esc button (`) and with $ symbol and put variable name {} inside flower bracket's.

//let a=2;
// console.log(show()+5,`This Function Test ${a} `);



















































