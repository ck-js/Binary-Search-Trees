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
    insert(data) {
// if the bst is empty
      if (this.root === null) {
        this.root = new Node(data);
        return;
      }
      // if the bst is not empty
const insertRecursively = (node,data) => {
  // console.log(
  //   `Calling insertRecursively with node: 
  //   ${node ? node.data : 'null'} and data: 
  //   ${data}`);
  // console.log(node ? true : false);
  // console.log(`${node ? node.data : 'null'}`);
  if (node === null) return new Node(data)
    if (data < node.data) {
      node.left = insertRecursively(node.left, data)

    } else if (data > node.data) {
      node.right = insertRecursively(node.right, data)
      
    }
    // console.log(`${node ? node.data : 'null'}`);
    return node
}
this.root = insertRecursively(this.root, data)

      // let current = this.root;
      // while (true) {
      //   if (data < current.data) {
      //     if (current.left === null) {
    this.deleteItem  //       current.left = new Node(data);
      //       return;
      //     }
      //     current = current.left;
      //   } else {
      //     if (current.right === null) {
      //       current.right = new Node(data);
      //       return;
      //     }
      //     current = current.right;
      //   }
      // }    
    }
    deleteItem(data) {
      // if the bst is empty
      if (!this.root) return null;
      // if the bst is not empty
const deleteRecursively = (node, data) => {
// base case
if (node.data === data && !node.left &&
  !node.right) {
  return null
}
// when delete target node has 1 child
 if (node.data === data &&
  (node.left === null) !== (node.right === null)) {
  return node.left || node.right;
  }
  // when delete target node has 2 children
  if (node.data === data && node.left && node.right) {
// find and store the inorder successor which is min value in the right subtree
let rightSubtree = node.right;
// console.log(rightSubtree.data);
while (rightSubtree.left) {
  rightSubtree = rightSubtree.left;
  
}
// console.log(rightSubtree.data);

node.data = rightSubtree.data;
node.right = deleteRecursively(node.right, rightSubtree.data);

return node;
  }

  if (data < node.data) {
    node.left = deleteRecursively(node.left, data)

  } else if (data > node.data) {
node.right = deleteRecursively(node.right, data)
  }
  // console.log(node.data);
  return node
}
this.root = deleteRecursively(this.root, data)

    }
    find(data) {
      if (!this.root) return null;
let current = this.root;
while (current) {
  if (data === current.data) {
    return current
  } else if (data < current.data) {
    current = current.left;
    } else if (data > current.data) {
      current = current.right;
    }
  }
  return null
    }
    levelOrder(callback) {
      if (typeof callback !== 'function') {
        throw new Error('callback must be a function')
        }
      if (!this.root) return null;
      // let results = [];
      let queue = [];
      
const levelOrderRecursively = (node) => {
if (!node) {
  console.log('End of bst');
  return
}
callback(node)
// results.push(node.data)
if (node.left) {
  queue.push(node.left)
} 
if (node.right) {
  queue.push(node.right)
}

let nextNode = queue.shift();
levelOrderRecursively(nextNode)

}
this.root = levelOrderRecursively(this.root)
    }
inOrder(callback) {
  if (typeof callback !== 'function') {
    throw new Error('callback must be a function')
    }
  if (!this.root) return null;
const inOrderRecursively = (node) => {
if (!node) {
  return 
}
// console.log('left ' + node.left);

inOrderRecursively(node.left)
callback(node)
inOrderRecursively(node.right)

}    
this.root = inOrderRecursively(this.root)

}
preOrder(callback) {
  if (typeof callback !== 'function') {
    throw new Error('callback must be a function')
    }
  if (!this.root) return null;
const preOrderRecursively = (node) => {
if (!node) {
  return 
}
// console.log('left ' + node.left);

callback(node)
preOrderRecursively(node.left)

preOrderRecursively(node.right)

}    
this.root = preOrderRecursively(this.root)

}
postOrder(callback) {
  if (typeof callback !== 'function') {
    throw new Error('callback must be a function')
    }
  if (!this.root) return null;
const postOrderRecursively = (node) => {
if (!node) {
  return 
}
// console.log('left ' + node.left);

postOrderRecursively(node.left)
postOrderRecursively(node.right)

callback(node)

}    
this.root = postOrderRecursively(this.root)
}
height(node) {

  const rootNode = this.find(node)

  const leftSubtree = rootNode.left
  const rightSubtree = rootNode.right
  
if (!leftSubtree && !rightSubtree) return -1;

  let leftHeight = 0;
  let rightHeight = 0;

  const getMax = (left,right) => {
    return left > right ? left : right;
  }

  const traverseRecursivelyLeft = (node) => {
    if (!node) return 

traverseRecursivelyLeft(node.left)
traverseRecursivelyLeft(node.right)
leftHeight++
  }
  const traverseRecursivelyRight = (node) => {
    if (!node) return 

traverseRecursivelyRight(node.left)
traverseRecursivelyRight(node.right)
rightHeight++
  }
  if (leftSubtree) {
traverseRecursivelyLeft(leftSubtree.left)
traverseRecursivelyRight(leftSubtree.right)

  } else {
    leftHeight = -1
  }
  const leftSubtreeMaxHeight = getMax(leftHeight, rightHeight)

leftHeight = 0
rightHeight = 0;

if (rightSubtree) {
traverseRecursivelyLeft(rightSubtree.left)
traverseRecursivelyRight(rightSubtree.right)

} else {
  rightHeight = -1
}
const rightSubtreeMaxHeight = getMax(leftHeight, rightHeight)

const treeHeight = getMax(leftSubtreeMaxHeight, rightSubtreeMaxHeight)

return treeHeight + 1
}
depth(value) {
  
  let edges = 0;
  let lastNode = null

  const traverseRecursively = (node) => {
if (!node) {
  return 
}
lastNode = node.data;

if (value < node.data) {
  traverseRecursively(node.left)
  edges++
}
if (value > node.data) {
  traverseRecursively(node.right)
  edges++
}
  }
 
  traverseRecursively(this.root)

  if (lastNode === value){
 return edges
} else {
  edges = -1
}

return edges
}


// Main function to check if a tree is balanced
isBalanced() {
  //Helper function to calculate height and check balance at the same time
  function checkHeightAndBalance(node) {
    // Base case: if node is null, it's balanced and has height -1
    if (node === null) {
      return { height: -1, balanced: true };
    }
    // Recursively check the left subtree
    const left = checkHeightAndBalance(node.left);
    
    if (!left.balanced) {
      return { height: -1, balanced: false }; // If left subtree is unbalanced, propagate the result
    }
  
    // Recursively check the right subtree
    const right = checkHeightAndBalance(node.right);
    if (!right.balanced) {
      return { height: -1, balanced: false }; // If right subtree is unbalanced, propagate the result
    }
  
    // Calculate the height of the current node
    const currentHeight = Math.max(left.height, right.height) + 1;
  
    // Check if the current node is balanced (difference in heights <= 1)
    const balanced = Math.abs(left.height - right.height) <= 1;
  
    // Return the height and whether it's balanced
    // console.log(`Node: ${node.data}, Height: ${currentHeight}, Balanced: ${balanced}`);
    return { height: currentHeight, balanced: balanced };
  }
  
  const result = checkHeightAndBalance(this.root);  
  return result.balanced;
}
rebalance() {
  // traverse tree in inorder
  const nodes = [];
  const traverse = (node) => {
    if (!node) return;

    traverse(node.left);
    nodes.push(node.data);
    traverse(node.right);
  }
  traverse(this.root);
  // build a new tree from the sorted array
return this.root = this.buildTree(nodes, 0, nodes.length - 1);  
}


};



const array1 = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const array2 = [1,3,4, 4.5, 5,6, 7,8, 9,]
// const array2 = []


const tree1 = new Tree(array1)
// console.log(tree1.sortArrayAscending(array1))
const tree2 = new Tree(array2)
tree2.insert(2)
tree2.insert(1.6)

// tree2.deleteItem(3)
// tree2.deleteItem(5)
// console.log(tree2.find(5))
// console.log(tree2.levelOrder());
// tree2.levelOrder(data => console.log(data.data))

//   prettyPrint(tree2.root)  
// logDataInOrder(tree2)
  // logDataPreOrder(tree2)
  // tree2.levelOrder(data => console.log(data.data))
// tree2.inOrder(data => console.log(data.data))   
// tree2.preOrder(data => console.log(data.data))
// tree2.postOrder(data => console.log(data.data))
// console.log(tree2.height(8))
// console.log(tree2.depth(1.6));
// console.log(tree2.isBalanced());
console.log(tree2.isBalanced());
console.log(tree2.rebalance());
console.log(tree2.isBalanced());




export default Tree