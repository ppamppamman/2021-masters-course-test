class PlaneCube {
	constructor() {
		this.current = [
			['R', 'R', 'W'],
			['G', 'C', 'W'],
			['G', 'B', 'B'],
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
}

export default PlaneCube;
