/* This function should take two strings, and return a value that sort can use to determine which is the longest string. 
Finally, create an array of strings and try to get it sorted using your new function.
*/

// this is the function that defines the sort order - 
function  longestString (str1, str2) {
    if (str1.length < str2.length) {
        return -1;
    }
    if (str1.length > str2.length) {
        return 1;
    }
    // str1 must be equal to str2
    return 0;
}


var animals = ["butterfly", "horse", "bird", "cat", "rabbit"];
 
console.log(animals.sort(longestString));

/*Create an array of objects (don’t need to use new here, just regular object literals). 
These objects will contain a name and email property. Then, run some code that will sort your array by the longest name. 
Then, run some code that will sort your array by e-mail address in alphabetical order.
*/

var myContactsEmail = [
    {name:"Annie-Claude", email:"annie_claude_beaudry@gmail.com"},
    {name:"Corinne", email:"coco.lalande@hotmail.com"},
    {name:"Paco", email:"franciscovia@yahoo.es"},
    ];
    
//array sorted by the longest name  
console.log(myContactsEmail.sort(function (a, b) {
  if (a.name.length > b.name.length) {
    return 1;
  }
  if (a.name.length < b.name.length) {
    return -1;
  }
  // a must be equal to b
  return 0;
}));

//array sorted by e-mail address in alphabetical order
console.log(myContactsEmail.sort(function(a, b) {
if (a.email > b.email) {
    return 1;
  }
  if (a.email < b.email) {
    return -1;
  }
  // a must be equal to b
  return 0;    
    
}));

//This function takes a number and return its square Then, use this function with map on an array of numbers to check the result.

function square(element) {
    return element * element;
}

var numbers = [2, 3, 4];

console.log(numbers.map(square));

/*This function should be able to take an object and square its “num” property. 
Then, use this function with map on an array of objects each containing a “num” property.
*/

function squareOfNumProperty (obj) {
    return obj.num * obj.num;
}

var arrOfObj = [
    {num: 2},
    {num: 3},
    {num: 4}
];

console.log(arrOfObj.map(squareOfNumProperty));

    