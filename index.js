// Your code here
const mapToNegativize = function(array){
    let negativeArray = []
    array.forEach(num => {
        let negativeNum = num * -1
        negativeArray.push(negativeNum);
    });
    return negativeArray;
    
}

const mapToNoChange = function(array){
      return array
}

const mapToDouble = function(array){
    // let newArray = []
      let newArray = []
    array.forEach(num => {
        let mulNum = num * 2
        newArray.push(mulNum);
    });
    return newArray;
    
}


const mapToSquare = function(array){
      let newArray = []
    array.forEach(num => {
        let squarNum = num ** 2
        newArray.push(squarNum);
    });
    return newArray;
    
}



const reduceToTotal = function(array, start=0) {
    let total = start
    for (let i = 0; i < array.length; i++ ) {
      total = total + array[i]
    }
    return total
}


const reduceToAllTrue = function(array) {
    for (let i = 0; i < array.length; i++ ) {
          if (!array[i]) {
            return false;
        }
      };
      return true;
};




const reduceToAnyTrue = function(array) {
    for (let i = 0; i < array.length; i++ ) {
        if (array[i]) {
            return true;
        };
      };
      return false;
};