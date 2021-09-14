let x = 'test task'

String.prototype.toTitleCase = function () {
  return this.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
}

console.log(x.toTitleCase())