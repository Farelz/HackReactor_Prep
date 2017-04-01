/*
Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.
*/

function countAllCharacters(str) {
  return (str === '') ? {} :
        str.split('').reduce(function (acc, curr) {
            if (acc.hasOwnProperty(curr)) {
                acc[curr]++;
            } else {
                acc[curr] = 1;
            }
            return acc;
          }, {});
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}