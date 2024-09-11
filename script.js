class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

}
class Tree {
  constructor(array) {
    this.root = null;
    this.array = array;

  }
}
function buildTree(array) {
const sortedArray = array.sort((a, b) => a - b);
// remove duplicates from sorted array
const uniqueArray = sortedArray.filter((value, index,self) => 
self.indexOf(value) === index);
return uniqueArray;
}







let testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
console.log(buildTree(testArray));
