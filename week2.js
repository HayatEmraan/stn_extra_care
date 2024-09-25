// 1. Task: Array Reduction
/* Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array. */

const numOfArr = [1, 2, 3, 4, 5, 6, 9, 11, 13];

function sumOfEvenNum(numArr) {
  const reduceFunc = (total, current) => {
    if (current % 2 === 0) {
      total += current;
    }
    return total;
  };
  console.log(numArr.reduce(reduceFunc, 0));
}

sumOfEvenNum(numOfArr);

// 2. Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.

function checkLeapYear(year) {
  if (year % 4 === 0) {
    console.log(year + " " + "is leap year");
  } else {
    console.log(year + " " + "isn't leap year");
  }
}

checkLeapYear(2052);

// 3. Task: Count Vowels:
// Write a function that counts the number of vowels in a given string.

const vowelStr = "abcdefguijkop";

function numOfVowel(str) {
  console.log(str.match(/[aeiou]/gi)?.length || 0);
}

numOfVowel(vowelStr);

// 4. Task: Unique Values
/* Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result. */

const dupNumArr = [1, 1, 2, 3, 3, 5, 2, 9, 8, 7];
function filterDupNum(numArr) {
  console.log([...new Set(numArr)]);
}

filterDupNum(dupNumArr);

// 5. Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

function maxNumValue(numArr) {
  console.log(Math.max.apply(null, numArr));
}

maxNumValue(numOfArr);
