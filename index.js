// Your code here
function mapToNegativize(src) {
    let a = []
    for (let b = 0; b < src.length; b++) {
        a.push(-1 * src[b])
    }
    return a
}

function mapToNoChange(src) {
    let a = []
    for (let b = 0; b < src.length; b++) {
        a.push(src[b])
    }
    return a
}


function mapToDouble(src) {
    let a = []
    for (let b = 0; b < src.length; b++) {
        a.push(2 * src[b])
    }
    return a
}


function mapToSquare(src) {
    let a = []
    for (let b = 0; b < src.length; b++) {
        a.push(src[b] * src[b])
    }
    return a
}

function reduceToTotal(src, startingPoint=0) {
    let a = startingPoint 
    for (let b = 0; b < src.length; b++ ) {
        a =  a + src[b]
    }
    return a
}

function reduceToAllTrue(src) {
    for (let b = 0; b < src.length; b++) {
      if(!src[b]) return false
    }
    return true
}

function reduceToAnyTrue(src) {
    for (let b = 0; b < src.length; b++) {
        if(src[b]) return true
    }
      return false
}