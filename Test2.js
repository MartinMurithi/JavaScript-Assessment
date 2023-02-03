//Find a specific element

function findElement(...arr){

    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] === 6){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }

    let value = 9;

    if (arr.includes(value)) {
        return true;
    }else{
        return false;
    }
}

console.log(findElement(7, 3, 5, 33, 5));