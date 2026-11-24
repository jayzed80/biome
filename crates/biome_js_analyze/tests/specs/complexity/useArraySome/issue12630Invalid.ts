// https://github.com/biomejs/biome/issues/12630
// Real arrays are still reported when type information is available.
export function has(items: string[], id: string): boolean {
	return items.find((item) => item === id) !== undefined;
}

export function hasLast(items: Array<string>, id: string): boolean {
	return items.findLast((item) => item === id) != null;
}

export function check(items: string[], id: string): void {
	if (items.find((item) => item === id)) {
	}
}
