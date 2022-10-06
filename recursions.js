//Recursion to Create a Countup
function countup(n) {
  if (n < 1) {
    return [];
      } 
  else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
  }
}
console.log(countup(5)); 

//Recursion to Create a Countdown
function countdown(n){
  if (n<1){
      return [];
  }
  else {
        const countArray = countdown(n-1);
        countArray.unshift(n);
       return countArray;
    }
}
console.log(countdown(5));

//Recursion to Create a Range of Numbers 
function rangeOfNumbers(startNum, endNum) {
  if (endNum<startNum){
    return[];}
        else {
         const rangeArray = rangeOfNumbers(startNum, endNum-1);
         rangeArray.push(endNum);
      return rangeArray;
    }
}
console.log(rangeOfNumbers(10, 15));
