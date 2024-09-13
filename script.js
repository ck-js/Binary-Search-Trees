class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

}
class Tree {
  constructor(array) {
    const sortedArray = this.sortArrayAscending(array)
    this.root = this.buildTree(sortedArray, 0, sortedArray.length - 1)

  }
  buildTree(array, start,end) {
    // base case
    if (start > end) return null;
    
    // get the mid value and set it as the root
    // const mid = Math.floor(array.length / 2);
    let mid = parseInt((start + end) / 2);
    // console.log('index: ' + mid);
    
    const node = new Node(array[mid])
    // console.log(node);
    node.left = this.buildTree(array, start, mid - 1)
    node.right = this.buildTree(array, mid + 1, end)
      

    return node
    }
    sortArrayAscending(array) {
      const sortedArray = array.sort((a, b) => a - b);
    // remove duplicates from sorted array
    const uniqueArray = sortedArray.filter((value, index,self) => 
    self.indexOf(value) === index);
    return uniqueArray
    }
}
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};





const array1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const array2 = [1,2,3,4]

const tree1 = new Tree(array1)
console.log(tree1.sortArrayAscending(array1))
const tree2 = new Tree(array2)
// console.log(tree2.root)

prettyPrint(tree1.root)
// prettyPrint(tree2.root)
