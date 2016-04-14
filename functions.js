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
