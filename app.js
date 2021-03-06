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
