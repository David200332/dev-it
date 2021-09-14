const toPromise = (func, arrArg) => {
  return new Promise(resolve => {
    resolve(func(arrArg[0], arrArg[1]))
  })
}

function asyncPlus(x, y, cb){
  setTimeout(() => cb(x + y), 1000)
}
toPromise(asyncPlus, [1,2]).then(console.log)