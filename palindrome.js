// Check for Palindromes
// Algorithm:
// I/O: word - a string
// O/P: true if palindrome else false
// steps: 
// 1. make a function checkPalindrome & pass one parameter word 
// 1a. inside function, make a variable inputWord & initialise it to word
// 1b. make a variable checkString assign it to removed spaces , lowercase inputWord 
//       do this by using split,join & toLowerCase functions
// 1c. use for loop to iterate through checkString, 
// 1d. inside loop use if to check beginning and end of the string are equal
//     then  not equal return false
// 1e. if both are equal come out of loop & return true then string is palindrome
// 2. call the function & print O/P      

var checkPalindrome = function(word){
    var inputWord = word;
    var checkString = inputWord.split("").join("").toLowerCase();// split -returns new array with substrings , join() - is used to join all the elements of an array to a string and return that resultant string
    for(i=0; i < checkString.length/2; i++){
        if(checkString[i] != checkString[checkString.length - i - 1]){
            return false;
         }
    }
    return true;
}
var output = checkPalindrome("rasecar");// output: false
console.log(output);