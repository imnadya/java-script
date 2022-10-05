const car = {
    model: "Tesla",
    year:2022,
    cost: 50000,
    owner: "Elon Musk",
    country: "United States",
    isNew: true,
    previousOwners: ['Jay Leno', 'Barack Obama', 'Ellen Stage'],
    //add one method that describes the car
    getdescription: function(){
        return `This ${this.model} is owned by ${this.owner} and costs ${this.cost}.`
    }
}
//print
console.log(car.getdescription())
//print the whole object
console.log(car)
//print properties separately
for(info in car){
    console.log(car[info])
}
//Change values (new cost, new owner) and add an old owner to previousOwners array

console.log(car.cost)
console.log(car.owner)
console.log(car.previousOwners)
car.cost=70000
car.previousOwners.push(car.owner)
car.owner="Argen"
console.log(car.cost)
console.log(car.owner)
console.log(car.previousOwners)
//Create multiple objects and save them in an array
const car2 = {
    model: "Aston Martin",
    year:2022,
    cost: 300000,
    owner: "James Bond",
    country: "United Kingdom",
    isNew: true,
    previousOwners: ['Sean Connery', 'Pierce Brosnon', 'Daniel Craig'],
    //add one method that describes the car
    getdescription: function(){
        return `This ${this.model} is owned by ${this.owner} and costs ${this.cost}.`
    }
}

const car3 = {
    model: "BMW",
    year:2022,
    cost: 30000,
    owner: "Ned Flanders",
    country: "United States",
    isNew: true,
    previousOwners: ['Daniel Day Lewis', 'Joey Vato', 'Gordon Ryan'],
    //add one method that describes the car
    getdescription: function(){
        return `This ${this.model} is owned by ${this.owner} and costs ${this.cost}.`
    }
}
const cars=[car,car2,car3]
console.log(cars)
//Use console.table function
console.table(car)
//Explain/show the difference between DOT Notation vs Bracket Notation
console.log(car.owner)
console.log(car['owner'])
console.log(car2.getdescription())
//The difference is the formatting and also if we need to call a specific function, we would need to use brackets notation

//Create one nested object
const car4 = {
    model: "Aston Martin",
    year:2022,
    cost: 300000,
    owner: "James Bond",
    country: "United Kingdom",
    isNew: true,
    previousOwners: ['Sean Connery', 'Pierce Brosnon', 'Daniel Craig'],
    previouscar:car,
    //add one method that describes the car
    getdescription: function(){
        return `This ${this.model} is owned by ${this.owner} and costs ${this.cost}.`
    }
}
//print the whole object
console.log(car4)
