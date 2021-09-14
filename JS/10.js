let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";

String.prototype.removeDuplicate = function (){
  return new Set(this.split(' '))
}

console.log(x.removeDuplicate() )