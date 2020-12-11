import Plane from './Plane.js';
import PlaneEdge from './PlaneEdge.js';

class PlaneNode {
	constructor(planeSide, color) {
		this.plane = new Plane(color);
		this.edges = new PlaneEdge().init(planeSide);
	}
}

export default PlaneNode;
