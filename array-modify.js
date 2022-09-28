const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat')
console.log(shoppingCart)
//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log(shoppingCart)

//remove 'Honey' if you are allergic to honey
for (let i=0; i<shoppingCart.length; i++){
    if (shoppingCart[i]=="Honey"){
        shoppingCart.splice(i,1);
        i--;
    }
}
//more simple method to delete "Honey" from array
//shoppingCart.splice(shoppingCart.indexOf("Honey"),1)
console.log(shoppingCart)

//modify Tea to 'Green Tea'
for (let i=0; i<shoppingCart.length; i++){
    if (shoppingCart[i]=="Tea"){
        shoppingCart[i]="Green Tea";
        i--;
    }
}

//simple method to modify Tea value
//shoppingCart[shoppingCart.indexOf("Tea")]="Green Tea"
console.log(shoppingCart)
