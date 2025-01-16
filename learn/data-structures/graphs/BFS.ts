interface Graph {
    [key: number]: number[];
}

/**
 * Performs a breadth-first search traversal on a graph starting from a given node
 * @param graph - The adjacency list representation of the graph
 * @param startNode - The node to start BFS from
 * @returns Array of nodes in BFS traversal order
 */
function bfs(graph: Graph, startNode: number): number[] {
    // Keep track of visited nodes to avoid cycles
    const visited = new Set<number>();
    
    // Queue for BFS traversal
    const queue: number[] = [];
    
    // Result array to store traversal order
    const result: number[] = [];
    
    // Start with the initial node
    queue.push(startNode);
    visited.add(startNode);
    
    while (queue.length > 0) {
        // Remove the first element from queue
        const currentNode = queue.shift()!;
        result.push(currentNode);
        
        // Get all adjacent vertices of the dequeued vertex
        // If an adjacent has not been visited, then mark it visited
        // and enqueue it
        for (const neighbor of graph[currentNode] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    
    return result;
}

// Example usage:
const exampleGraph: Graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
};

// Test the BFS implementation
function testBFS() {
    console.log("Testing BFS traversal:");
    const traversalResult = bfs(exampleGraph, 2);
    console.log("BFS starting from node 2:", traversalResult);
    // Expected output: [2, 0, 3, 1]
}

testBFS();

export { bfs, Graph };
