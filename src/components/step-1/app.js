function input() {
	const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve) => {
		rl.question('> ', (answer) => {
			resolve(answer);
			rl.close();
		});
	});
}
function correction(count, direction) {
	count = Math.abs(count);
	if (direction == 'L') {
		direction = 'R';
	} else if (direction == 'R') {
		direction = 'L';
	}
	return [count, direction];
}

function push(word, count, direction) {
	let input = {};
	[input.word, input.count, input.direction] = [word, count, direction.toUpperCase()];

	if (count < 0) {
		[input.count, input.direction] = correction(count, direction);
	}

	while (input.count != 0) {
		let target;
		if (input.direction == 'L') {
			target = input.word[0];
			input.word = input.word.substring(1, input.word.length);
			input.word = input.word + target;
		} else if (input.direction == 'R') {
			target = input.word[input.word.length - 1];
			input.word = input.word.substring(0, input.word.length - 1);
			input.word = target + input.word;
		}
		input.count -= 1;
	}
	return input.word;
}

async function init() {
	while (true) {
		let values = await input();
		if (values.split(' ').length != 3) {
			console.log('wrong input');
			continue;
		}
		values = values.split(' ');
		let result = push(values[0], values[1], values[2]);
		console.log(result);
	}
}

init();
