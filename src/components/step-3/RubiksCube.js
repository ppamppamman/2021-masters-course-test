import PlaneNode from './PlaneNode.js';

class RubiksCube {
	constructor() {
		this.cube = this.init();
	}
}

RubiksCube.prototype.init = function () {
	const planeSides = ['F', 'B', 'U', 'D', 'L', 'R'];
	const colors = ['B', 'W', 'O', 'G', 'Y', 'R'];
	let planes = {};

	for (const [i, side] of planeSides.entries()) {
		let targetColors = Array(9).fill(colors[i]);
		planes[side] = new PlaneNode().init(side, targetColors);
	}
	return planes;
};

RubiksCube.prototype.reset = function () {
	this.cube = this.init();
	return this.getCurrent();
};

RubiksCube.prototype.shuffle = function () {
	const allColors = ['B', 'W', 'O', 'G', 'Y', 'R'];
	let colors = [];
	for (const color of allColors) {
		colors.push(...color.repeat(9).split(''));
	}
	colors.sort(() => Math.random() - Math.random());

	const planeSides = ['F', 'B', 'U', 'D', 'L', 'R'];
	let planes = {};

	for (const [i, side] of planeSides.entries()) {
		let targetColors = colors.slice(i * 9, i * 9 + 9);
		planes[side] = new PlaneNode().init(side, targetColors);
	}
	this.cube = planes;
	return this.getCurrent();
};

// 현재 상태 확인
RubiksCube.prototype.getCurrent = function () {
	let currentCube = {};
	for (const [i, [side, node]] of Object.entries(Object.entries(this.cube))) {
		let result = [];
		node.plane.data.forEach((row) => {
			result.push(row.join(' '));
		});
		currentCube[side] = result;
	}
	let status = createPrintableStatus(currentCube);
	return status;
};

RubiksCube.prototype.createPrintableStatus = function(currentCube){
  let currentStatus = `
                    ${currentCube['U'][0]}
                    ${currentCube['U'][1]}
                    ${currentCube['U'][2]}

     ${currentCube['L'][0]}     ${currentCube['F'][0]}     ${currentCube['R'][0]}     ${currentCube['B'][0]}
     ${currentCube['L'][1]}     ${currentCube['F'][1]}     ${currentCube['R'][1]}     ${currentCube['B'][1]}
     ${currentCube['L'][2]}     ${currentCube['F'][2]}     ${currentCube['R'][2]}     ${currentCube['B'][2]}

                    ${currentCube['D'][0]}
                    ${currentCube['D'][1]}
                    ${currentCube['D'][2]}
  `;
  return currentStatus;
}

RubiksCube.prototype.operate = function (command) {
	if (command.includes("'")) {
		this.rotateBackward(command[0]);
		return this.getCurrent();
	} else {
		this.rotateForward(command);
		return this.getCurrent();
	}
};

// 정방향 회전
RubiksCube.prototype.rotateForward = function (side) {
	this.rotatePlaneForward(this.cube[side].plane);
	this.rotateEdgesForward(this.cube[side].edges);
};

// 역방향 회전
RubiksCube.prototype.rotateBackward = function (side) {
	this.rotatePlaneBackward(this.cube[side].plane);
	this.rotateEdgesBackward(this.cube[side].edges);
};

RubiksCube.prototype.rotatePlaneForward = function (plane) {
	plane.rotateForward();
};

RubiksCube.prototype.rotatePlaneBackward = function (plane) {
	plane.rotateBackward();
};

RubiksCube.prototype.rotateEdgesForward = function (edges) {
	let targetEdgeLine = [];
	const startEdge = Object.entries(edges.top).flat();

	// 순회하며 처리
	for (const [direction, edge] of Object.entries(edges)) {
		const [side, lineIndexes] = Object.entries(edge).flat();
		const originalEdgeLine = this.cube[side].plane.getData(lineIndexes);
		this.cube[side].plane.setData(lineIndexes, targetEdgeLine);
		targetEdgeLine = originalEdgeLine; // 마지막 line이 남는다.
	}
	const [startSide, startIndexes] = startEdge; //순회 후 마지막 처리
	this.cube[startSide].plane.setData(startIndexes, targetEdgeLine);
};

RubiksCube.prototype.rotateEdgesBackward = function (edges) {
	let targetEdgeLine = [];
	const startEdge = Object.entries(edges.left).flat();

	// 순회하며 처리
	for (const [direction, edge] of Object.entries(edges).reverse()) {
		const [side, lineIndexes] = Object.entries(edge).flat();
		const originalEdgeLine = this.cube[side].plane.getData(lineIndexes);
		this.cube[side].plane.setData(lineIndexes, targetEdgeLine);
		targetEdgeLine = originalEdgeLine; // 마지막 line이 남는다.
	}
	const [startSide, startIndexes] = startEdge; //순회 후 마지막 처리
	this.cube[startSide].plane.setData(startIndexes, targetEdgeLine);
};

export default RubiksCube;
