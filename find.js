const items = [1, 2, 3, 4, 5, 5]; 

function find(elements,cb){
    for(let index in elements){
        if(cb(elements[index])){
           return elements[index]
        }
    }
    return undefined
}

function getNumber(ele) {
    if(ele === 5){
        return true
    }else{
        return false
    }
}

const element = find(items,getNumber)

console.log(element)


