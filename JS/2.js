const chunkArray = (array, size) => {
  let subarray = [];
  for (let i = 0; i <Math.ceil(array.length/size); i++){
    subarray[i] = array.slice((i*size), (i*size) + size);
  }
  return subarray
}

let result = chunkArray([1,2,3,4,5,6,7,8], 3);
console.log(result)