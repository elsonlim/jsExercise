// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	// return str.split('').reverse().join('');

	// let string = '';
	// for(i = str.length-1; i >= 0; i--) {
	// 	string += str.charAt(i);
	// }
	// return string;

	return str.split('').reduce((rev, char) => char+rev , '');
}

module.exports = reverse;
