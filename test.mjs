import Tree from "./script.mjs"; 

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
  
  prettyPrint(tree2.root)