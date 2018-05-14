// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, str = '') {
	// by counting spaces on left / right
	// let column = ((n-1) * 2) + 1;
	// for(let i = 0; i < n; i++) {
	// 	let str = '';
	// 	let space = (column - 1 - 2*i) / 2;
	// 	for (let j = 0; j < column; j++) {
	// 		if(j >= space && j < column - space) {
	// 			str += '#';
	// 		} else {
	// 			str += ' ';
	// 		}
	// 	}
	// 	console.log(str);
	// }

	// using midpoint
	// const rowLength = (2 * n - 1);
	// const midPoint = Math.floor(rowLength/ 2);
	// for(let row = 0; row < n; row++) {
	// 	let str = '';
	// 	for(let col = 0; col < rowLength; col++) {
	// 		if(midPoint - row <= col && midPoint + row >= col) {
	// 			str += '#';
	// 		} else {
	// 			str += ' ';
	// 		}
	// 	}
	// 	console.log(str);
	// }

	// using recurssion
	if( row === n ) {
		return;
	}

	const rowLength = (2 * n - 1);
	if(str.length === rowLength) {
		console.log(str);
		return pyramid(n, row + 1);
	}

	const midPoint = Math.floor(rowLength/ 2);
	if(midPoint - row <= str.length && midPoint + row >= str.length) {
		str += '#';
	} else {
		str += ' ';
	}

	pyramid(n, row, str);
}

module.exports = pyramid;
