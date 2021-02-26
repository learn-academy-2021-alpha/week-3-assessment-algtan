// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Call the function fibonacci
describe("fibonacci", () => {
    // Input is 6, output is an array of the Fibonacci sequence up to the 6th number in the sequence
    it("For an input of 6, output should be an array up to the 6th number of the Fibonacci sequence", () => {
        expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
    })

    // Input is 10, output is an array of the Fibonacci sequence up to the 10th number in the sequence
    it("For an input of 10, output should be an array up to the 10th number in the Fibonacci sequence", () => {
        expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    })
})


// b) Create the function that makes the test pass.

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



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe("onlyOddSorted", () => {
    it("returns an array of odd numbers, sorted from least to greatest (fullArr1)", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
        const fullArr1Expected = [-9, 7, 9, 199];
        expect(onlyOddSorted(fullArr1)).toEqual(fullArr1Expected);
    })
    it("returns an array of odd numbers, sorted from least to greatest (fullArr2)", () => {
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
        const fullArr2Expected = [-823, 7, 23];
        expect(onlyOddSorted(fullArr2)).toEqual(fullArr2Expected);
    })
})


// b) Create the function that makes the test pass.

// Create a function that takes in 1 argument that is an array of mixed data
const onlyOddSorted = (array) => {
    // Filter for elements that are odd numbers
    let oddNums = array.filter(value => {
        // Check that the value is a number, and that it is odd
        return typeof value === 'number' && value % 2 !== 0;
    })
    // Sort from least to greatest
    return oddNums.sort( (a, b) => a > b ? 1 : -1)
}



// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// a) Create a test with expect statements for each of the variables provided.

var middleLetters1 = "alpha"
// Expected output: “p”

var middleLetters2 = "rhinoceros"
// Expected output: “oc”

describe("middleLetter", () => {
    it("returns 'p' for an input of 'alpha'", () => {
        const middleLetters1 = "alpha";
        expect(middleLetter(middleLetters1)).toEqual('p');
    })

    it("returns 'oc' for an input of 'rhinoceros'", () => {
        const middleLetters2 = "rhinoceros";
        expect(middleLetter(middleLetters2)).toEqual('oc');
    })
})


// b) Create the function that makes the test pass.

// Create a function that takes in 1 argument that is a string
const middleLetter = (string) => {
    // Check the number of characters in the string using length
    let strLength = string.length;
    // Calculate the middle index of the string
    // Need to take into account that length is the last index + 1
    let strMiddleIndex = Math.floor( (strLength - 1)/ 2 );

    // If the number has an odd length, return the middle letter
    if (strLength % 2 > 0) {
        return string.substr(strMiddleIndex, 1);
    // Else if the number has an even length, return the two middle letters
    } else {
        return string.substr(strMiddleIndex, 2);
    }
}



// --------------------4) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe("accumulatingSum", () => {
    it("returns an array of the accumulated sum at each index (numberstoAdd1)", () => {
        const numbersToAdd1 = [2, 4, 45, 9];
        const numbersToAdd1Expected = [2, 6, 51, 60];
        expect(accumulatingSum(numbersToAdd1)).toEqual(numbersToAdd1Expected);
    })

    it("returns an array of the accumulated sum at each index (numberstoAdd2)", () => {
        const numbersToAdd2 = [0, 7, -8, 12]
        const numbersToAdd2Expected = [0, 7, -1, 11]
        expect(accumulatingSum(numbersToAdd2)).toEqual(numbersToAdd2Expected);
    })

    it("returns an empty array for an input of an empty array", () => {
        const numbersToAdd3 = [];
        const numbersToAdd3Expected = [];
        expect(accumulatingSum(numbersToAdd3)).toEqual(numbersToAdd3Expected);
    })
})


// b) Create the function that makes the test pass.

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