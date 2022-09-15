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
  // only returns true if every single element in the array returns true when passed through the callbackFn
  for(let i = 0; i < this.length; i++){
    if(callbackFn(this[i]) === false){
      return false;
    }
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  // Place your code here.
  // The reduce() method executes a user-supplied "reducer" callback function on each element of the array in order
  // passing in the return value from the calculation on the preceding element. The final result of running the reducer across 
  // all elements of the array is a single value.
  let initial_value = 0;
  for(let i = 0; i < this.length; i++){
    initial_value += callbackFn(this[i]);
  }
return initial_value;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  // Place your code here.
  // The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
  for(let i = 0; i < this.length; i++){
    if(this[i] === searchElement){
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  // Place your code here.
  // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  for(let i = 0; i < this.length; i++){
    if(this[i] === searchElement){
      return i;
    }
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  // Place your code here.
  // The lastIndexOf() method returns the last index at which a given element can be found in the array
  // or -1 if it is not present. The array is searched backwards, starting at fromIndex.
  for(let i = (this.length - 1); i > 0; i--){
    if(this[i] === searchElement){
      return i;
    }
  }
  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  // Place your code here.
  // The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
  let keys = [];
    for (let key in object) {
        keys.push(key);
    }
  return keys;
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
  // The values() method returns a new array iterator object that iterates the value of each index in the array.
  let values = [];
    for (let key in object) {
      values.push(object[key]);
    }
  return values;
};

// ------------------------------------------ Tests -------------------------------------------------------------------- //

let testArray1 = [1, 2, 3, 4, 5, 6, 7, 2, 1];
let testArray2 = ['apple', 'orange', 'banana', 'pear', 'mango'];
let person = {
  name: 'Ariel',
  degree: 'Computer Science'
}

const printOut = (x) => {console.log(x)}
const testGreater = (x) => {return x > 3}
const sameVal = (x) => {return x}

console.log('test myMap: ');
testArray2.map(printOut);
console.log('test myFilter: ');
console.log(testArray1.myFilter(testGreater));
console.log('test mySome: ');
console.log(testArray1.mySome(testGreater));
console.log('test myEvery: ');
console.log(testArray1.myEvery(testGreater));
console.log('test myReduce: ');
console.log(testArray1.myReduce(sameVal));
console.log('test myIncludes: ');
console.log(testArray2.myIncludes('mango'));
console.log('test myIndexOf: ');
console.log(testArray2.myIndexOf('mango'));
console.log('test myLastIndexOf: ');
console.log(testArray1.myLastIndexOf(2));
console.log('test myKeys: ');
console.log(Object.myKeys(person));
console.log('test myValues: ');
console.log(Object.myValues(person));