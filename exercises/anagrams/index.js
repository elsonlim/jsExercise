// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagramsHelper(str) {
	const charMap = {};
	str = str.replace(/[^\w]/g, "").toLowerCase();
	for(let char of str) {
		if(charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}
	return charMap;
}

function cleanString(str) {
	return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {

	// method 1
	// const objA = anagramsHelper(stringA);
	// const objB = anagramsHelper(stringB);
    //
	// const objAKeys = Object.keys(objA);
	// const objBkeys = Object.keys(objB);
    //
	// if(objAKeys.length !== objBkeys.length) {
	// 	return false;
	// }
    //
	// for (key of objAKeys) {
	// 	if(objA[key] !== objB[key]) {
	// 		return false;
	// 	}
	// }
    //
	// return true;

	// method 2
	return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
