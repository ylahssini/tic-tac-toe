<script lang="ts">
    import { fade } from 'svelte/transition';
    import { init } from '../store/store';
    import Level from './level.svelte';

    function handleStart() {
        init.set(false);
    }
</script>

<div transition:fade>
    <Level />
    <button type="button" class="btn" on:click={handleStart}>ابدا اللعب</button>
</div>

<style lang="scss">
    div {
        border: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 3rem;
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        text-align: center;
    }
</style>
