const edges2adjmatrix = (edge_list) => {
	const adjMatrix = {};
	for (let edge of edge_list){
		const [a,b] = edge;
		if (!(a in adjMatrix)) adjMatrix[a] = [];
		if (!(b in adjMatrix)) adjMatrix[b] = [];

		adjMatrix[a].push(b);
		adjMatrix[b].push(a);
		}
	return adjMatrix;
	}

const shortestPath_depthFirst = (edges, src, dst) => {
	adjMatrix = edges2adjmatrix(edges);

	var shortestPath = [];
	var shortestPathLength = 10000;
	const stack = [src];
	var currentPath = [];
	var currentLength = 0;
	const visitedNodes = new Set();

	while (stack.length > 0){
		const currentNode = stack.pop();
		currentPath.push(currentNode);
		currentLength += 1;
		if (currentNode === dst){
			if (currentLength < shortestPathLength){
				shortestPath = currentPath;
				shortestPathLength = currentLength;
				currentPath = [];
				currentLength = 0;
			}
		}
		else{
			for (let neighbor of adjMatrix[currentNode]){
				if (!(visitedNodes.has(neighbor))){
					stack.push(neighbor);
				}
			}
		}
		visitedNodes.add(currentNode);
	}
	console.log("Shortest path : ",shortestPath);
	console.log("Shortest length : ",shortestPathLength);
}

const shortestPath_breadthFirst = (edges, src, dst) => {
	adjMatrix = edges2adjmatrix(edges);
	console.log(adjMatrix);
	var shortestPaths = {};
	const stack = [[src, 0, 'root']];

	while (stack.length > 0){
		const currentNode = stack.shift();
		node = currentNode[0];
		const distance = currentNode[1];
		const previousNode = currentNode[2]
		if (!(node in shortestPaths)){
			shortestPaths[node] = [distance, previousNode];
		}
		else{
			if (distance < shortestPaths[node][0]){
				shortestpaths[node] = [distance, previousNode];
			}
		}
		if (node === dst){
			break
			}
		else{
			const newDistance = distance + 1;
			for (let neighbor of adjMatrix[node]){
					stack.push([neighbor, newDistance, node])
					}
				}
		
		}
	console.log(shortestPaths);
}



const edges = [
	['w', 'x'],
	['x', 'y'],
	['z', 'y'],
	['z', 'v'],
	['w', 'v'],
	['z', 'a'],
	['a', 'b'],
	['b', 'c']
]

shortestPath_breadthFirst(edges, 'x', 'z')
