function augmentingPath(graph, start, end) {
    // If the start and end nodes are the same, return a path containing only the start node
    if (start === end) {
        return [start];
    }

    // Initialize the BFS queue with the start node
    let queue = [start];
    // Use a set to keep track of visited nodes to avoid cycles
    let visited = new Set();
    // A map to store the parent of each visited node, which helps in reconstructing the path later
    let parent = {};

    // Mark the start node as visited
    visited.add(start);

    // Perform Breadth-First Search (BFS) until the queue is empty
    while (queue.length > 0) {
        // Dequeue the first node from the queue and set it as the current node
        let current = queue.shift();

        // If the current node is the end node, reconstruct the path and return it
        if (current === end) {
            // Initialize an empty array to store the path
            let path = []; 

            // Trace back from the end node to the start node using the parent map
            while (current !== undefined) {
                // Add the current node to the front of the path
                path.unshift(current); 
                // Move to the parent of the current node
                current = parent[current]; 
            }
            // Return the constructed path
            return path; 
        }

        // Explore all neighbors of the current node
        for (let neighbor in graph[current]) {
            // Check if the neighbor has not been visited yet
            if (!visited.has(neighbor)) {
                // Mark the neighbor as visited to avoid revisiting it
                visited.add(neighbor);

                // Record the current node as the parent of the neighbor
                parent[neighbor] = current;

                // Add the neighbor to the queue for further exploration
                queue.push(neighbor);
            }
        }
    }

    // If the queue is empty and no path is found, return an empty list
    return [];
}
