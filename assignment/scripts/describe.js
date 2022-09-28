// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// First we set the name variable to the string "Dane". Then we run a conditional that tests to see if the variable name is equal in value and data type to 'Mary'. If it is, the program will print "Hi, Mary" 
// to the console. If it is not, it will print "how do you do?" In this case, since name does not equal Mary, we expect the console.log function to print "How do you do?" to the console. 
// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// First we are declaring a variable named secret, but not assigning it any value. Next, we are assigning the variable named code to the number 123. 
// After those variables are defined we are running a conditional that tests if the code is equal in value and data type to 123. If it does, it will reassign secret as the string 'super'. If it is not, 
// it will reassign the variable 'code' to the original value * 2 (or 123 * 2). 
//Next it will run another conditional where it checks if the new value of code is greater than 250. If it is, secret will be reassigned to 'duper'. At the end, the program will console.log the finishing value of secret.
// Therefore, the console will read 'super' because the initial conditional was met and therefore secret was reassigned to super and code became 246. But since 246 is not greater than 250, the second conditional is not run. 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// First, variables are assigned a value (isStudent is assigned to the boolean true, age is assigned 34, and zip is assigned 55407). 
// Next a conditional is run to test if is student is equal ini value and code type to true, AND zip is greater than 80,000. If it were, the console would read: " you are a student on the west coast!" 
// If that wasn't true, it would run the next conditional that tests if isStudent is false OR that age is less than 30. If either of those condtions are true, the console will read: 'what are your hobbies?'
// If neither of those condtions were true, it will run the next truthy conditional that tests if isStudent is true. If that is true, it will run the console.log function to read "Welcome to Prime" in the console. 
//If none of the above conditionals come back true, the console.log function will print the string 'How about the weather?' to the console. 
//In this case, the console will read: "Welcome to Prime!"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//The values of the variables colorOne and colorTwo are backwards. colorOne should be assigned blue, and colorTwo should be red, like so: let colorOne = 'blue'; let colorTwo = 'red';. 
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //you also want to reassign colorTwo to 'purple', like so: colorTwo = 'purple'; . 
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// You want to use the && instead of || to check if both condtionals comeback true instead of just one. Like so: if (temp > 39 && time >=4). 
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
//you want to switch the less than sign to greater than, still including the equals, like so: if(minAge>= age). 
if(minAge <= age) {
  //the below console.log entries should be swapped. Currently, if minAge is less than or equal to age, it will print 'no entry' to the console. It should read: console.log('enter');} else {console.log('no entry')};
  console.log('no entry');
} else {
  console.log('enter');
}
*/

