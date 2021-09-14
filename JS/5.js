var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];

const arrayToObject = function(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i][0];
    let value = arr[i][1];
    
    if (Array.isArray(value)) {
      obj[key] = arrayToObject(value);
    } else {
      obj[key] = value;
    }
  }
  return obj;
};

const res = arrayToObject(arr);

console.log(res);