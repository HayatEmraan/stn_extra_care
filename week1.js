// 1. Task: Array Filtering and Mapping
/* Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result. */

const personArrOfObj = [
  {
    name: "John",
    age: 30,
    gender: "male",
  },
  {
    name: "Jane",
    age: 25,
    gender: "female",
  },
  {
    name: "Tara",
    age: 19,
    gender: "female",
  },
  {
    name: "Jim",
    age: 35,
    gender: "male",
  },
];

const printMaleNames = (maleObj) => {
  let names = [];
  let i = 0;
  while (i < maleObj.length) {
    names.push(maleObj[i].name);
    i++;
  }
  console.log(names);
};

const filterOutFemales = (arrObj, callBack) => {
  let males = [];
  for (let i = 0; i < arrObj.length; i++) {
    if (arrObj[i].gender === "female") {
      continue;
    } else {
      males.push(arrObj[i]);
    }
  }
  callBack(males);
};

filterOutFemales(personArrOfObj, printMaleNames);

// 2.Task: Object Manipulation
/* Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result. */

const bookArrOfObj = [
  {
    title: "Bangla & English",
    author: "A.K.M Fazal",
    year: 2015,
  },
  {
    title: "Global Economy",
    author: "A.J Kamal",
    year: 2019,
  },
  {
    title: "Math",
    author: "D.N Jane",
    year: 2013,
  },
];

function filterBookTitle(books) {
  const reduceFunc = (accumulate, current) => [...accumulate, current.title];
  console.log(books.reduce(reduceFunc, []));
}

filterBookTitle(bookArrOfObj);

// 3. Task: Function Composition
/* Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5. */

async function squareNum(num) {
  return num * num;
}
async function doubleNum(num) {
  return num + num;
}
async function addNum(num) {
  return num + 5;
}

(async (num) => {
  const square = await squareNum(num);
  const double = await doubleNum(square);
  console.log(await addNum(double));
})(10);

// 4. Task: Sorting Objects
/* Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array. */

const carsObj = [
  {
    make: "BMW",
    model: "BM1",
    year: 2013,
  },
  {
    make: "Tesla",
    model: "S1",
    year: 2018,
  },
  {
    make: "Honda",
    model: "SUV V2",
    year: 2018,
  },
];

const carSortingByYear = (cars) => {
  const sort = (a, b) => b - a;
  console.log(cars.sort(sort));
};

carSortingByYear(carsObj);

// 5. Task: Find and Modify
/* Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array. */

const findAndModify = function (people, name) {
  const checkName = (person) => {
    return person.name === name;
  };
  const indexByName = people.findIndex(checkName);
  if (indexByName >= 0) {
    people[indexByName].age += 5;
    console.log(people[indexByName]);
  }
};

findAndModify(personArrOfObj, "John");
