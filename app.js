// Looping a triangle

// Make 7 calls to console.log to output a triangle of hashes

// My Answer
// loop 7 times
// in each iteration loop over the iteration amount and add a '#' to a stored string
// print the string

for (i = 0; i < 7; i++) {
    let hashString = '';
    for (h = 0; h <= i; h++) {
        hashString += '#';
    }
    console.log(hashString);
}

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


// Book Answer
// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
// }