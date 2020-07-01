// 1. Counting Sheep
// What is the input to the program? a number
// What is the output of the program? number along with the message "Another sheep jumps over the fence"
// What is the input to each recursive call? the number minus 1
// What is the output of each recursive call? the number minus one with the message "Another sheep jumps over the fence". When no more sheep, the message "All sheep jumped over the fence"

function countSheep(num) {
    if (num === 0) {
        console.log(`All sheep jumped over the fence`);
    } else {
        console.log(`${num}: Another sheep jumps over the fence`);
        countSheep(num - 1);
    }
};

// 2. Power Calculator
const powerCalculator = function (base, exp) {
    if (exp === 0) {
        return base;
    }
    if (exp < 0) {
        return 'exponent should be >= 0';
    }
    else {
        return base * powerCalculator(base, exp - 1);
    }
};

// Reverse String
const stringReverse = function (str) {
    if (str.length === '') {
        return '';
    }

    return stringReverse(str.substr(1)) + str.charAt(0);
};

// nth Triangular Number
const nthTriangularNumber = function (n) {
    if (n === 1) {
        return 1;
    }
    return n + nthTriangularNumber(n - 1);
};

nthTriangularNumber(6); // => 21

// String Splitter
const splitStr = function (str, separator) {
    if (str === '') {
        return '';
    }

    const newChar = str[0];
    if (newChar === separator) {
        return splitStr(str.slice(1), separator);
    }
    else {
        return newChar + splitStr(str.slice(1), separator);
    }
};

splitStr('02/20/2020'); // => 02202020

//Fibonacci

const fibSeq = function (num) {
    if (num <= 0) {
        return 0;
    }
    if (num <= 2) {
        return 1;
    }

    return fibSeq(num - 1) + fibSeq(num - 2);
};

fibSeq(5);

//Factorial 

const factorial = function (num) {
    if (num === 0) {
        return 1;
    }

    return num * factorial(num - 1);
};

factorial(5);

//Find a way out of the maze
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const mazeRunner = function (maze, position = 0, row = 0, column = 0, path = [], direction = 'S') {
    if (row >= maze.length || column >= maze[0].length) {
        return;
    }
    if (row < 0 || column < 0) {
        return;
    }
    path[position] = direction;
    position++;
    if (maze[row][column] === 'e') {
        console.log('We found the path', path);
        return;
    }
    if (maze[row][column] === ' ') {
        maze[row][column] = 'V';
        mazeRunner(maze, position, row, column - 1, path, 'L');
        mazeRunner(maze, position, row, column + 1, path, 'R');
        mazeRunner(maze, position, row - 1, column, path, 'U');
        mazeRunner(maze, position, row + 1, column, path, 'D');
        maze[row][column] = ' ';
    }
    position--;
};

mazeRunner(maze);

//Anagrams
const anagram = function (prefix, str) {
    if (str.length <= 1) {
        console.log(`The anagram is ${prefix}${str}`);
    }
    else {
        for (let i = 0; i < str.length; i++) {
            let currentLetter = str.substring(i, i + 1);
            let previousLetters = str.substring(0, i);
            let afterLetters = str.substring(i + 1);
            anagram(prefix + currentLetter, previousLetters + afterLetters);
        }
    }
};

function printAnagram(word) {
    console.log(`The word for which we will find an anagram for is ${word}`);
    anagram(' ', word);
};

// Organize Data
let organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};

function traverseA(data, depth = 0) {
    let indent = " ".repeat(depth * 4);
    Object.keys(data).forEach(key => {
        console.log(indent + key);
        traverseA(data[key], depth + 1)
    });
};

function traverseB(node, indent = 0) {
    for (var key in node) {
        console.log(" ".repeat(indent), key);
        traverseB(node[key], indent + 4);
    }
};

//Binary Representation
function convertToBinary(num) {
    if (num > 0) {
        let binary = Math.floor(num % 2); //save remainder in binary
        //divide number by 2 and end that to the funtion again
        //carry the remainder to the next recursion call
        return (convertToBinary(Math.floor(num / 2)) + binary);
    }
    else {
        return ''; 
    }
}