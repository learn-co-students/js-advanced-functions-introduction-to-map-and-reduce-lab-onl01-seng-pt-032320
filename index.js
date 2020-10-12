function mapToNegativize(sourceArray) {
    return sourceArray.map(num => num * -1)
};

function mapToNoChange(sourceArray) {
    return sourceArray.map(num => num)
};

function mapToDouble(sourceArray) {
    return sourceArray.map(num => num * 2)
};

function mapToSquare(sourceArray) {
    return sourceArray.map(num => num * num)
};

function reduceToTotal(sourceArray, startingPoint = 0) {
    sourceArray.forEach(num => startingPoint += num)
    return startingPoint
};

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i <sourceArray.length; i++)
        if (sourceArray[i] === false) {
        return false
        }
        return true
};

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++)
        if (sourceArray[i] === true) {
            return true
        }
        return false
};
