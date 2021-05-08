let nums=[1,2,3,4,5,6,7,8];
let names=new Array("venkat","Bujji","Mummy","Vamsi");
for(let i=0;i<nums.length;i++)
{
    console.log(nums[i]);
}
console.log("========== push");
names.push("balaji");//push this methos add value at end of array.
for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
}

console.log("========== unshift");
names.unshift("Venkateshwar");//This method add value to array at the start of an array.
for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
}

console.log("========== pop");
names.pop();//This method remove last element of anarray.
for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
}

console.log("==========shift");
names.shift();//This method remove first element of an array.
for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
}

console.log("========== Sliced");
let sliced=nums.slice(2,4);//slice(start index,end index)
for(let i=0;i<sliced.length;i++)
{
    console.log(sliced[i]);
}
console.log("========== Sliced after");
for(let i=0;i<nums.length;i++)
{
    console.log(nums[i]);
}
console.log("========== Splice");
let spiced=nums.splice(2,4);//spice(start index,how many elements)
for(let i=0;i<sliced.length;i++)
{
    console.log(sliced[i]);
}