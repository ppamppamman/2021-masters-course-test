import * as util from './util.js';

class PlaneEdge {
	constructor() {
		this.top = null;
		this.right = null;
		this.bottom = null;
		this.left = null;
	}
}

PlaneEdge.prototype.init = function (planeSide) {
	const places = util.PLANE_SIDE[planeSide];
	for (const [i, [attr, value]] of Object.entries(Object.entries(this))) {
		this[attr] = this.isLinkedTo(places[i]);
	}
	return this;
};

PlaneEdge.prototype.isLinkedTo = function (place) {
	let targetPlace = JSON.parse(JSON.stringify(place)); //deep copy
	for (let [key, val] of Object.entries(targetPlace)) {
		targetPlace[key] = this.isAt(val);
	}
	return targetPlace;
};

PlaneEdge.prototype.isAt = function (place) {
	if (place === 'top row') {
		return [[0, 0], [0, 1], [0, 2]];
	} else if (place === 'bottom row') {
		return [[2, 0], [2, 1], [2, 2]];
	} else if (place === 'right column') {
		return [[0, 2], [1, 2], [2, 2]];
	} else if (place === 'left column') {
		return [[0, 0], [1, 0], [2, 0]];
	} else {
		return null;
	}
};

export default PlaneEdge;
