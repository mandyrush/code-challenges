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
    hashString = '';
}

// Book Answer
for (let line = "#"; line.length < 8; line += "#")
    console.log(line);



