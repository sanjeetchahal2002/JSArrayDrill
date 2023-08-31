const items = [1, 2, 3, 4, 5, 5]; 

function filter(elements,cb){
    let newArr = []
    for(let index in elements){
        if(cb(elements[index])){
            newArr.push(elements[index])
        }
    }
    return newArr
}

function getNumber(ele) {
    if(ele > 3){
        return true
    }else {
        return false
    }
}

const newArr = filter(items,getNumber)

console.log(newArr)


