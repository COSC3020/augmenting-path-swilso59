# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Answer 
My augmentingPath funtion utilizes Breadth-First Search to find a path between two nodes in a graph. Looking at each seciton of the code we can determine the worst-case big $\Theta$ complexity of my implementation.

1. Check if the `start` node is also the `end` node. This is constant time.
2. Initialize the `queue`, `visited` set and `parent` map. This is constant time.
3. Add the `start` node to the `visited` set. This is constant time.
4. BFS Loop: The loop continues until the `queue` is empty. Total iterations = $O(V)$, $V$ is the number of nodes.
   - Inner loop: Iterates through all neighbors of the `current` node.
     - Each edge in the graph is processed exactly once.
     - Checks if the `neighbor` has been visited.
     - Adds to the `visited` set.
     - Updates the `parent` map.
     - Adds to the `queue`.
  - The overall complexity of BFS loop: $O(V + E)$
5. The `path` is constructed from the `end` node to the `start` node. In the worst-case this involves traversing all $V$ nodes. Giving us a linear time.
6. If a `path` is not found the function returns an empty list. Which takes constant time.

Taking the dominant term from the BFS section gives us the worst-case time complexity of $\Theta(V + E)$. 

## Plagiarism Acknowledgement

For this assignment I breifly reviewed the repository https://github.com/COSC3020/augmenting-path-IshitaPatel18 and https://hackernoon.com/a-beginners-guide-to-bfs-and-dfs-in-javascript. 

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”


