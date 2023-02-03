//Remove unnecesary objects from an array

function removeUnnecessary(...values){
  
    return values.filter(val=>{
      return val;
    });
    
}

console.log(removeUnnecessary("marto", ' ',null ,undefined, 0 ,23, "Martin "));
