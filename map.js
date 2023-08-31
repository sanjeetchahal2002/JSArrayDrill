const items = [1, 2, 3, 4, 5, 5]; 


function map(elements, cb){
    let newArr = []
    for(let index in elements){
        newArr.push(cb(elements[index]))
    }
    return newArr
}

function iteratee(ele){
    return ele*ele
}
const newArr = map(items,iteratee)

console.log(newArr)