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
		if (commands.includes(command)) {
			return false;
		} else if (isNumeric(command)) {
			return false;
		}
	}
	return true;
}

function isNumeric(command) {
	return !isNaN(Number(command));
}

function parseCommand(inputCommands) {
	inputCommands = inputCommands.split('');
	let parsed = [];
	inputCommands.forEach((command) => {
		if (command === "'") {
			parsed[parsed.length - 1] = parsed.slice(-1)[0] + command;
		} else if (isNumeric(command)) {
			let times = Number(command) - 1;
			let repeatedCommands = Array(times).fill(parsed.slice(-1)[0]);
			parsed.push(...repeatedCommands);
		} else {
			parsed.push(command);
		}
	});
	return parsed;
}

function elapsedTime(startTime, endTime) {
	let elapsed = endTime.getTime() / 1000 - startTime.getTime() / 1000;
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
		console.log(`reset complete\n${rubiksCube.reset()}`);
		return { isEnd: false };
	} else if (values === '.shuffle') {
		console.log(`shuffle complete\n${rubiksCube.shuffle()}`);
		return { isEnd: false };
	} else if (isWrongCommand(values)) {
		console.log('wrong input\n');
		return { isEnd: false };
	}
	const parsedCommands = parseCommand(values);
	return run(rubiksCube, parsedCommands, commandCount, startTime);
}

function run(rubiksCube, parsedCommands, commandCount, startTime) {
	for (const [i, command] of parsedCommands.entries()) {
		if (command === 'Q') {
			console.log(`경과시간: ${elapsedTime(startTime, new Date())}`);
			console.log(`조작갯수: ${commandCount + i}`);
			console.log(`이용해주셔서 감사합니다. 뚜뚜뚜.`);
			return { isEnd: true };
		}
		console.log(`${command}\n${rubiksCube.operate(command)}`);
		if (isAllCorrect(rubiksCube)) {
			console.log(`경과시간: ${elapsedTime(startTime, new Date())}`);
			console.log(`조작갯수: ${commandCount + i + 1}`);
			console.log(`이용해주셔서 감사합니다. 뚜뚜뚜.`);
			return { isEnd: true };
		}
	}
	return { isEnd: false, commandCount: parsedCommands.length };
}
function isAllCorrect(rubiksCube) {
	let result = true;
	for (const [i, [side, node]] of Object.entries(Object.entries(rubiksCube.cube))) {
		let checker = node.plane.data[0][0];
		node.plane.data.forEach((row) => {
			let isCorrect = row.every((data) => data === checker);
			result = result && isCorrect;
		});
		if (!result) {
			return result;
		}
	}
	console.log('축하합니다! 큐브를 맞췄습니다!');
	return result;
}
