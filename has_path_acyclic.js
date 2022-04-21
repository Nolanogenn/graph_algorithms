const hasPath = (graph, src, dist) => {
	let pathexist = false;
	const stack = [src];
	while (stack.length > 0){
		//if we use stack.shift() instead we go for breadth-first
		const current_node = stack.pop();
		if (current_node === dist){
			pathexist = true;
			break;
		}
		else {
			for (let neighbor of graph[current_node]){
				stack.push(neighbor);
			}
		}
	}
	console.log(pathexist)
};


const graph = {
	f : ['g', 'i'],
	g: ['h'],
	h : [],
	i: ['g', 'k'],
	j : ['i'],
	k : []
}

hasPath(graph, 'h', 'k')
