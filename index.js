function mapToNegativize(sourceArray) {
  let r = []
  for (let i=0; i<sourceArray.length; i++){
    r.push(-1*sourceArray[i])
  }
  return r
}

function mapToNoChange(sourceArray) {
  let r = []
  for(let i=0; i<sourceArray.length; i++){
    r.push(sourceArray[i])
  }
return r

}

function mapToDouble(sourceArray){
  let r =[]
  for(let i = 0; i<sourceArray.length;i++){
    r.push(2*sourceArray[i])
  }
  return r
}


function mapToSquare(sourceArray){
  let r =[]
  for(let i = 0; i<sourceArray.length;i++){
    r.push(sourceArray[i]**2)
  }
  return r
}


function reduceToTotal(src, startingPoint=0) {
  let total = startingPoint
  for (let i=0; i<src.length; i++){
    total = total + src[i]
  }
  return total
}

function reduceToAllTrue(src){
  for (let i=0; i<src.length; i++){
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src){
  for(let i=0; i<src.length;i++){
    if(src[i]) return true
  }
  return false
}
