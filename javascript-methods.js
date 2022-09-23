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
let newArray = [];
  for(let i = 0; i < this.length; i++){
    if (this.hasOwnProperty(i)) {
      newArray.push(callbackFn(this[i], i, this));
    } else {
      newArray.length++;
    }
  }
return newArray;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
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
  for(let i = 0; i < this.length; i++){
    if(this.hasOwnProperty(i)){
      if(callbackFn(this[i], i, this)){
      return true;
      }
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for(let i = 0; i < this.length; i++){
    if(this.hasOwnProperty(i)){
      if(callbackFn(this[i], i, this) === false){
        return false;
      }
    }
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callback, initialValue){
  for (let i = 0; i < this.length; i++) {
    if(this.hasOwnProperty(i)){
      initialValue = callback(initialValue, this[i], i, this);
    }  
  }
return initialValue;
}

// INCLUDES //
Array.prototype.myIncludes = function(searchElement, searchIndex) {
  if(searchIndex != undefined){
    return (this[searchIndex] === searchElement);
  }

  for(let i = 0; i < this.length; i++){
    if(this[i] === searchElement){
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement, fromIndex = 0) {
  for(let i = fromIndex; i < this.length; i++){
    if(this[i] === searchElement){
      return i;
    }
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement, fromIndex = this.length - 1) {
  for(let i = fromIndex; i >= 0; i--){
    if(this[i] === searchElement){
      return i;
    }
  }
  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  let keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
};

// VALUES //
Object.myValues = function(object) {
  const values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }
    return values;
};

// ---------------------------- Testing ---------------------------- //

// Test Arrays/Objects
let testArray1 = [1, 2, 3, 4, 2, 1];
let testArray2 = ['apple', 'orange', 'banana', 'pear', 'mango'];
let testArray3 = [1, , undefined, 4, 1];
let person = { 
  name: 'Ariel',
  degree: 'Computer Science'
}

// Tests

let test;
console.log("test .map() (1 parameter):");
test  = testArray3.map((x) => {console.log(x)});
console.log(test);
console.log('test .myMap() (1 parameter):');
test  = testArray3.myMap((x) => {console.log(x)});
console.log(test);
console.log('\n');
console.log("test .map() (2 parameter):");
test = testArray3.map((x, y) => {console.log(x, y)});
console.log(test);
console.log('test .myMap() (2 parameter):');
test = testArray3.myMap((x, y) => {console.log(x, y)});
console.log(test);
console.log('\n');
console.log("test .map() (3 parameter):");
test = testArray3.map((x, y, z) => {console.log(x, y, z)});
console.log(test);
console.log('test .myMap() (3 parameter):');
test = testArray3.myMap((x, y, z) => {console.log(x, y, z)});
console.log(test);
console.log('-------------------');

/* console.log("test .filter() (1 parameter):");
test = testArray3.filter((x)=> {return x > 2});
console.log(test);
console.log('test .myFilter() (1 parameter): ');
test = testArray3.myFilter((x) => {return x > 2});
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
console.log('-------------------'); */

/* console.log("test .some() (1 parameter):");
console.log(testArray1.some((x) => {return x === 3}));
console.log('test .mySome() (1 parameter):');
console.log(testArray1.mySome((x) => {return x === 3}));
console.log('\n');
console.log("test .some() (2 parameter):");
console.log(testArray2.some((x, y) => {return (x === 'orange' && y === 1)}));
console.log('test .mySome() (2 parameter):');
console.log(testArray2.mySome((x, y) => {return (x === 'orange' && y === 1)}));
console.log('\n');
console.log("test .some() (3 parameter):");
console.log(testArray3.some((x, y, z) => {return (x > 6 && y > 1 && z[y] === 4)}));
console.log('test .mySome() (3 parameter):');
console.log(testArray3.mySome((x, y, z) => {return (x > 6 && y > 1 && z[y] === 4)}));
console.log('-------------------'); */

/* console.log("test .every() (1 parameter):");
console.log(testArray1.every((x) => {return x > 2}));
console.log('test .myEvery() (1 parameter): ');
console.log(testArray1.myEvery((x) => {return x > 2}));
console.log('\n');
console.log("test .every() (2 parameter):");
console.log(testArray3.every((x, y) => {return (x >= 0 && y >= 0)}));
console.log('test .myEvery() (2 parameter): ');
console.log(testArray3.myEvery((x, y) => {return (x >= 0 && y >= 0)}));
console.log('\n');
console.log("test .every() (3 parameter):");
console.log(testArray2.every((x, y, z) => {return (z[y] === x)}));
console.log('test .myEvery() (3 parameter): ');
console.log(testArray2.myEvery((x, y, z) => {return (z[y] === x)}));
console.log('-------------------'); */

/* function adder(a, b) {
  return a + b;
};

console.log("test .reduce() (2 parameter):");
console.log(testArray1.reduce(adder, 0));
console.log('test .myReduce() (2 parameter): ');
console.log(testArray1.myReduce(adder, 0));
console.log('\n');
console.log('-------------------'); */

/* console.log("test .includes() (1 parameter)");
console.log(testArray1.includes(2));
console.log('test .myIncludes() (1 parameter): ');
console.log(testArray1.includes(2));
console.log('\n');
console.log("test .includes() (2 parameter)");
console.log(testArray2.includes('banana', 2));
console.log('test .myIncludes() (2 parameter): ');
console.log(testArray2.includes('banana', 2));
console.log('\n');
console.log("test .includes() (2 parameter)");
console.log(testArray3.includes(undefined, 2));
console.log('test .myIncludes() (2 parameter): ');
console.log(testArray3.includes(undefined, 2));
console.log('-------------------'); */

/* console.log("test .indexOf() (1 parameter)");
console.log(testArray1.indexOf(2));
console.log('test .myIndexOf() (1 parameter): ');
console.log(testArray1.indexOf(2));
console.log('\n');
console.log("test .indexOf() (2 parameter)");
console.log(testArray1.indexOf(2, 2));
console.log('test .myIndexOf() (2 parameter): ');
console.log(testArray1.indexOf(2, 2));
console.log('\n');
console.log("test .indexOf() (2 parameter)");
console.log(testArray3.indexOf(1, 1));
console.log('test .myIndexOf() (2 parameter): ');
console.log(testArray3.indexOf(1, 1));
console.log('-------------------'); */

/* console.log("test .lastIndexOf() (1 parameter)");
console.log(testArray1.lastIndexOf(2));
console.log('test .myLastIndexOf() (1 parameter): ');
console.log(testArray1.myLastIndexOf(2));
console.log('\n');
console.log("test .lastIndexOf() (2 parameter)");
console.log(testArray1.lastIndexOf(2, 2));
console.log('test .myLastIndexOf() (2 parameter): ');
console.log(testArray1.myLastIndexOf(2, 2));
console.log('\n');
console.log("test .lastIndexOf() (2 parameter)");
console.log(testArray3.lastIndexOf(1, 1));
console.log('test .myLastIndexOf() (2 parameter): ');
console.log(testArray3.myLastIndexOf(1, 1));
console.log('-------------------'); */

/* console.log("test .keys():");
console.log(Object.keys(testArray1));
console.log('test .myKeys():');
console.log(Object.myKeys(testArray1));
console.log('\n');
console.log("test .keys():");
console.log(Object.keys(testArray3));
console.log('test .myKeys():');
console.log(Object.myKeys(testArray3));
console.log('\n');
console.log("test .keys():");
console.log(Object.keys(person));
console.log('test .myKeys():');
console.log(Object.myKeys(person));
console.log('-------------------'); */

/* console.log("test .values():");
console.log(Object.values(testArray1));
console.log('test .myValues():');
console.log(Object.myValues(testArray1));
console.log('\n');
console.log("test .values():");
console.log(Object.values(testArray3));
console.log('test .myValues():');
console.log(Object.myValues(testArray3));
console.log('\n');
console.log("test .values():");
console.log(Object.values(person));
console.log('test .myValues():');
console.log(Object.myValues(person));
console.log('-------------------'); */