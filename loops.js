// Please use a for loop to print out the classic phrase of developers.  
//Use a for loop to print out the string "Talk is cheap, show me the code" 
//exactly 6 times.  No more, and no less.
console.log('Task #1')
for(let i = 0; i<6; i++){
console.log('Talk is cheap, show me the code.')
}

//Iterate 0 to 10 using for loop
console.log('Task #2')
for (let ii=0; ii<=10;ii++){
    console.log(ii);
}

//Iterate 10 to 0 using for loop
console.log('Task #3')
for (let i3=10;i3>=0;i3--){
    console.log(i3);
}

//Please use a for...of loop to loop over it, 
//and print out the square of each value (the number multiplied by itself).
console.log('Task #4')
const nums = [2, 3, 4, 5, 6]
for (let i4 of nums){
    console.log(`The square of ${i4} is ${i4*i4}.`)
}
    
//Write a for loop that prints the following numbers (in this order):
// 25
// 20
// 15
// 10
// 5
// 0
console.log('Task #5')
for(let num=25; num>=0; num-=5){
console.log(num);
}

// Write a loop that makes the following pattern using console.log():   
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
console.log('Task #6')
let sym='#'
for (let i6=1;i6<=6;i6++){
    console.log(sym);
    sym=sym+'#';
}

// There is an array of strings called people. 
// Loop over the people array with a for loop,
// printing out each name in uppercase letters. 
// Your result should look something like:
// Hint: use i from your loop as an array index!
const people = ['trump', 'putin', 'biden', 'jinping', 'macron']
console.log('Task #7')
for (let i7 = 0; i7<people.length; i7++){
console.log(people[i7].toUpperCase())
}
//const people1 = ['trump', 'putin', 'biden', 'jinping', 'macron']
//for (let i = 0; i <4; i++){
//let Bigletters = people1[i].charAt(0).toUpperCase()
//console.log(Bigletters+ people1[i].substring(1))
    }

// Profit
let initialAmount=1000;
for (let i=1; i<=10;i++){
    let profit = initialAmount*0.02
    initialAmount = initialAmount + profit;
    console.log(`Our profit at year is ${profit} and total amount is ${initialAmount}`)
}
