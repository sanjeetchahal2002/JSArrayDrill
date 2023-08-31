const nestedArray = [1, [2], [[3]], [[[4]]]]; 
function flatten(elements,newArr) {
    for(let i = 0;i < elements.length;i++){
        if(Array.isArray(elements[i])){
            flatten(elements[i],newArr)
        }else{
            newArr.push(elements[i])
        }
    }
}

let newArr =[]
flatten(nestedArray,newArr)
console.log(newArr)