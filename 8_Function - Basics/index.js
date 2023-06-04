// (A) Function Declaration without parameters
var greet;
greet = 'hello;'; //Error
greet = function () {
    console.log("Hello World!");
};
greet();
// (B) Function Declaration with REQUIRED parameters
//1 : Normal
var required = function (a, b) {
    console.log(a + b);
};
required(5, 10);
// 2 : With default values
var add = function (a, b) {
    if (a === void 0) { a = 30; }
    if (b === void 0) { b = 40; }
    console.log(a + b);
};
add(); //output -> 70
add(10, 20); //output -> 30 , it overwrites default values
// (C) Function Declaration with OPTIONAL parameters
// 1 
var optional = function (a, b) {
    if (a === void 0) { a = 100; }
    console.log(a);
    console.log(b); //output -> undefined as value not specified in function call
};
optional();
//2 - Union types
var optional2 = function (a, b) {
    console.log(a);
    console.log(b); //output -> 10
};
optional2(5, 10); //output -> 5 10
optional2(5, 'Aksha'); //output -> 5 Aksha
//3 - Default value to optional
var optional3 = function (a, b) {
    if (b === void 0) { b = 'Hey'; }
    console.log(a);
    console.log(b); //It will print default value even if we don't pass value in function call as it is default value
};
optional3(65); //output -> 65 then Hey
// (D) Returns Specific type of value  - Here number
// If we don't return anything then it will return void
var minus = function (a, b) {
    return a + b;
};
var result = minus(10, 7);
console.log(result);
