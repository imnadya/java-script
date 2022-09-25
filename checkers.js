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
      output='a equal to b'}
  else if (a<b) {
    output ='a is less then b'
  }
  else if (a!=b){
  output = 'N/A'}
console.log(a);
console.log(b);
console.log(output);
//alert('a = ' + a + ', b = ' + b + " and " + output);

//check whether a number is negative, positive, or zero.
let num=null;
let message;
if (num>0) {message=' is positive number.'}
else if (num==0){
    message=' is 0.'
}
else if(num<0){
    message = ' is negative number.'
}
else {
    message=" isn't defined and is an edge case."
}
    console.log(num + message);
