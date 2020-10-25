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

function reduceToTotal(sourceArray, startingPoint=0){
    let total = 0;
    for(let x=0; x<sourceArray.length; x++)
    {
        total += sourceArray[x]
    }    
    total+= startingPoint;
    return total;
}
function reduceToAllTrue(sourceArray){
    for(let x=0; x<sourceArray.length; x++)
    {
        if(sourceArray[x] === false){ return false }
    }
    return true;
}
function reduceToAnyTrue(sourceArray){
    for(let x=0; x<sourceArray.length; x++)
    {
        if(sourceArray[x] === true){ return true }
    }
    return false;
}