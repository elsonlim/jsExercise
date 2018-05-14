// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function getNextDirection(direction) {
	switch(direction) {
		case'right':
			return'down';
			break;
		case 'down':
			return 'left';
			break;
		case 'left':
			return 'up';
			break;
		case 'up':
			return 'right';
			break;
	};
}

function matrix(n) {

	let baseArray = [];
	for(let i = 0; i < n; i++) {
		baseArray.push(new Array(n));
	}

	let currentDirection = 'right';
	let horIndex = -1;
	let verIndex = 0;

	for(let i = 1; i <= n*n; i++) {
		if(currentDirection === 'right') {
			horIndex++;
			baseArray[verIndex][horIndex] = i;
			if(horIndex === n-1 || baseArray[verIndex][1+horIndex]) {
				currentDirection = getNextDirection(currentDirection);
			}
		} else if(currentDirection === 'down') {
			verIndex++;
			baseArray[verIndex][horIndex] = i;
			if(verIndex === n-1 || baseArray[1+verIndex][horIndex]) {
				currentDirection = getNextDirection(currentDirection);
			}
		} else if(currentDirection === 'left') {
			horIndex--;
			baseArray[verIndex][horIndex] = i;
			if(horIndex === 0 || baseArray[verIndex][horIndex - 1]) {
				currentDirection = getNextDirection(currentDirection);
			}
		} else if(currentDirection === 'up') {
			verIndex--;
			baseArray[verIndex][horIndex] = i;
			if(verIndex === 0 || baseArray[verIndex - 1][horIndex]) {
				currentDirection = getNextDirection(currentDirection);
			}
		}

		console.log(baseArray);
	}

	return baseArray;
}

module.exports = matrix;
