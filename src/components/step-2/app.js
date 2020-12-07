import * as readline from 'readline';
import PlaneCube from './planeCube.js';

function input() {
	// const readline = require('readline');
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve) => {
		rl.question('CUBE> ', (answer) => {
			rl.close();
			resolve(answer);
		});
	});
}

function isWrongCommand(inputCommands) {
	const commands = ['U', 'R', 'L', 'B', 'Q', "'"];
	const target = inputCommands.split('');
	for (let command of target) {
		if (!commands.includes(command)) {
			return true;
		}
	}
	return false;
}

function parseCommand(inputCommands) {
	inputCommands = inputCommands.split('');
	let parsed = [];
	inputCommands.forEach((command) => {
		if (command != "'") {
			parsed.push(command);
		} else {
			parsed[parsed.length - 1] = parsed.slice(-1) + command;
		}
	});
	return parsed;
}

export async function init() {
	const planeCube = new PlaneCube();
	console.log(planeCube.getCurrent());

	while (true) {
		let values = await input();
		if (values == '.exit') {
			return;
		} else if (values == '.reset') {
			console.log('reset complete', '\n');
			console.log(planeCube.reset());
			continue;
		} else if (isWrongCommand(values)) {
			console.log('wrong input');
			continue;
		}
		let commands = parseCommand(values);
		for (let command of commands) {
			if (command == 'Q') {
				console.log('Bye~');
				return;
			} else {
				console.log(command);
				console.log(planeCube.operate(command));
			}
		}
	}
}
