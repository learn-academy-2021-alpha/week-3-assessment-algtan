// Question 1
const fibonacci = (number) => {
    // Check if the number is less than or equal to 2
    if (number <= 2) {
        // If it is, return a string to the user asking them to return a number greater than 2
        return 'Please enter a number greater than 2'
    }

    // Create a variable that stores the first two numbers of the Fibonacci sequence
    let fibSequence = [1, 1];
    
    // Create a variable to calculate the Fibonacci number
    let fibNumber = 0;

    // Use a for loop to add onto the Fibonacci array
    for (let i = 2; i < number; i++) {
        // Calculate the Fibonacci number at the latest index
        fibNumber = fibSequence[i-2] + fibSequence[i-1];
        // Push the Fibonacci number to the sequence array
        fibSequence.push(fibNumber);
    }

    // Return the final array
    return fibSequence;
}

console.log( fibonacci(6) );
console.log( fibonacci(10) );


// Question 2
const onlyOddSorted = (array) => {
    // Filter for elements that are odd numbers
    let oddNums = array.filter(value => {
        // Check that the value is a number, and that it is odd
        return typeof value === 'number' && value % 2 !== 0;
    })
    // Sort from least to greatest
    return oddNums.sort( (a, b) => a > b ? 1 : -1)
}

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];

console.log( onlyOddSorted(fullArr1) );
console.log( onlyOddSorted(fullArr2) );


// Question 3
const middleLetter = (string) => {
    // Check the number of characters in the string using length
    let strLength = string.length;
    // Calculate the middle index of the string
    let strMiddleIndex = Math.floor( (strLength - 1)/ 2 );
    // console.log(strMiddleIndex);

    // If the number has an odd length, return the middle letter
    if (strLength % 2 > 0) {
        return string.substr(strMiddleIndex, 1);
    // Else if the number has an even length, return the two middle letters
    } else {
        return string.substr(strMiddleIndex, 2);
    }
}

console.log( middleLetter('alpha') );
console.log( middleLetter('rhinoceros') );


// Question 4
// Create a function that takes in 1 argument that is an array
const accumulatingSum = (array) => {
    // Create a new empty array that will hold the accumulated sums
    let accumulatingArr = [];

    // Create an accumulator variable to hold the previous accumulated sum
    let accumulator = 0;

    // Iterate through the input array to calculate the new value at each index for the new array
    array.forEach(value => {
        // Add the value of the element to the accumulator
        accumulator += value;
        // Push the accumulator value to the array of accumulated sums
        accumulatingArr.push(accumulator);
    })
    // Return an array of the same length with the accumulated sums at each index
    return accumulatingArr;
}

const numbersToAdd1 = [2, 4, 45, 9];
const numbersToAdd2 = [0, 7, -8, 12]
const numbersToAdd3 = [];

console.log( accumulatingSum(numbersToAdd1) );
console.log( accumulatingSum(numbersToAdd2) );
console.log( accumulatingSum(numbersToAdd3) );