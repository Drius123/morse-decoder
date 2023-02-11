const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let word = "";
	let symB = [];
	let letter = [];
	expr.split('').forEach((item, index, arr) => index % 2 == 0 ? symB.push(item + arr[index + 1]) : null);
	symB = symB.map(item => {return item == '10' ? '.' : item == '11' ? '-' : item == '**' ? '*' : null});
	symB.forEach((item, index) =>index % 5 == 0 && index != 0 ? letter.push(symB.slice(index - 5, index)) : index == symB.length - 1 ? letter.push(symB.slice(index - index % 5, index + 1)) : null);
	letter = letter.map(item => {return item.filter(itm => itm != null)});
	letter.forEach((item, index) => {item.join('') == '*****' ? word += ' ' : word += MORSE_TABLE[item.join('')]});
	return word;
}
module.exports = {
    decode
}