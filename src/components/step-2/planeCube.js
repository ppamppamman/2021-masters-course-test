import * as util from './util.js';

class PlaneCube {
	constructor() {
		this.current = util.reset();
	}

	reset() {
		this.current = util.reset();
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
		let newLine;
		if (command == util.commands.UP_FORWARD) {
			newLine = util.push('left', this.current[0]);
			this.current[0] = newLine;
			return this.getCurrent();
		} else if (command == util.commands.UP_BACKWARD) {
			newLine = util.push('right', this.current[0]);
			this.current[0] = newLine;
			return this.getCurrent();
		} else if (command == util.commands.RIGHT_FORWARD) {
			newLine = util.push('left', [this.current[0][2], this.current[1][2], this.current[2][2]]);
			for (let [i, each] of this.current.entries()) {
				each[each.length - 1] = newLine[i];
			}
			return this.getCurrent();
		} else if (command == util.commands.RIGHT_BACKWARD) {
			newLine = util.push('right', [this.current[0][2], this.current[1][2], this.current[2][2]]);
			for (let [i, each] of this.current.entries()) {
				each[each.length - 1] = newLine[i];
			}
			return this.getCurrent();
		} else if (command == util.commands.LEFT_FORWARD) {
			newLine = util.push('right', [this.current[0][0], this.current[1][0], this.current[2][0]]);
			for (let [i, each] of this.current.entries()) {
				each[0] = newLine[i];
			}
			return this.getCurrent();
		} else if (command == util.commands.LEFT_BACKWARD) {
			newLine = util.push('left', [this.current[0][0], this.current[1][0], this.current[2][0]]);
			for (let [i, each] of this.current.entries()) {
				each[0] = newLine[i];
			}
			return this.getCurrent();
		} else if (command == util.commands.BOTTOM_FORWARD) {
			newLine = util.push('right', this.current.slice(-1)[0]);
			this.current[this.current.length - 1] = newLine;
			return this.getCurrent();
		} else if (command == util.commands.BOTTOM_BACKWARD) {
			newLine = util.push('left', this.current.slice(-1)[0]);
			this.current[this.current.length - 1] = newLine;
			return this.getCurrent();
		}
	}
}

export default PlaneCube;
