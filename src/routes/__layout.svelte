<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200&family=Vibes&display=swap" rel="stylesheet" />
    <title>تيك تاك تو</title>
</svelte:head>

<main>
    <header>
        <h1>تيك تاك تو</h1>
        <span>من تصميم <a href="https://ylahssini.vercel.app" target="_blank" rel="noreferrer">يوسف الحسيني</a></span>
    </header>

    <div>
        <slot></slot>
    </div>
</main>

<style lang="scss">
    main {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 0.2fr 2.5fr;
        gap: 3rem 3rem;
        grid-template-areas:
            "header"
            "content";
        height: 100vh;
        text-align: center;
        padding: 3rem;
    }

    header {
        display: inline-block;
        grid-area: header;
    }

    h1 {
        font-size: 7rem;
        font-family: 'Vibes', cursive;
        font-weight: 400;
    }

    span {
        color: #eee;
        display: inline-block;
        font-size: 1.1rem;
        font-weight: 400;
        margin: -1rem 0 0 -5rem;
        text-align: center;
    }

    a {
        color: turquoise;
        text-decoration: none;
        transition: all .2s ease-out;

        &:hover {
            color: cyan;
        }
    }

    div {
        grid-area: content;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
</style>
