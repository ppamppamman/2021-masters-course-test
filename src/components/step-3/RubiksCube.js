class RubiksCube {
	constructor() {
		this.bottom = [
			['O', 'O', 'O'],
			['O', 'O', 'O'],
			['O', 'O', 'O'],
		];
		this.top = [
			['Y', 'Y', 'Y'],
			['Y', 'Y', 'Y'],
			['Y', 'Y', 'Y'],
		];
		this.left = [
			['W', 'W', 'W'],
			['W', 'W', 'W'],
			['W', 'W', 'W'],
		];
		this.right = [
			['G', 'G', 'G'],
			['G', 'G', 'G'],
			['G', 'G', 'G'],
		];
		this.front = [
			['1', '2', '3'],
			['4', '5', '6'],
			['7', '8', '9'],
		];
		this.back = [
			['B', 'B', 'B'],
			['B', 'B', 'B'],
			['B', 'B', 'B'],
		];
	}

	reset() {
		this.current = [
			['R', 'R', 'W'],
			['G', 'C', 'W'],
			['G', 'B', 'B'],
		];
		return this.getCurrent();
	}

	getCurrent() {
		let result = '';
		this.current.forEach((e) => {
			result += e.join(' ') + '\n';
		});
		return result;
	}

	rotateEdge(direction) {}

	operate(command) {
		let line, target;
		switch (command) {
			case 'F':
				this.rotateEdge();
				this.rotatePlane(this.front);
			case 'U':
				line = this.current[0];
				target = line.shift();
				line.push(target);
				this.current[0] = line;
				return this.getCurrent();
			case "U'":
				line = this.current[0];
				target = line.pop();
				line.unshift(target);
				this.current[0] = line;
				return this.getCurrent();
			case 'R':
				line = [];
				for (let each of this.current) {
					line.push(each[each.length - 1]);
					each[each.length - 1] = null;
				}
				target = line.shift();
				line.push(target);
				for (let [i, each] of this.current.entries()) {
					each[each.length - 1] = line[i];
				}
				return this.getCurrent();
			case "R'":
				line = [];
				for (let each of this.current) {
					line.push(each[each.length - 1]);
					each[each.length - 1] = null;
				}
				target = line.pop();
				line.unshift(target);
				for (let [i, each] of this.current.entries()) {
					each[each.length - 1] = line[i];
				}
				return this.getCurrent();
			case 'L':
				line = [];
				for (let each of this.current) {
					line.push(each[0]);
					each[0] = null;
				}
				target = line.pop();
				line.unshift(target);
				for (let [i, each] of this.current.entries()) {
					each[0] = line[i];
				}
				return this.getCurrent();
			case "L'":
				line = [];
				for (let each of this.current) {
					line.push(each[0]);
					each[0] = null;
				}
				target = line.shift();
				line.push(target);
				for (let [i, each] of this.current.entries()) {
					each[0] = line[i];
				}
				return this.getCurrent();
			case 'B':
				line = this.current.slice(-1)[0];
				target = line.pop();
				line.unshift(target);
				this.current[this.current.length - 1] = line;
				return this.getCurrent();
			case "B'":
				line = this.current.slice(-1)[0];
				target = line.shift();
				line.push(target);
				this.current[this.current.length - 1] = line;
				return this.getCurrent();
			default:
				return '';
		}
	}
}
RubiksCube.prototype.getNewPlane = function () {
	let plane = [...Array(3)].map((each) => {
		return (each = [...Array(3)]);
	});
	return plane;
};

RubiksCube.prototype.rotatePlaneForward = function (plane) {
	let rotatedPlane = this.getNewPlane();
	[...Array(plane.length).keys()].forEach((i) => {
		[...Array(plane.length).keys()].forEach((j) => {
			rotatedPlane[i][j] = plane[plane.length - 1 - j][i];
		});
	});
	return rotatedPlane;
};

RubiksCube.prototype.rotatePlaneReverse = function (plane) {
	let rotatedPlane = this.getNewPlane();
	[...Array(plane.length).keys()].forEach((i) => {
		[...Array(plane.length).keys()].forEach((j) => {
			rotatedPlane[i][j] = plane[j][plane.length - 1 - i];
		});
	});
	return rotatedPlane;
};

export default RubiksCube;
