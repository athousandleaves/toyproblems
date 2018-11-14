var minDepth = function(root) {
  if (!root) return 0;
  let leaf = 10000;
  const recurse = (node, depth) => {
    if (node.left === null && node.right === null) {
      if (depth < leaf) leaf = depth;
    }
    if (node) {
      if (node.left) recurse(node.left, depth + 1);
      if (node.right) recurse(node.right, depth + 1);
    }
  };
  recurse(root, 1);
  return leaf;
};
