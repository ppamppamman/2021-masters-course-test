class RubiksCube {
	constructor() {
		this.cube = this.init();
	}
}

RubiksCube.prototype.init = function () {
	const planeSides = ['F', 'B', 'U', 'D', 'L', 'R'];
	const colors = ['B', 'W', 'O', 'G', 'Y', 'R'];
	let planes = {
		F: null,
		B: null,
		U: null,
		D: null,
		L: null,
		R: null,
	};

	for (const [i, side] of planeSides.entries()) {
		planes[side] = new PlaneNode(side, colors[i]);
	}
	return planes;
};

// 현재 상태 확인
RubiksCube.prototype.getCurrent = function () {};

// 정방향 회전
RubiksCube.prototype.rotateForward = function (side) {
	this.rotatePlaneForward(this.cube[side].plane);
	// 엣지 회전 추가 필요
};

// 역방향 회전
RubiksCube.prototype.rotateBackward = function (side) {
	this.rotatePlaneBackward(this.cube[side].plane);
	// 엣지 회전 추가 필요
};

RubiksCube.prototype.rotatePlaneForward = function (plane) {
	plane.rotateForward();
};

RubiksCube.prototype.rotatePlaneBackward = function (plane) {
	plane.rotateBackward();
};

export default RubiksCube;
