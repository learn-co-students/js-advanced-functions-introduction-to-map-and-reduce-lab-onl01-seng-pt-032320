function mapToNegativize(sourceArray) {
    let newArray = []
    sourceArray.forEach(function(element) {
        element *= -1 
        newArray.push(element)
    })
    return newArray 
}

function mapToNoChange(sourceArray) {
    let newArray = [] 
    sourceArray.forEach(function(element) {
        newArray.push(element)
    })
    return newArray 
}

function mapToDouble(sourceArray) {
    let newArray = []
    sourceArray.forEach(function(element) {
        element *= 2 
        newArray.push(element)
    })
    return newArray 
}

function mapToSquare(sourceArray) {
    let newArray = []
    sourceArray.forEach(function(element) {
        let newElement = Math.pow(element, 2) 
        newArray.push(newElement)
    })
    return newArray 
}


function reduceToTotal(sourceArray, startingPoint = 0) {
    sourceArray.forEach(element => startingPoint += element)
    return startingPoint
 }

function reduceToAllTrue(sourceArray) {
    let result = sourceArray.every( element  => Boolean(element) == true );
    return result
}


function reduceToAnyTrue(sourceArray) {
    let result = sourceArray.some( element  => Boolean(element) == true );
    return result
}