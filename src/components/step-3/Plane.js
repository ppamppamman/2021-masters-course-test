class Plane {
	constructor(color) {
		this.data = this.init(color);
	}
}

Plane.prototype.init = function (color) {
	const rows = Array(3).fill([]);
	for (const [i, row] of rows.entries()) {
		rows[i] = Array(3).fill(color);
	}
	return rows;
};

Plane.prototype.randomizeInit = function () {}; // 향후 랜덤 처리를 위한 함수

// 데이터 불러오기
Plane.prototype.getData = function (indexes) {
	let line = [];
	for (const indexSet of indexes) {
		let data = this.data[indexSet[0]][indexSet[1]];
		line.push(data);
	}
	return line;
};

// 데이터 저장하기
Plane.prototype.setData = function (indexes, newLine) {
	if (newLine.length === 0) {
		return;
	}
	for (const [i, indexSet] of indexes.entries()) {
		this.data[indexSet[0]][indexSet[1]] = newLine[i];
	}
};

// 회전 정방향
Plane.prototype.rotateForward = function () {
	const originalData = JSON.parse(JSON.stringify(this.data)); // deep copy

	for (const [i, row] of this.data.entries()) {
		for (const [j, col] of row.entries()) {
			this.data[i][j] = originalData[row.length - 1 - j][i];
		}
	}
};

// 회전 역방향
Plane.prototype.rotateBackward = function () {
	const originalData = JSON.parse(JSON.stringify(this.data)); // deep copy

	for (const [i, row] of this.data.entries()) {
		for (const [j, col] of row.entries()) {
			this.data[i][j] = originalData[j][row.length - 1 - i];
		}
	}
};

export default Plane;
