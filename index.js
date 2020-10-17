// Your code here

function mapToNegativize(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(-1 * src[i]) // Unique work
    }
    return r
  }
   
  function mapToNoChange(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i]) // Unique work
    }
    return r
  }
   
  function mapToDouble(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(2 * src[i]) // Unique work
    }
    return r
  }
   
  function mapToSquare(src) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(src[i] * src[i]) // Unique work
    }
    return r
  }

  function reduceToTotal(sourceArray, startingPoint) {
      let r;
    if (startingPoint) {
       r = startingPoint
    }
    else {
        r = 0
    }

    for (let i = 0; i < sourceArray.length; i++ ) {
      r = r + sourceArray[i]
    }
    return r
  }

  function reduceToAllTrue(sourceArray) {
    let value = true 
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i] === 0 || sourceArray[i] === false) {
            value = false
            break
        }
      }
      return value
  }

  function reduceToAnyTrue(sourceArray) {
    let value = false 
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) {
            value = true
            break
        }
      }
      return value
  }
  