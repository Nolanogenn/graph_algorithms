const islandsCount = (grid, islandCell) => {
	var numIslands = 0;
	const numRows = grid.length;
	const numColumns = grid[0].length;
	const visitedCells = new Set();
	for (var i = 0; i < numRows; i ++){
		for (j = 0; j < numColumns; j ++){
			const cell = grid[i][j];
			const stringFormat = String([i,j]);
			if (cell == islandCell && (!(visitedCells.has(stringFormat)))){
				visitedCells.add(stringFormat);
				checkNeighbors(grid, i, j, visitedCells, islandCell);
				numIslands += 1;
				}
			}
		}
	console.log(numIslands)
}
const checkNeighbors = (grid, startingCellRow, startingCellColumn, visitedCells, islandCell) => {
	const directions = {
		up : [-1, +0],
		left : [+0, -1],
		down : [+1, +0],
		right : [+0, +1]
	};
	const queue = [[startingCellRow, startingCellColumn]];
	while (queue.length > 0){
		const toCheck = queue.shift();
		const [x,y] = toCheck;
		for (let direction in directions){
			const [movement_x, movement_y] = directions[direction];
			const newx = x + movement_x;
			const newy = y + movement_y;
			if (newx >= 0 && newx < grid.length && newy >= 0 && newy < grid[0].length && (!(visitedCells.has(String([newx, newy]))))){
				const newCell = grid[newx][newy];
				if (newCell == islandCell){
					queue.push([newx, newy]);
				}
				visitedCells.add(String([newx, newy]))
			}
		}
	}
	return
}

// grid with 4 islands
const grid = [
	['W', 'L', 'W', 'L', 'W'],
	['W', 'L', 'W', 'W', 'W'],
	['W', 'W', 'W', 'L', 'W'],
	['W', 'W', 'L', 'L', 'L'],
	['L', 'W', 'W', 'L', 'L'],
	['L', 'L', 'W', 'W', 'W']
]

// grid with 3 islands
//const grid = [
//	['W', 'L', 'W', 'W', 'W'],
//	['W', 'L', 'W', 'W', 'W'],
//	['W', 'W', 'W', 'L', 'W'],
//	['W', 'W', 'L', 'L', 'L'],
//	['L', 'W', 'W', 'L', 'L'],
//	['L', 'L', 'W', 'W', 'W']
//]
islandsCount(grid, 'L')
