// .map
    //https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

    //const officersIds = officers.map(officer => officer.id);
        //with .map we dont need to push into a new array

    //let mapToNegativize = sourceArray.map(sourceArray => sourceArray * -1)

        //could also use for loop and push into new array, could also use forEach


function mapToNegativize(sourceArray) {
    return sourceArray.map(num => num * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(num => num)
}

function mapToDouble(sourceArray) {
    return sourceArray.map(num => num * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(num => num * num)
}

// .reduce
    // https://www.freecodecamp.org/news/reduce-f47a7da511a9/

    //https://www.w3schools.com/jsref/jsref_reduce.asp
    // total -	Required. The initialValue, or the previously returned value of the function
    // currentValue - Required. The value of the current element
    // currentIndex - Optional. The array index of the current element
    // arr - Optional. The array object the current element belongs to

function reduceToTotal(sourceArray, startingPoint = 0) {

    return sourceArray.reduce((total, currentValue, currentIndex, arr) => {
        return total + currentValue
    }, startingPoint)
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce((total, currentValue) => {
        if (!currentValue) {
            return false 
        } else {
            return true
        }
    })
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce((total, currentValue) => {
        if (currentValue) {
            return true 
        } else {
            return false
        }
    })
}