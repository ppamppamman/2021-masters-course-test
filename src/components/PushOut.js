function input() {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve) => {
		rl.question('> ', (answer) => {
			rl.close();
			resolve(answer);
		});
	});
}
function push(word, count, direction) {
	while (count != 0) {
		if (direction == 'L') {
			let target = word[0];
			word = word.substring(1, word.length);
			word = word + target;
		} else {
			let target = word[word.length - 1];
			word = word.substring(0, word.length - 1);
			word = target + word;
		}
		count -= 1;
	}
	return word;
}

async function init() {
	let inputValueArr = await input();
	inputValueArr = await inputValueArr.split(' ');
	console.log('input is ', inputValueArr);
	console.log(push(inputValueArr[0], inputValueArr[1], inputValueArr[2]));
}

init();
