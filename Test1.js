
//REMOVE DUPLICATES FROM AN ARRAY

function removeDuplicates(){
    let array = ['football','d', 'football', 'd', 'rugby', 'cars', 'ootball', 12, 'd', 12, 'football'];
    let newArray = [];

    // for(let i = 0; i < array.length; i++){
    //     newArray += array[i];

    //     if(newArray[i] === array[i]){
    //         newArray.splice(i, 1);
    //        // console.log('There is a duplicate');
    //     }
    // }

    for(let x of array){
        if(newArray.indexOf(x) === -1){
            newArray.push(x);
        }
    }
    console.log(newArray);
}

removeDuplicates();