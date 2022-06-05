<script lang="ts">
    import { fade } from 'svelte/transition';
    import { grid, stopPlaying, result } from '../store/store';

    function handleReset() {
        grid.reset();
        stopPlaying.set(false);
        result.set(null);
    }
</script>

{#if $result}
    <div class="result" transition:fade>
        <strong class="{$result}">
            {#if $result === 'win'}
                ! لقد فزت
            {:else if $result === 'lose'}
                ! لقد خسرت
            {/if}
        </strong>

        <button type="result" on:click={handleReset}>محاولة أخرى</button>
    </div>
{/if}

<style lang="scss">
    .result {
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
            color: chocolate;
            font-size: 7rem;
            font-family: 'Vibes', cursive;
            font-weight: 400;
        }

        > button {
            border: 1px solid #333;
            border-radius: 50em;
            color: white;
            cursor: pointer;
            display: block;
            font-size: 1.5rem;
            padding: 2rem 4rem;
            transition: border-color .2s ease-in-out;

            &:hover {
                border-color: white;
            }
        }
    }
</style>
