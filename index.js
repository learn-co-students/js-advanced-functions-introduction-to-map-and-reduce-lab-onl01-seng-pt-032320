function mapToNegativize(arr) {
  const result = [];
  arr.forEach(n => result.push(n * -1));
  return result;
}

function mapToNoChange(arr) {
  return arr.slice();
}

function mapToDouble(arr) {
  const result = [];
  arr.forEach(n => result.push(n * 2));
  return result;
}

function mapToSquare(arr) {
  const result = [];
  arr.forEach(n => result.push(n * n));
  return result;
}

function reduceToTotal(arr, start=0) {
  let memo = start;
  arr.forEach(x => memo = memo + x);
  return memo;
}

function reduceToAllTrue(arr) {
  for (const x of arr) {
    if (!x) return false;
  }
  return true;
}

function reduceToAnyTrue(arr) {
  for (const x of arr) {
    if (x) return true;
  }
  return false;
}







