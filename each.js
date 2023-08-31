const items = [1, 2, 3, 4, 5, 5];

function forEachElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

function  getEle(element, index){
    console.log(`Element at index ${index}: ${element}`);
}    

forEachElement(items,getEle);