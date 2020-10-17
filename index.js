// MAP 1
function mapToNegativize(array) { const newArray = []; for(let i = 0; i < array.length; i++){newArray.push(-array[i])}; return newArray; }
// MAP 2
function mapToNoChange(array) { return array; }
// MAP 3
function mapToDouble(array) { const newArray = []; for(let i = 0; i < array.length; i++){newArray.push(array[i] * 2)}; return newArray; }
// MAP 4
function mapToSquare(array) { const newArray = []; for(let i = 0; i < array.length; i++){newArray.push(array[i] ** 2)}; return newArray; }

// REDUCE 1
function reduceToTotal(array, init) { let startingPoint = init || 0; for (let i = 0; i < array.length; i++){startingPoint += array[i]}; return startingPoint; }
// REDUCE 2
function reduceToAllTrue(array) { let isTrue = true; for (let i = 0; i < array.length; i++){if (array[i]) {isTrue = true} else {isTrue = false}}; return isTrue; }
// REDUCE 3
function reduceToAnyTrue(array) { let isTrue = false; for (let i = 0; i < array.length; i++){ if (array[i]) {isTrue = true}}; return isTrue; }