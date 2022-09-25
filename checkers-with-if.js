//checking age
let age = 19;
if (age>=18) {
console.log("Great! You are ${age} old and you are old enought to drive");
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. 
let a=62;
//let a = prompt("Please enter value of a");
//can't use because type of a and b is string.
//let b = prompt("Please enter value of b");
 let b=66;
let output;
if (a>b) {
output = 'a is greater then b'}
  else if (a==b){
      output=`a equal to b`}
  else if (a<b) {
    output =`a is less then b`
  }
  else if (a!=b){
  output = `N/A`}
console.log(a);
console.log(b);
console.log(output);
//alert(`a = ${a}, b = ${b} and ${output});

//check whether a number is negative, positive, or zero.
let num=null;
let message;
if (num>0) {message=` is positive number.`}
else if (num==0){
    message=` is 0.`
}
else if(num<0){
    message = ` is negative number.`
}
    else if (num===undefined){
        message=` isn't defined. Please define it.`
    }
else {
    message=` is an edge case.`
}
    console.log(num + message);

//check whether a number is even or odd.
let nmbr=7;
let result;
if (typeof nmbr == "number") {
if (nmbr % 2 == 0) {
    result=` is even number.`
}
else if (nmbr % 2!==0){
     result=` is odd number.`
 }
}
else {result=` - not possible to check.`}
    console.log(nmbr + result);

//check whether a number is divisible by 5 and 11 or not
let nmbr511=55;
let result511;

console.log(nmbr511%5);
console.log(nmbr511%11);
console.log(((nmbr511 % 5) === 0)&&((nmbr511 % 11) === 0));
if ((nmbr511 % 5 === 0)&&(nmbr511 % 11 === 0)==true) {
    result511=` is divisible by 5 and 11.`;
}
else if (typeof nmbr511=="undefined") {
    result511=` - number is ${typeof nmbr511}. Please define it.`
}
   else {result511=` is not divisible by 5 and 11.`;
}
    console.log(nmbr511 + result511);
