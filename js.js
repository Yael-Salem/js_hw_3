'use strict';
// Array Methods Task 5
const fruits = ["apple", "banana", "cherry", "date"];

// Replacing banana with bluebberry and blackberry
fruits.splice(1,1, "blueberry", "blackberry");

console.log("Array methods task 5 output:");
console.log(fruits);

// Array Methods Task 6
const colors = ["red", "orange", "yellow", "green", "blue"];

console.log("\nArray methods task 6 output:");

// Printing only orange and yellow from the array
console.log(colors.slice(1,3));

// Array Methods Task 7
const animals1 = ["cat", "dog"];
const animals2 = ["lion", "tiger"];

// Combining the animal1 and animal2 arrays into one array and printing the result
let animals = animals1.concat(animals2);

console.log("\nArray methods task 7 output:");

console.log(animals);

// Array Methods Task 8
const numbers = [7, 3, 9, 1, 5];

console.log("\nArray methods task 8 output:");

// Sorting the array in ascending order
console.log(numbers.sort(function(a,b){
    return a - b;
}));

// Array Methods Task 9
const letters = ["a", "b", "c", "d"];

console.log("\nArray methods task 9 output:");

// Printing the array in reverse order
console.log(letters.reverse());

// Array Methods Task 10
const sentence = "JavaScript is awesome";

// Splitting the string into an array by spaces
let arr = sentence.split(" ");

console.log("\nArray methods task 10 output:");

console.log(arr);

// Array Methods Task 11
const words = ["Hello", "world"];

let str = words.join(" ");

console.log("\nArray methods task 11 output:");

console.log(str);

// Arrays Task 14
const students = ["דני", "נועה", "רן", "תמר"];

console.log("\nArrays Task 14 Output:");

// Printing each name from the array with a message
students.forEach(function(elem){
    console.log(`שלום ${elem}! בהצלחה במבחן`);
    
});

// Arrays Task 15
const pricesILS = [100, 250, 75, 320];

// Converting the price at each index to Dollars
let priceDollars = pricesILS.map(function(elem){
    return elem/3.5;
});

console.log("\nArray Task 15 Output:");

console.log(priceDollars);

// Arrays Task 16
const users = [
{ username: "Tom", isLoggedIn: true },
{ username: "Jerry", isLoggedIn: false },
{ username: "Spike", isLoggedIn: true }
];

// Returning only the users that are logged in
let loggedInUsers = users.filter(function(elem, index){
    if (users[index].isLoggedIn)
        return elem;
});

console.log("\nArray Task 16 Output:");

console.log(loggedInUsers);

// Arrays Task 17
const products = [
{ name: "Book", quantity: 3 },
{ name: "Pen", quantity: 0 },
{ name: "Notebook", quantity: 5 }
];

// Checking if at least one product is out of stock
let result = products.some(function(elem, i){
    if (products[i].quantity === 0)
        return true;
});

console.log("\nArrays Task 17 Output:");

console.log(`There is at least one product that is out of stock: ${result}`);

// Arrays Task 18
const grades = [72, 85, 90, 67, 58];

// Checking if every grade is a passing grades
let resultTask18 = grades.every(function(elem){
    if (elem >= 60)
        return true;
});

console.log("\nArray Task 18 Output:");

console.log(`Every student passed the test: ${resultTask18}`);

// Arrays Task 19
const employees = [
{ name: "Sharon", salary: 9500 },
{ name: "David", salary: 7800 },
{ name: "Lior", salary: 12000 }
];

let resultArray = employees.filter(function (elem){
    if (elem.salary > 8000)
        return elem;
});

resultArray = resultArray.map(function(elem){
    return elem.name.toUpperCase();
});
    

console.log("\nArray Task 19 Output:");

console.log(resultArray);

// Arrays Task 20
const books = [
  { title: "Book A", pages: 450 },
  { title: "Book B", pages: 520 },
  { title: "Book C", pages: 600 }
];

// Checking if there is at least book with more than 500 pages and saving the result into a variable
let moreThan500Check = books.some(function (elem){
    return elem.pages > 500;
});

let longBooks

// If the value inside moreThan500Check is true then filtering the array and showing only the books with more than 500 pages
if (moreThan500Check)
    longBooks = books.filter(function(elem){
        return elem.pages > 500
});

console.log("\nArray Task 20 Output:");

console.log(longBooks);





