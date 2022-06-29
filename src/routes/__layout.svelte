<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200&family=Vibes&display=swap" rel="stylesheet" />
    <title>تيك تاك تو</title>
</svelte:head>

<main>
    <a href="https://github.com/ylahssini/tic-tac-toe" target="_blank" rel="noreferrer" class="corner">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 250 250" fill="#11121c">
            <path d="M0 0l115 115h15l12 27 108 108V0z" fill="#fff"/>
            <path class="octo-arm" d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16" style="-webkit-transform-origin: 130px 106px; transform-origin: 130px 106px"/>
            <path class="octo-body" d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"/>
        </svg>
    </a>

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

    .corner {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;
    }
</style>
