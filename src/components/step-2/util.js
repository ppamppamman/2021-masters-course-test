export const commands = {
	UP_FORWARD: 'U',
	UP_BACKWARD: "U'",
	BOTTOM_FORWARD: 'B',
	BOTTOM_BACKWARD: "B'",
	LEFT_FORWARD: 'L',
	LEFT_BACKWARD: "L'",
	RIGHT_FORWARD: 'R',
	RIGHT_BACKWARD: "R'",
	QUIT: 'Q',
};

export function push(direction, line) {
	let newLine = line;
	let target;
	if (direction === 'left') {
		target = newLine.shift();
		newLine.push(target);
	} else if (direction == 'right') {
		target = newLine.pop();
		line.unshift(target);
	}
	return newLine;
}

export function reset() {
	let cube = [
		['R', 'R', 'W'],
		['G', 'C', 'W'],
		['G', 'B', 'B'],
	];
	return cube;
}
