const firstUnique = (arr) => {
  return arr.filter((el, _, arr) => arr.indexOf(el) === arr.lastIndexOf(el))[0]
}

console.log(firstUnique([1,2,3,2,1,3,4,5,5]))