const items = [1, 2, 3, 4, 5, 5]; 

function reduce(elements, cb, startingValue) {
    let stVal;
    if(startingValue != undefined){
        stVal = startingValue
    }else{
        stVal= elements[0]
    }
    for(let index in elements){
        stVal = cb(stVal,elements[index])
    }
    return stVal
}

const reduceVal = reduce(items,(acc,cv) => (acc+cv),0)

console.log(reduceVal)

