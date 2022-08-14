// Looping a triangle

// Make 7 calls to console.log to output a triangle of hashes

// My Answer
// loop 7 times
// in each iteration loop over the iteration amount and add a '#' to a stored string
// print the string

let triangleLoop = () => {
    for (i = 0; i < 7; i++) {
        let hashString = '';
        for (h = 0; h <= i; h++) {
            hashString += '#';
        }
        console.log(hashString);
    }
}
triangleLoop();


// Book Answer
// for (let line = "#"; line.length < 8; line += "#")
//     console.log(line);



// Fizzbuzz

// Print all of the numbers from 1 to 100 with 2 exceptions
// Numbers divisible by 3, print "Fizz"
// Numbers divisible by 5 (and not 3), print "Buzz"
// Numbers divisible by 3 and 5, print "FizzBuzz"


// My Answer
// Create a loop from 1 - 100 (inclusive)
// On each loop check to see if the current number is divisible by 3 and 5 using modulo
// If it is, print "FizzBuzz"
// Otherwise check to see if the current number is divisible by 3 using modulo
// If it is, print "Fizz"
// Otherwise check to see if the current number is divisible by 5 using modulo
// If it is, print "Buzz"
// Otherwise, print the number

let fizzBuzz = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();


// Book Answer
// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
// }



// Chessboard

// Pass a number to a function that outputs a grid of that size using newline 
// characters to separate lines
// On each line print alternating spaces and "#" to create a chessboard

// My Answer

// Create a function that takes in a number
// Iterate up to the number that was passed in
// On each iteration if it's an odd row (use modulo) start with a space
// On each iteration if it's an even row (use modulo) start with a "#"
// Create a string followed by a new line


let chessboard = (number) => {
    for (row = 0; row < number; row++) {
        let hash = '';
        let entry = (row % 2 === 0) ? ' #' : '# ';

        for (let col = 0; col < number; col++) {
            hash += entry;
        }
        console.log(hash);
    }
}
chessboard(5);


// Book Answer
// let size = 8;
// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);



// Minimum

// Write a function min that takes two arguments and returns thir minimum

// My Answer
const min = (a, b) => {
    return (a < b) ? a : b;
}

console.log('min: ', min(2, 22));

// Book Answer
// function min(a, b) {
//     if (a < b) return a;
//     else return b;
// }



// Recursion

// Define a recursive function isEven
// 0 is even
// 1 is odd
// Any other number N, it's evenness is the same as N - 2
// Accept a single parameter (positive whole number)
// Return a boolean

// My Answer
const isEven = (Num) => {
    if (Num === 0) {
        return true;
    } else if (Num === 1) {
        return false;
    } else {
        return (Num < 0) ? isEven(Num + 2) : isEven(Num - 2);
    }
}

console.log('isEven: ', isEven(0));

// Book Answer
// function isEven(n) {
//     if (n == 0) return true;
//     else if (n == 1) return false;
//     else if (n < 0) return isEven(-n);
//     else return isEven(n - 2);
// }



// Bean Counting

// Write a function countBs
// Takes a string as it's only argument
// Returns a number indicating how many uppercase B's there are in the string

// Write a function countChar that behaves like countB
// Takes a second argument that indicates the character to be counted instead of only counting B's
// Rewrite countB's to make use of this new function

// My Answer
const countChars = (string, char) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) count++;
    }
    return count;
}

const countBs = (string) => {
    return countChars(string, "B")
}

console.log('countChars: ', countBs('Beach Volley Ball'));

// Book Answer
// function countChar(string, ch) {
//     let counted = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == ch) {
//             counted += 1;
//         }
//     }
//     return counted;
// }

// function countBs(string) {
//     return countChar(string, "B");
// }



// The Sum of a Range

// Write a range function that takes 2 arguments, start and end
// Return an array containing all the numbers from start up to and including end

// Write a sum function that takes an array of numbers and returns the sum of these numbers
// run sum(range(1, 10)) to see if it returns 55

// Modify range function to take step as a 3rd argument
// If no step given elements go up by increments of 1
// Otherwise the elements should increment by the step amount
// Should also work with negative steps

// My Answer
const range = (start, end, step = start < end ? 1 : -1) => {
    let rangeArr = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            rangeArr.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            rangeArr.push(i);
        }
    }
    return rangeArr;
}

console.log('range: ', range(5, 2, -1));

const sum = (array) => {
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

console.log('sum: ', sum(range(1, 10)));

// Book Answer
// function range(start, end, step = start < end ? 1 : -1) {
//     let array = [];

//     if (step > 0) {
//       for (let i = start; i <= end; i += step) array.push(i);
//     } else {
//       for (let i = start; i >= end; i += step) array.push(i);
//     }
//     return array;
//   }

//   function sum(array) {
//     let total = 0;
//     for (let value of array) {
//       total += value;
//     }
//     return total;
//   }



// Reversing an Array

// Write two functions, reverseArray and reverseArrayInPlace
// reverseArray takes an array as an arg and produces a new array that has the same elements in inverse order
// reverseArrayInPlace does the same, but modifies the original array
// Can't use standard reverse method

// My Answer
const reverseArray = (array) => {
    let reversedArray = [];

    for (i = array.length; i > 0; i--) {
        reversedArray.push(i);
    }

    return reversedArray;
}

console.log('reverseArray', reverseArray([1, 2, 3, 4, 5]));

const reverseArrayInPlace = (array) => {
    // only iterate over the first half of the array
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        // save the current value
        let currentValue = array[i];
        // swap the current value with the value at the end of the array that mirrors it
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = currentValue;
    }
    return array;
}

console.log('reversedArrayInPlace: ', reverseArrayInPlace([1, 2, 3, 4, 5]));

// Book Answer
// function reverseArray(array) {
//     let output = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         output.push(array[i]);
//     }
//     return output;
// }

// function reverseArrayInPlace(array) {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//         let old = array[i];
//         array[i] = array[array.length - 1 - i];
//         array[array.length - 1 - i] = old;
//     }
//     return array;
// }



// A List

// Need to revisit this one...

// Book Answer
// const arrayToList = (array) => {
//     let list = null;
//     for (let i = array.length - 1; i >= 0; i--) {
//         list = { value: array[i], rest: list };
//     }
//     return list;
// }

// console.log('arrayToList: ', arrayToList([5, 6, 7]));

// const listToArray = (list) => {
//     let array = [];

//     for (let node = list; node; node = node.rest) {
//         array.push(node.value);
//     }

//     return array;
// }

// const prepend = (value, list) => {
//     return { value, rest: list };
// }

// const nth = (list, n) => {
//     if (!list) return undefined;
//     else if (n == 0) return list.value;
//     else return nth(list.rest, n - 1);
// }

// console.log('listToArray: ', listToArray(arrayToList([5, 6, 7])));



// Deep Comparison

// Write a function deepEqual that takes 2 values and returns true only if they are the same value
// or are objects with the same propertees. The values of the properties must be equal when compared with a 
// recursive call to deepEqual.

// My Answer
const deepEqual = (val1, val2) => {
    if (val1 && val2 && typeof val1 === 'object' && typeof val2 === 'object') {
        for (key in val1) {
            if (!deepEqual(val1[key], val2[key])) {
                return false;
            }
        }
        return true;
    }
    return val1 === val2;
}

const val1 = { animal: 'cat', color: 'brown', eyeColor: 'green' };
const val2 = { animal: 'cat', color: 'brown', eyeColor: 'green' };

// const val1 = null;
// const val2 = { animal: 'cat', color: 'brown', eyeColor: 'green' };

// const val1 = 2;
// const val2 = 2;

console.log('Deep Equal', deepEqual(val1, val2));

// Book Answer

// function deepEqual(a, b) {
//     if (a === b) return true;

//     if (a == null || typeof a != "object" ||
//         b == null || typeof b != "object") return false;

//     let keysA = Object.keys(a), keysB = Object.keys(b);

//     if (keysA.length != keysB.length) return false;

//     for (let key of keysA) {
//       if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//     }

//     return true;
//   }

//   let obj = {here: {is: "an"}, object: 2};
//   console.log(deepEqual(obj, obj));
//   // → true
//   console.log(deepEqual(obj, {here: 1, object: 2}));
//   // → false
//   console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
//   // → true



// Flattening

// Use the reduce method in combination with the concat method to "flatten" an array of arrays 
// into a single array that has all the elements of the original arrays.

// My Answer
const flatten = (array) => {
    return array.reduce((prev, curr) => prev.concat(curr), []);
};

myArray = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f', 'g'],
    ['h', 'i']
];

console.log('Flatten: ', flatten(myArray));

// Book Answer

// let arrays = [[1, 2, 3], [4, 5], [6]];

// console.log(arrays.reduce((flat, current) => flat.concat(current), []));
// // → [1, 2, 3, 4, 5, 6]



// Your Own Loop

// Write a higher order function loop that provides something like a for loop stmt
// Takes a value, test function, update function and a body function
// Each iteration first runs the test function on the current loop value and stops if it returns false
// Then it calls the body function giving it the current value
// Finally it calls the update function to create a new value and start from the beginning
// When defining the function you can use a regular loop to do the actual looping

// My Answer

const loop = (val, testFn, updateFn, bodyFn) => {
    if (!testFn(val)) return false;

    bodyFn(val);

    let newVal = updateFn(val);
    loop(newVal, testFn, updateFn, bodyFn);
};

console.log('Loop: ', loop(3, n => n > 0, n => n - 1, console.log));
// → 3
// → 2
// → 1

// Book Answer

// function loop(start, test, update, body) {
//     for (let value = start; test(value); value = update(value)) {
//         body(value);
//     }
// }

// loop(3, n => n > 0, n => n - 1, console.log);
// // → 3
// // → 2
// // → 1



// Everything

// Implement every as a function that takes an array and a predicate function as parameters.
// Write 2 versions, one using a loop and one using the some method.

// My Answer
const every = (array, test) => {
    for (let i = 0; i < array.length; i++) {
        if (!test(array[i])) return false;
    }
    return true;
};

const everySome = (array, test) => {
    return !array.some(el => !test(el));
}

console.log('First Every: ', every([1, 3, 5], n => n < 10));
// // → true
console.log('Second Every: ', every([2, 4, 16], n => n < 10));
// // // → false
console.log('Third Every: ', every([], n => n < 10));
// //   // → true

console.log('First EverySome: ', everySome([1, 3, 5], n => n < 10));
// → true
console.log('Second EverySome: ', everySome([2, 4, 16], n => n < 10));
// → false
console.log('Third EverySome: ', everySome([], n => n < 10));
// → true

// Book Answer

// function every(array, predicate) {
//     for (let element of array) {
//       if (!predicate(element)) return false;
//     }
//     return true;
//   }
  
//   function every2(array, predicate) {
//     return !array.some(element => !predicate(element));
//   }
  
//   console.log(every([1, 3, 5], n => n < 10));
//   // → true
//   console.log(every([2, 4, 16], n => n < 10));
//   // → false
//   console.log(every([], n => n < 10));
//   // → true



