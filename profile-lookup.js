// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let value='';
  for (let i=0;i<contacts.lenght;i++){
    console.log(contacts[i][FirstName]);
if (contacts[i][FirstName] == name&& contacts[i].hasOwnProperty(prop)){
value=contacts[i][prop];
}
else if (contacts[i][FirstName]!==name){
  value = `No such contact`;
}
else {
value=`No such property`;
}}
return value;
}
  // Only change code above this line

lookUpProfile("Akira", "likes");
