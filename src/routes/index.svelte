<script lang="ts">
    import XO from '../components/xo.svelte';
    import '../app.css';

    const player = 'o';
    const auto = 'x';

    const grid = Array(9).fill(null);
    const combos = ['012', '345', '678', '036', '147', '258', '048', '246'];

    function handlePress(cell: number) {
        return () => {
            grid[cell] = player;
        }
    }
</script>

<section>
    {#each grid as cell, index}
        <button type="button" on:click={handlePress(index)} disabled={!!cell}>
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

    button {
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

        &:hover {
            &:before {
                transform: scale(0.75);
                opacity: .5;
            }
        }
    }
</style>