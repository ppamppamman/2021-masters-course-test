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
