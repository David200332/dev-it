function objectToArray(user) {
  let array = []
  for (let key in user) {
    if (typeof(user[key]) === "object" && user[key] !== null) {
      array = [...array, [key, ...objectToArray(user[key])]]
    } else{
      array = [...array, [key, user[key]]]
    }
  }
  return array
}



console.log(objectToArray({
  name: 'developer',
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5,
    test1: {
      test2: 'test2',
      teta: 'etst'
    }
  },
  test : 'test'
}))