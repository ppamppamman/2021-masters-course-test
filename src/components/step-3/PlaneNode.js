import Plane from './Plane.js';
import PlaneEdge from './PlaneEdge.js';

class PlaneNode {
	constructor() {
		this.plane = null;
		this.edges = null;
	}
}

PlaneNode.prototype.init = function (planeSide, colors) {
	this.plane = new Plane().init(colors);
	this.edges = new PlaneEdge().init(planeSide);
	return this;
};
export default PlaneNode;
