// Q1 Create a block of code that you can use several times. 

// function sum(num1 , num2){
//     console.log(num1 + num2);
    
// }
// sum(5,7);
// sum(6,9);
// sum(8,7);
// sum(12,9);

// Q2 Write a function that displays current date & time in your browser.

// function date(){
//     var date= new Date();
//     console.log(date.toLocaleString())
// }
// date();

// Q3	Write a function that takes first & last name and then it greets the user using his full name.

// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");

// function greetuser(){
//     console.log(firstName + lastName);
    
// }
// // greetuser();

// Q4 Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// var num1 = +prompt("enter number 1");
// var num2 = +prompt("enter number 2");

// function add(){
//     console.log(`The sum of two numbers is ${num1 + num2}`);
    
// }
// add()

// Q5 Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calculator(num1, num2){
//        return num1 + num2;
// }
// var sum = calculator(40, 70);
// console.log(sum);

// function calculator(num1 , num2, operator){
//     var result;
//     if(operator=="+"){
//          return num1 + num2
//     }
//     if(operator=="-"){
//         return num1 - num2
//     }
//     if(operator=="*"){
//     return num1 * num2
//     }
//     if(operator=="/"){
//     return num1 / num2
// }
// return result;
// }
// var sum1 = calculator(30,70 ,'+');
// var sum2 = calculator(80,50 ,'-')
// var sum3 = calculator(2,8 ,'*');
// var sum4 = calculator(8,6 ,'/');

// console.log(` addition of 30 and 70 is ${sum1} , subtraction of 80 and 50 is ${sum2}, Multiplication of 2 and 8 is ${sum3}, Division of 8 and 6 is ${sum4}`);

// Q6 Write a function that squares its argument.

// function square(num){
//         return num*num;
//     }
//     var ans1=square(2);
//     var ans2=square(10);
//     var ans3=square(20);
//     console.log(ans1+", "+ans2+" ,"+ans3);

// Q7 Write a function that computes factorial of a number.
// var number = prompt("enter a number")
// var fact = 1;
// function factorial(n){
//          if(number==0){
//             console.log(`The factorial of ${number} is 1`);
//         }
//         else if(number< 0){
//             console.log(`The factorial of -ive numbers is not defined`);
//         }
//         else{
//             for(var i=1;i<=number;i++){
//                 fact = fact *i;
                
//             }
//             console.log(`the factorial of ${number} is ${fact}`);
//         }
// }

// factorial()

// Q8.	Write a function that take start and end number as inputs & display counting in your browser.

// function Counter(start,end){
//    var div = document.querySelector("#div-1");
// //    div.innerHTML="";
//    for(start; start<=end; start++){
//    div.innerHTML += start + "<br/>";
    
//    }
// }
// Counter(6 , 9);

// Q9	Write a nested function that computes hypotenuse of a right angle triangle. 
// function calculateHypotenuse(B,P){
//     function calculateSquare(B,P){
//         var H=+(B*B)+ +(P*P);
//         console.log("Hypotenuse is equal to "+H)

//     }
//     calculateSquare(2,3);
 
// }
// calculateHypotenuse(2,3);

// Q10	Write a function that writes variable length arguments list in your browser.

// function len(a){
//     var b=a.length;
//     console.log(b);
// }
// len("Strings");


// Q11 Write a function that accepts any number of arguments & find largest of the number

// function findLargest(){
//     var array = [30,70,41,7,6];
//     var max = array[0];
//     for(var i = 0; i<array.length;i++){
//         if(array[i]>max){
//             max = array[i];
//         }
// }    
// console.log(`The largest number in array is ${max}`);
// }
// findLargest()

// Q12.	Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// a.	Arguments as values
// b.	Arguments as variables

// function area(width,height){
//     var A=width*height;
//     console.log(A);
// }
// area(2,7);
 
// }
// rectangel(400,300);

// Q13 	Write a function that receives an array & returns the sorted array.

// function sortArray(array){
//        var finalOutput= array.sort();
//        console.log(finalOutput)
// }
//  sortArray([67,89,76,52,15]);

//  Q14.	Write a function that takes numbers array, sums its elements & returns the sum.

// function sumArr(){
    
//     var sum = arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5];
//     console.log(sum);
// }
// var arr=[1,2,3,45,5,4]
// sumArr(arr);


// function sum(arry){
//     var result= arry.reduce((accumulator, currentValue) => accumulator+currentValue );
//     console.log(result)

// }
// sum([67,98,70,30]);

// Q15	Execute & monitor the output of following JS program:

// var param = function inner() { 
//     return typeof inner; 
// }
// alert(param()); 


// Q16	Write a function that computes power of a number. E.g. 23 is 8.
// function powerNumber(){
//    var result= 2**3
//     console.log(result);
    
// }
// powerNumber()

// Q17	Write a function that simulates a dice & returns a random dice value.

// var h4 = document.querySelector('#head-one');
// var h4 = document.querySelector('#head-two');
// var h4 = document.querySelector('#head-three');

// function rollButton(){
//     h4.innerHTML = "";
//     var x = Math.floor(Math.random() * 6) +1;
//     var y = Math.floor(Math.random() * 6) +1;
//     var z = Math.floor(Math.random() * 6) +1;
//     h4.innerHTML += `${x} <br>`;
//     h4.innerHTML += `${y} <br>`;
//     h4.innerHTML += `${z} <br>`;
    
// }

// Q18	Write a JavaScript function that reverse a number. 
// Example x = 32243;
// EXPECTED OUTPUT : 34223

// function reverse(number){
//     number = number+"" //convert the number into string
//     return number.split("").reverse().join("");
// }
// var num = reverse(567)
// console.log(num);

// Q19	Write a JavaScript function that checks whether a passed string is palindrome or not?  
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// function palindrome(str){
//     var reversed = str.split("").reverse().join("");
//     if(str==reversed){
//         console.log(str + " is a palindrome");
        
//     }else{
//         console.log(str + " is not a palindrome");
        
//     }
// }
// palindrome("madam");

// Q20	Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// EXAMPLE STRING : 'the quick brown fox' 
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function capitalize(sentence){
//     var str = sentence.split(" ")
//     for(i=0; i<str.length;i++){
//         str [i] = str[i][0].toUpperCase() + str[i].substring(1);
        
//     }
//     return str.join(" ");
    
// }
// console.log(capitalize("the quick brown fox"));


// Q21.	Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial' 
// EXPECTED OUTPUT : 'Development'

// function longestWord(string){
//     var longest = 0;
//     var numberValue;
//     var arr = string.split(" ");
//     for(i=0; i<arr.length;i++){
//         if(arr.length >longest){
//             // longest = arr[i].length;
//             numberValue = arr[i];
//         }
//     }
//     console.log("" + numberValue);
    
// }
// longestWord("web development")

// Q22	Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

// EXAMPLE STRING : 'The quick brown fox' 
// EXPECTED OUTPUT : 5

// function countWovels(str){
//     var reg = /[aeiou]/gi;
//     var match = str.match(reg);
//     console.log(match.length);
    

// }
// countWovels('The quick brown fox')

// Q23


// Q26
// function Age(birthyear, currentYear){
//     console.log("Age calculator");
// // var currentYear = 2024;
// // var birthyear = 2006;
// var age1 = 2024-2008;
// var age2 = age1-1;
// console.log("They are either " + age1 + " or " + age2 + " years old");
// }
// Age(2008 , 2024)

// Q27
// function calculateSupply(){
//     var favSnack = "chips";
//     var CurrentAge = 16;
//     var MaxAge = 24;
//     var snackQ=3;
//     var totalSnack=((MaxAge-CurrentAge)*snackQ);
//     console.log("You will need " + totalSnack + " " + favSnack + " to last you until the ripe old age of " + MaxAge + ".");
// }
// calculateSupply()

// Q28 Create 2 functions that calculate properties of a circle, using the definitions here.
// function calcCircumference(radius){
//     var circumference = 2*3.142*radius;
//     var area = 3.142*radius*radius;
//     console.log("Radius of a circle: " + radius);
//     console.log("The circumference is " + circumference);
//     console.log("The area is " + area);
// }
// calcCircumference(30)

// Q29

// function celsiusToFahrenheit(){
//     var celsius = 25;
//     var fahrenheitConversion= (celsius*9/5)+32;
//     console.log(celsius + "C" + " is " + fahrenheitConversion + "F");
// }
// celsiusToFahrenheit()

// function fahrenheitToCelsius(){
//     var fahrenheit=100;
//     var celsiusConversion=(fahrenheit-32)*5/9;
//     console.log(fahrenheit + "F" + " is " + celsiusConversion + "C");
// }
// fahrenheitToCelsius()








