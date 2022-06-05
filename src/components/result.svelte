<script lang="ts">
    import { fade } from 'svelte/transition';
    import { grid, stop, result } from '../store/store';
    import Level from './level.svelte';

    function handleReset() {
        grid.reset();
        stop.set(false);
        result.set(null);
    }
</script>

{#if $result}
    <div transition:fade>
        <strong class="__{$result}">
            {#if $result === 'win'}
                لقد فزت !
            {:else if $result === 'lose'}
                لقد خسرت !
            {:else if $result === 'draw'}
                تعادل
            {/if}
        </strong>

        <Level />

        <button type="result" on:click={handleReset} class="btn">محاولة أخرى</button>
    </div>
{/if}

<style lang="scss">
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 3rem;
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        z-index: 2;

        > strong {
            font-size: 7rem;
            font-family: 'Vibes', cursive;
            font-weight: 400;

            &.__win {
                color: cyan;
            }

            &.__lose {
                color: chocolate;
            }

            &.__draw {
                color: aliceblue;
            }
        }
    }
</style>
