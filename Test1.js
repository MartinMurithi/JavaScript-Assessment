
//REMOVE DUPLICATES FROM AN ARRAY

function removeDuplicates(){
    let array = ['football', 'd', 'rugby', 'cars', 'football', 12, 'd', 12];
   // let newArray = [];

    for(let i = 0; i < array.length; i++){
        newArray += array[i];

        if(newArray[i] === array[i]){
            newArray.splice(i, 1);
           // console.log('There is a duplicate');
        }
    }
    console.log(newArray);
}

removeDuplicates();