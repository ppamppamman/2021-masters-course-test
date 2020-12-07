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
	return word;
}

async function init() {
	let inputValueArr = await input();
	inputValueArr = await inputValueArr.split(' ');
	console.log('input is ', inputValueArr);
	console.log(push(inputValueArr[0], inputValueArr[1], inputValueArr[2]));
}

init();
