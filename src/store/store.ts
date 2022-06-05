import { writable } from 'svelte/store';

function createGrid() {
    const { subscribe, set, update } = writable(Array(9).fill(null));

    return {
        subscribe,
        set: (index: number, cell: string) => update((state: string[]) => {
            state[index] = cell;
            return state;
        }),
        reset: () => set(Array(9).fill(null)),
    };
}

export const stopPlaying = writable(false);
export const result = writable(null as 'win' | 'lose' | null);
export const grid = createGrid();
