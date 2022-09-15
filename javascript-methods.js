/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.

Ariel Tejada - 12142319
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  // Place your code here.
  // 'this' references the specific instance of Array.prototype its being called on
  // pass every element in the array through the callbackFn starting from element 0
  for(let i = 0; i < this.length; i++){
    callbackFn(this[i]);
  }
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  // Place your code here.
  // create empty array, pass every element in 'this' array through callbackFn
  // the ones that return true get pushed into new array, new array gets returned (filtered) 
  let filteredArray = [];
  for(let i = 0; i < this.length; i++){
    if(callbackFn(this[i])){
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  // Place your code here.
  // returns true if 'some'/any of the elements in the array return true when passed through the callbackFn
  for(let i = 0; i < this.length; i++){
    if(callbackFn(this[i])){
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  // Place your code here.

};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.

};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.

};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.

};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.

};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.

};

// ------------------------------------------ Tests -------------------------------------------------------------------- //

let testArray1 = [1, 2, 3, 4, 5, 6, 7, 2, 1];
let testArray2 = ['apple', 'orange', 'banana', 'pear', 'mango'];

const printOut = (x) => {console.log(x)}
const testGreater = (x) => {return x > 3}
const sameVal = (x) => {return x}

