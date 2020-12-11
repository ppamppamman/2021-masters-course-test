import Plane from './Plane.js';
import PlaneEdge from './PlaneEdge.js';

class PlaneNode {
	constructor(planeSide, color) {
		this.plane = new Plane(color);
		// 면을 받아서 연결된 4방향의 라인을 받을 수 있게 추가 처리가 필요
		this.edges = new PlaneEdge().init(planeSide);
	}
}

export default PlaneNode;
