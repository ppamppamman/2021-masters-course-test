export const PLANE_SIDE = {
	F: [{ U: 'bottom row' }, { R: 'left column' }, { D: 'top row' }, { L: 'right column' }],
	B: [{ U: 'top row' }, { L: 'left column' }, { D: 'bottom row' }, { R: 'right column' }],
	U: [{ B: 'top row' }, { R: 'top row' }, { F: 'top row' }, { L: 'top row' }],
	D: [{ F: 'bottom row' }, { R: 'bottom row' }, { B: 'bottom row' }, { L: 'bottom row' }],
	L: [{ U: 'left column' }, { F: 'left column' }, { D: 'left column' }, { B: 'right column' }],
	R: [{ U: 'right column' }, { B: 'left column' }, { D: 'right column' }, { F: 'right column' }],
};

//12/22 2차 테스트 개선 코드 1 -2
export function isNotValidData(newLine) {
  if (newLine.length === 0) {
		return true;
	}
  return false;
}