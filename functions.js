//Hello!

function compare(a,b){
   return a.length - b.length;
}
var newArray = ["rouge", "orange", "noir", "turquoise"];
newArray.sort(compare);


//Create an array of objects with a name and email property
var myArray = [{name: "Paco", email: "franciscovia@yahoo.es"},
    {name: "Marie-Eve", email: "marie.eve.gauthier@hotmail.com"}
               ];

//run a code that will sort your array by the longest name
function compareName(a,b) {
    return b.name.length - a.name.length;
}
myArray.sort(compareName);

//run a code that will sort your array by e-mail address in alphabetical order.
function compareEmail(a,b){  
    if (a.email < b.email) {
        return -1;
    }
        else if (b.email === a.email) {
            return 0;
           
    }
        else if (a.email > b.email) {
            return 1;
    }
}
myArray.sort(compareEmail);
             

//run a code with map that return the square of a number
function square(num){
    return num * num;
}
var myArray = [2,3,4,5];
myArray.map(square);


//run a code with map that will return the square of the num property of object
function squareOfObject(myObjects){
    return myObjects.num * myObjects.num;
}
var myObjects = [{num:2}, {num:3}, {num:4}, {num:5}];
myObjects.map(squareOfObject);