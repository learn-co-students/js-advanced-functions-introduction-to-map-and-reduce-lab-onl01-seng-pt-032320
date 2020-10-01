// Your code here
const mapToNegativize = (array) => {
    return array.map(x => x * -1);
}

const mapToNoChange = (array) => {
    return array.map(x => x)
}

const mapToDouble = (array) => {
    return array.map(x => x*2)
}


const mapToSquare = (array) => {
    return array.map(x => x**2 )
}


const reduceToTotal = (array,x = 0) => {
    let total = array.reduce((total, num) => {
            return total += num
        },x)
    

    return total

}

const reduceToAllTrue = (array) =>{
   
    for (let i = 0; i < array.length; i++){
      if (array[i] === false){
         return false 
      } 
    }

    return true

}

const reduceToAnyTrue = (array) =>{
    for (let i = 0; i < array.length; i++){
        if(array[i] === true){
            return true
        }
    }

    return false


}