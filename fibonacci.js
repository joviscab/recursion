// Fibonacci function using recursion

function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  function fibHelper(arr, count) {
    if (count >= n) return arr;

    const nextFib = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nextFib);

    return fibHelper(arr, count + 1);
  }
  return fibHelper([0, 1], 2);
}

// Fibonacci function using iteration

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let fibArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }
  return fibArr;
}
