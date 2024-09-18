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
  return node + 
}
console.log('left ' + node.left);
inOrderRecursively(node.left)
callback(node)
inOrderRecursively(node.right)

}    
this.root = inOrderRecursively(this.root)

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
try {
tree2.inOrder(data => {
  console.log(data.data)
})
} catch (error) {
  console.error(error.message)
}
// prettyPrint(tree2.root)

// console.log(tree1.root)
// console.log(tree2.root.left)

// prettyPrint(tree1.root)

