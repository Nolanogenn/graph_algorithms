const dfp = (graph,source) => {
	const stack = [source];
	while (stack.length > 0){
		const current = stack.pop();
		console.log(current);

		for (let neighbor of graph[current]){
			stack.push(neighbor);
		}
	}
};

const bfp = (graph, source) => {
	const stack = [source];
	while (stack.length > 0){
		const current = stack.shift();
		console.log(current);
		for (let neighbor of graph[current]){
			stack.push(neighbor);
		}
	}
};

const graph = {
	a : ['c', 'b'],
	b : ['d'],
	c : ['e'],
	d : ['f'],
	e : [],
	f : []	
}

console.log('depth first :')
dfp(graph, 'a')
console.log('breadth first :')
bfp(graph, 'a')
