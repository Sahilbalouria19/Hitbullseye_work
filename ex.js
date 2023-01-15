//const nums = [12,14,21,54,75,47,8,9]

//foreach
//map



//filter
//const nums = [12,14,21,54,75,47,8,9]
//const num2 = []

//nums.filter(function(num){ 
  //  if(num>15){
    //    num2.push(num);
    //}
//})
//console.log(num2)





//Reduce :- when we need just one number.
//const nums = [12,14,21,54,75,47,8,9]
// const a = nums.reduce(function(total,num){
//    return total+num;
// },10)
// console.log(a);





//sort

//compare function is used to sort a function
const nums = [12,14,21,54,75,47,8,9]

const a = nums.sort();
const b = nums.sort((a,b)=>a-b);

console.log(a);
console.log(b);
