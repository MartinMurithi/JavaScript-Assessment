//Remove unnecesary objects from an array

function removeUnnecessary(...values){
    
    let newValues = [];

    for (let i = 0; i< values.length; i++) {
        if(values[i] === " " || values[i] === null || values[i] === false || values[i] === 0 || values[i] === undefined){
            values.splice(i, 2);
        }
      newValues += values[i];
       
    }
 console.log(newValues);
    
}

removeUnnecessary(" ", null, 23, "Martin ")