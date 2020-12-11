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
