/* should not generate diagnostics */
// https://github.com/biomejs/biome/issues/12630
class Registry {
	readonly items: string[] = [];
	find(id: string): string | undefined {
		return this.items.find((item) => item === id);
	}
	findLast(id: string): string | undefined {
		return this.items.findLast((item) => item === id);
	}
}

export function has(registry: Registry, id: string): boolean {
	return registry.find(id) !== undefined;
}

export function hasLast(registry: Registry, id: string): boolean {
	return registry.findLast(id) != null;
}

export function check(registry: Registry, id: string): void {
	if (registry.find(id)) {
	}
}

const lookup = {
	find(key: number): string | undefined {
		return key > 0 ? "found" : undefined;
	},
};

lookup.find(1) !== undefined;
