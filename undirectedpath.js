const undirectedPath = (edge_list, src, dst) => {
	const graph = {};
	// let's transform an edge list into an adjacency matrix
	for (let edge of edge_list){
		console.log(edge);
		const [a,b] = edge;
		if (!(a in graph)) graph[a] = [];
		if (!(b in graph)) graph[b] = [];
		graph[a].push(b);
		graph[b].push(a);
	}

	const num_nodes = Object.keys(graph).length;
	const visited_nodes = new Set();
	const stack = [src];
	while (stack.length > 0){
		const current = stack.pop();
		if (current === dst){
			return true;
		}
		else{
			if (!(visited_nodes.has(current))){
				visited_nodes.add(current);
				for (let neighbor of graph[current]){
					if (!(visited_nodes.has(neighbor))) stack.push(neighbor);
				}
			}
		}
	}
	return false
}






const edges = [
	['i', 'j'],
	['k', 'i'],
	['m', 'k'],
	['k', 'l'],
	['o', 'n'],
	//the next edge create a cycle
	['k', 'j']
]

hasPath = undirectedPath(edges, 'i', 'l')
console.log(hasPath)
