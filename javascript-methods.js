/*-----------------------------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.

Ariel Tejada - 12142319
------------------------------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
// map calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results. callbackFn is invoked only for indexes of the array which have assigned values (including undefined).
// It is not called for missing elements of the array; that is:
// indexes that have never been set;
// indexes which have been deleted.
let newArray = [];

  for(let i = 0; i < this.length; i++){
    if (this.hasOwnProperty(i)) {
      callbackFn(this[i], i, this);
      newArray.push(this[i]);
    }
  }
return newArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  /* filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true. callbackFn is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callbackFn test are skipped, and are not included in the new array.

callbackFn is invoked with three arguments:

the value of the element
the index of the element
the Array object being traversed */
  let filteredArray = [];
  for(let i = 0; i < this.length; i++){
    if (this.hasOwnProperty(i)) {
      if(callbackFn(this[i], i, this)){
        filteredArray.push(this[i]);
      }
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

// ---------------------------- Testing ---------------------------- //

// Test Arrays/Objects
let testArray1 = [1, 2, 3, 4, 2, 1];
let testArray2 = ['apple', 'orange', 'banana', 'pear', 'mango'];
let testArray3 = [1, , undefined, 4];
let person = { 
  name: 'Ariel',
  degree: 'Computer Science'
}

// Tests

let test;
// console.log("test .map() (1 parameter):");
// testArray3.map((x) => {console.log(x)});
// console.log('test .myMap() (1 parameter):');
// testArray3.myMap((x) => {console.log(x)});
// console.log('\n');
// console.log("test .map() (2 parameter):");
// testArray3.map((x, y) => {console.log(x, y)});
// console.log('test .myMap() (2 parameter):');
// testArray3.myMap((x, y) => {console.log(x, y)});
// console.log('\n');
// console.log("test .map() (3 parameter):");
// testArray3.map((x, y, z) => {console.log(x, y, z)});
// console.log('test .myMap() (3 parameter):');
// testArray3.myMap((x, y, z) => {console.log(x, y, z)});
// console.log('-------------------');

console.log("test .filter() (1 parameter):");
test = testArray1.filter((x)=> {return x > 2});
console.log(test);
console.log('test .myFilter() (1 parameter): ');
test = testArray1.myFilter((x) => {return x > 2});
console.log(test);
console.log('\n');
console.log("test .filter() (2 parameter):");
test = testArray1.filter((x, y)=> {return (x + y) > 2});
console.log(test);
console.log('test .myFilter() (2 parameter): ');
test = testArray1.myFilter((x, y)=> {return (x + y) > 2});
console.log(test);
console.log('\n');
console.log("test .filter() (3 parameter):");
test = testArray1.filter((x, y, z)=> {return (x + y + z[y]) > 5});
console.log(test);
console.log('test .myFilter() (3 parameter): ');
test = testArray1.myFilter((x, y, z)=> {return (x + y + z[y]) > 5});
console.log(test);
console.log('-------------------');

// console.log("test .some()");
// console.log();
// console.log('test mySome: ');
// console.log(testArray1.mySome(testGreater));
// console.log('-------------------');

// console.log("test .every()");
// console.log();
// console.log('test myEvery: ');
// console.log(testArray1.myEvery(testGreater));
// console.log('-------------------');

// console.log("test .reduce()");
// console.log();
// console.log('test myReduce: ');
// console.log(testArray1.myReduce(sameVal));
// console.log('-------------------');

// console.log("test .includes()");
// console.log();
// console.log('test myIncludes: ');
// console.log(testArray2.myIncludes('mango'));
// console.log('-------------------');

// console.log("test .indexOf()");
// console.log();
// console.log('test myIndexOf: ');
// console.log(testArray2.myIndexOf('mango'));
// console.log('-------------------');

// console.log("test .lastIndexOf()");
// console.log();
// console.log('test myLastIndexOf: ');
// console.log(testArray1.myLastIndexOf(2));
// console.log('-------------------');

// console.log("test .keys()");
// console.log();
// console.log('test myKeys: ');
// console.log(Object.myKeys(person));
// console.log('-------------------');

// console.log("test .values()");
// console.log();
// console.log('test myValues: ');
// console.log(Object.myValues(person));
// console.log('-------------------');