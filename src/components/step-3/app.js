import * as readline from 'readline';
import RubiksCube from './RubiksCube.js';

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
	const commands = ['F', 'D', 'U', 'R', 'L', 'B', 'Q', "'"];
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

function elapsedTime(startTime, endTime) {
	let elapsed = endTime.getTime() / 1000 - startTime.getTime() / 1000;
	// let hour = parseInt(parseInt(elapsed / 60) / 60).toString();
	let min = parseInt(elapsed / 60).toString();
	let sec = parseInt(elapsed - min * 60).toString();

	if (min.length === 1) {
		min = '0' + min;
	}
	if (sec.length === 1) {
		sec = '0' + sec;
	}
	return `${min}:${sec}`;
}

export async function init() {
	const rubiksCube = new RubiksCube();
	let commandCount = 0;
	let startTime = new Date();
	console.log(rubiksCube.getCurrent());

	while (true) {
		let status = await game({ rubiksCube, commandCount, startTime });
		if (status.commandCount !== undefined) {
			commandCount += status.commandCount;
		}
		if (status.isEnd) {
			break;
		}
	}
}

async function game({ rubiksCube, commandCount, startTime }) {
	let values = await input();
	if (values === '.reset') {
		// console.log(`reset complete\n${rubiksCube.reset()}`);
		return { isEnd: false };
	} else if (isWrongCommand(values)) {
		console.log('wrong input\n');
		return { isEnd: false };
	}

	const parsedCommands = parseCommand(values);
	// console.log(parsedCommands);
	for (let command of parsedCommands) {
		if (command === 'Q') {
			console.log(`경과시간: ${elapsedTime(startTime, new Date())}`);
			console.log(`조작갯수: ${commandCount}`);
			console.log(`이용해주셔서 감사합니다. 뚜뚜뚜.`);

			return { isEnd: true };
		} else {
			console.log(`${command}\n${rubiksCube.operate(command)}`);
		}
	}
	return { isEnd: false, commandCount: parsedCommands.length };
}
