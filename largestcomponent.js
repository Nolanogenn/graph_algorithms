const findLargestComponent = (graph) => {
	const visited = new Set();
	let largestCount = 0;
	for (let node in graph){
		if (!(visited.has(node))){
			const size = explore(graph, node, visited);
			if (size > largestCount) largestCount = size;
		}
	}
	console.log(largestCount);
}

const explore = (graph, current, visited) => {
	if (visited.has(String(current))) return 0;
	visited.add(String(current));

	let count = 1;
	for (let neighbor of graph[current]){
		count += explore(graph, neighbor, visited, count);
	}
	return count
}


const graph = {
	0 : [8, 1, 5],
	1 : [0],
	5 : [0, 8],
	8 : [0, 5],
	2 : [3, 4],
	3 : [2, 4],
	4 : [3, 2]
}

findLargestComponent(graph)
