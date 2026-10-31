const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code herelet result = [];
  let current = [];
  let sum = 0;

  for (let num of arr) {
    if (sum + num > Number(n)) {
      result.push(current);
      current = [];
      sum = 0;
    }

    current.push(num);
    sum += num;
  }

  if (current.length > 0) {
    result.push(current);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
