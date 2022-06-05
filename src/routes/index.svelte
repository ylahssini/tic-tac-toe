<script lang="ts">
    import XO from '../components/xo.svelte';
    import '../app.css';

    const player = 'o';
    const robot = 'x';

    let stopPlaying = false;
    let result: 'win' | 'lose' | null = null;

    let grid = Array(9).fill(null);
    const combos = ['012', '345', '678', '036', '147', '258', '048', '246'];

    function wait(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function handlePress(cell: number) {
        return async () => {
            stopPlaying = true;
            grid[cell] = player;

            const mapPlayerCells = grid.map((c, i) => c === player ? i : null).filter((c) => c !== null) as number[];
            const mapRobotCells = grid.map((c, i) => c === robot ? i : null).filter((c) => c !== null) as number[];

            const mapGrid = Array.from(new Set([...mapPlayerCells, ...mapRobotCells]));
            const regPlayerRobotCells = new RegExp(`(${mapGrid.join('|')})`, 'g');

            const mapEmptyComboCells = combos
                .filter((combo) => regPlayerRobotCells.test(combo))
                .map((combo) => combo.replace(regPlayerRobotCells, ''))
                .join('')
                .split('')
                .map((n: string) => parseInt(n, 10));

            const randomCell = Math.floor(Math.random() * (mapEmptyComboCells.length - 1) + 1);

            await wait(1000);

            grid[mapEmptyComboCells[randomCell]] = robot;

            stopPlaying = false;
        }
    }

    function handleReset() {
        grid = Array(9).fill(null);
    }
</script>

<div class="result">
    <strong>
        {#if result === 'win'}
            لقد فزت
        {:else if result === 'lose'}
            لقد خسرت
        {/if}
    </strong>

    <button type="result" on:click={handleReset}>محاولة أخرى</button>
</div>

<section>
    {#each grid as cell, index}
        <button class="cell" type="button" on:click={handlePress(index)} disabled={!!cell || stopPlaying}>
            <XO sign={cell || ''} />
        </button>
    {/each}
</section>

<style lang="scss">
    section {
        display: grid; 
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 0 0;
        grid-template-areas:
            ". . ."
            ". . ."
            ". . .";
        width: 75vh;
        height: 75vh;
    }

    .result {
        display: none;
    }

    .cell {
        border-bottom: 1px solid #333;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .2s ease-out;
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        cursor: pointer;

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