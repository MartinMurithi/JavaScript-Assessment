//Reverse a string

function revString(str){
    
    let strArr = str.split(' ').reverse().join(' ');

    console.log(strArr);
}

revString('news headlines')