<script lang="ts">
    import { fade } from 'svelte/transition';
    import { init, level, grid, stop, result } from '../store/store';
    import Init from '../components/init.svelte';
    import XO from '../components/xo.svelte';
    import Result from '../components/result.svelte';
    import '../app.css';

    const player = 'o';
    const robot = 'x';
    const combos = ['012', '345', '678', '036', '147', '258', '048', '246'];

    function wait(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function random(num: number) {
        return Math.floor(Math.random() * num + 1)
    }

    function handlePress(cell: number) {
        return async () => {
            const center = 4;

            stop.set(true);
            grid.set(cell, player);

            const mapPlayerCells = $grid.map((c, i) => c === player ? i : null).filter((c) => c !== null) as number[];
            const mapRobotCells = $grid.map((c, i) => c === robot ? i : null).filter((c) => c !== null) as number[];

            const mapGrid = Array.from(new Set([...mapPlayerCells, ...mapRobotCells]));
            const regPlayerRobotCells = new RegExp(`(${mapGrid.join('|')})`, 'g');

            const mapEmptyComboCells = combos
                .filter((combo) => regPlayerRobotCells.test(combo))
                .map((combo) => combo.replace(regPlayerRobotCells, ''))
                .join('')
                .split('')
                .map((n: string) => parseInt(n, 10));

            const levelMode = {
                easy: () => {
                    let randIndex = random(mapEmptyComboCells.length - 1);
                    return mapEmptyComboCells[randIndex];
                },
                difficult: () => {
                    if (mapPlayerCells.length === 1) {
                        const listWithoutCenter = [0, 2, 6, 8];
                        return mapPlayerCells.includes(center) ? listWithoutCenter[random(listWithoutCenter.length - 1)] : center;
                    }

                    let finalCell = null;

                    for (let c = 0; c < combos.length; c++) {
                        const combo = combos[c].split('').map((cell) => parseInt(cell, 10));

                        const checkRobotFilledCells = combo.filter((cell) => $grid[cell] === robot);
                        if (checkRobotFilledCells.length === 2) {
                            const emptyCell = combo.find((cell) => $grid[cell] === null);

                            if (Number.isInteger(emptyCell)) {
                                finalCell = emptyCell;
                                break;
                            }
                        }
                    }

                    if (finalCell === null) {
                        for (let c = 0; c < combos.length; c++) {
                            const combo = combos[c].split('').map((cell) => parseInt(cell, 10));

                            const checkPlayerFilledCells = combo.filter((cell) => $grid[cell] === player);
                            const emptyCellsWithRobot = combo.filter((cell) => $grid[cell] === null);

                            if (checkPlayerFilledCells.length === 2) {
                                const emptyCell = combo.find((cell) => $grid[cell] === null);

                                if (Number.isInteger(emptyCell)) {
                                    finalCell = emptyCell;
                                    break;
                                }
                            }

                            if (emptyCellsWithRobot.length === 2) {
                                finalCell = emptyCellsWithRobot[random(emptyCellsWithRobot.length - 1)];
                            }
                        }

                        if (finalCell === null) {
                            let randIndex = random(mapEmptyComboCells.length - 1);
                            return mapEmptyComboCells[randIndex];
                        }
                    }

                    return finalCell;
                }
            }
            let nextCell = levelMode[$level as 'easy' | 'difficult']() as number;

            const didPlayerWin = combos.some((combo) => (
                combo.split('').every((c) => $grid[parseInt(c, 10)] === player)
            ));

            if (didPlayerWin) {
                await wait(1000);
                result.set('win');
                stop.set(true);

                return true;
            }

            await wait(1000);

            grid.set(nextCell, robot);

            const didRobotWin = combos.some((combo) => (
                combo.split('').every((c) => $grid[parseInt(c, 10)] === robot)
            ));

            if (didRobotWin) {
                result.set('lose');
                stop.set(true);

                return true;
            }

            if (!didPlayerWin && !didRobotWin && $grid.every((c) => c !== null)) {
                result.set('draw');
                stop.set(true);

                return true;
            }

            stop.set(false);

            return false;
        }
    }
</script>

{#if $init}
    <Init />
{:else}
    <Result />
    <section class="grid {$result ? '__blur' : ''}" transition:fade>
        {#each $grid as cell, index}
            <button class="cell" type="button" on:click={handlePress(index)} disabled={!!cell || $stop}>
                <XO sign={cell || ''} />
            </button>
        {/each}
    </section>
{/if}

<style lang="scss">
    
    .grid {
        display: grid; 
        direction: ltr;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 0 0;
        grid-template-areas:
            ". . ."
            ". . ."
            ". . .";
        width: 75vh;
        height: 75vh;

        &.__blur {
            filter: blur(3px);
        }
    }

    .cell {
        border-bottom: 1px solid #333;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .2s ease-out;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;

        &:before {
            content: '';
            display: block;
            position: absolute;
            inset: 0;
            border-radius: 99em;
            transition: all .35s ease-in-out;
            transform: scale(0);
            background: rgba(255, 255, 255, 0.03);
            opacity: 0;
        }

        &:nth-of-type(2), &:nth-of-type(5), &:nth-of-type(8) {
            border-left: 1px solid #333;
            border-right: 1px solid #333;
        }
        
        &:nth-last-of-type(-n + 3) {
            border-bottom: 0;
        }

        &:after {
            content: "";
            display: block;
            padding-bottom: 94.5%;
        }

        &:disabled {
            cursor: default;
        }

        &:hover:not(:disabled) {
            &:before {
                transform: scale(0.75);
                opacity: .5;
            }
        }
    }
</style>
