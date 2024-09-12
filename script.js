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
function sortArrayAscending(array) {
  const sortedArray = array.sort((a, b) => a - b);
// remove duplicates from sorted array
const uniqueArray = sortedArray.filter((value, index,self) => 
self.indexOf(value) === index);
return uniqueArray
} 

function buildTree(array, start,end) {
// base case
if (start > end) return null;

// get the mid value and set it as the root
// const mid = Math.floor(array.length / 2);
let mid = parseInt((start + end) / 2);
console.log('index: ' + mid);

const node = new Node(array[mid])
// console.log(node);
// node.left = buildTree(array, 0, mid - 1)
node.right = buildTree(array, mid + 1, end)

// // recursively construct the left subtree 
// node.left = buildTree(uniqueArray, startIndex, mid - 1)



return node
}







let testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
let sortedArray = sortArrayAscending(testArray)
const n = sortedArray.length;
// console.log(buildTree(sortedArray, 0, n - 1));

const test2 = [1,2,3,4]
const n2 = test2.length;
console.log(buildTree(test2, 0, n2 - 1));




//  and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

