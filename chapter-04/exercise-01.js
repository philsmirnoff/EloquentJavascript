/*
  Chapter 04 - Data Structures: Objects and Arrays
  Exercise 01 - The sum of a range
*/

const range = (start, end, step = 1) => {
  const result = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  } else if (start > end) {
    return result;
  }

  return result;
};

const sum = (numbers) => {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total;
};

console.log(range(1, 10)); // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1)); // → [5, 4, 3, 2]
console.log(sum(range(1, 10))); // → 55
