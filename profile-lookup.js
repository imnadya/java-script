
//There is an array of objects representing different people in our contacts lists.
//A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
//The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
//If both are true, then return the "value" of that property.
//If name does not correspond to any contacts then return the string No such contact.
//If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
// Only change code below this line
  var contact;
    for (var i=0; i<contacts.length; i++) {
    if (contacts[i].firstName === name) {
      contact = contacts[i];
      break;
    }
  }
  
  if (contact) {
    if (contact.hasOwnProperty(prop)) {
      return contact[prop];
    } else {
      return "No such property";
    }
  } else {
    return "No such contact";
  }
// Only change code above this line
}

/*
SHORTER, BETTER VERSION
function lookUp(name, prop){
// Only change code below this line
  for (var p=0; p<contacts.length; p++) {
    var contact = contacts[p];
    if (contact.firstName===name) {
      if (contact.hasOwnProperty(prop)) {
        return contact[prop];
      }
      return "No such property";
    }
  }
  return "No such contact";
// Only change code above this line
}
*/

// Change these values to test your function
lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry", "likes");
lookUpProfile("Bob", "number");
lookUpProfile("Akira", "address");
