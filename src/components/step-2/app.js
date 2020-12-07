import * as readline from 'readline';
import PlaneCube from './planeCube.js';

function input() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve) => {
		rl.question('CUBE> ', (answer) => {
			resolve(answer);
			rl.close();
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
		if (command !== "'") {
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
		let isEnd = await game(planeCube);
		if (isEnd) {
			break;
		}
	}
}

async function game(planeCube) {
	let values = await input();
	if (values === '.reset') {
		console.log(`reset complete\n${planeCube.reset()}`);
		return false;
	} else if (isWrongCommand(values)) {
		console.log('wrong input\n');
		return false;
	}
	for (let command of parseCommand(values)) {
		if (command === 'Q') {
			console.log('Bye~');
			return true;
		} else {
			console.log(`${command}\n${planeCube.operate(command)}`);
		}
	}
	return false;
}
