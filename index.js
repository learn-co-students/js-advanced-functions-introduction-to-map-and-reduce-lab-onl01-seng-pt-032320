function mapToNegativize(sourceArray){
    let newArr = []
    for (let num of sourceArray){
        newArr.push(num * -1)
    }
    return newArr
}

function mapToNoChange(sourceArray){
    let newArr = []
    for (let num of sourceArray){
        newArr.push(num)
    }
    return newArr
}
function mapToDouble(sourceArray){
    let newArr = []
    for (let num of sourceArray){
        newArr.push(num * 2)
    }
    return newArr
}

function mapToSquare(sourceArray){
    let newArr = []
    for (let num of sourceArray){
        newArr.push(num * num)
    }
    return newArr

}

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint
    for (let num of sourceArray){
        total = total + num
    }
    return total
}

function reduceToAllTrue(sourceArray){
    let solution = true
    for (let x of sourceArray){
        if (x === false){
            solution = false 
        }
    }
    return solution
}

function reduceToAnyTrue(sourceArray){
    let solution = false
    for (let x of sourceArray){
        if (x === true){
            solution = true 
        }
    }
    return solution
}