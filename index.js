// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(element => element * -1)
   
}

function mapToNoChange(sourceArray){
    return sourceArray.map(element => element)
}

function mapToDouble(sourceArray){
    return sourceArray.map(element => element * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map( element => element**2)
}

function reduceToTotal(sourceArray, startingPoint){
    return (sourceArray.reduce((total,element) => total+= element)) + startingPoint
}