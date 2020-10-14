function mapToNegativize(array) {
    const newArray = array.map( x => x * -1)
    return newArray
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    const newArray = array.map( x => x * 2)
    return newArray
}

function mapToSquare(array) {
    const newArray = array.map( x => x * x)
    return newArray
}

function reduceToTotal(array, start) {
    if (!start) {
        start = 0
    }
    return array.reduce((accumulator, currentValue, currentIndex, a) => {
        return accumulator + currentValue
    }, start)
}

function reduceToAllTrue(array) {
    return array.reduce((accumulator, currentValue) => {
        if (!currentValue) {
            return false
        } else {
            return true
        }
    })
}

function reduceToAnyTrue(array) {
    return array.reduce((accumulator, currentValue) => {
        if (currentValue) {
            return true
        } else {
            return false
        }
    })
}