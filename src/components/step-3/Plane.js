class Plane {
	constructor(color) {
		this.data = this.init(color);
	}
}

Plane.prototype.init = function (color) {
	const rows = Array(3).fill([]);
	for (const [i, row] of rows.entries()) {
		rows[i] = Array(3).fill(color + i);
	}
	return rows;
};

Plane.prototype.randomizeInit = function () {}; // 향후 랜덤 처리를 위한 함수
Plane.prototype.getData = function () {}; // 데이터 받아오기
Plane.prototype.setData = function () {}; // 데이터 불러오기

// 회전 정방향
Plane.prototype.rotateForward = function () {};

// 회전 역방향
Plane.prototype.rotateBackward = function () {};
