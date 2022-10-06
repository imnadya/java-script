const pizza = {  
name: 'pepperoni',
price: 8,
toppings: ['marinara', 'cheese', 'pepperoni']
}

//Print the keys of the following object as an array 
console.log(Object.keys(pizza))

//Print the values of the following object as an array
console.log(Object.values(pizza))

// Check whether the property called taste exists or not.
console.log(pizza.hasOwnProperty('taste'))

//Print the values and entries of the following object as an array
console.log(Object.entries(pizza))
