// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, str='') {
	// for(let i = 0; i < n; i++) {
	// 	let string = '';
	// 	for(let j = 0; j < n; j++) {
	// 		if(j <= i) {
	// 			string += '#';
	// 		} else {
	// 			string += ' ';
	// 		}
	// 	}
	// 	console.log(string);
	// }

	// method 2 by recursive function
	if(n === row) {
		return;
	} else if(n === str.length) {
		console.log(str);
		return steps(n, row+1);
	}

	str += (str.length <= row) ? '#': ' ';

	steps(n, row, str);
}

module.exports = steps;
