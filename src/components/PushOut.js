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
