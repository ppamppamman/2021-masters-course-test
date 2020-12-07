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

	operate(command) {
		let line, target;
		switch (command) {
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
					line.push(each[each.length - 1]);
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
					line.push(each[each.length - 1]);
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
					line.push(each[0]);
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
					line.push(each[0]);
					each[0] = line[i];
				}
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
			case "Q'":
				return '';
		}
	}
}

export default PlaneCube;
