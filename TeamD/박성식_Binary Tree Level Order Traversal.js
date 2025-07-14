const levelOrder = (root) => {
  let visited = [];

  if (root === null) return visited;

  let queue = [root];
  while (queue.length > 0) {
    let queueSize = queue.length;
    let mergedArr = [];

    for (let i = 0; i < queueSize; i++) {
      const cur_v = queue.shift();
      mergedArr.push(cur_v.val);

      if (cur_v.left !== null) {
        queue.push(cur_v.left);
      }

      if (cur_v.right !== null) {
        queue.push(cur_v.right);
      }
    }

    visited.push(mergedArr);
  }

  return visited;
};
