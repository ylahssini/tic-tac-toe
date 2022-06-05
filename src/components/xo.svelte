<script lang="ts">
    export let sign: string;
</script>

<div class="{sign}"></div>

<style lang="scss">
    @keyframes enter {
        0% {
            transform: scale(0);
            opacity: 0;
            border-color: turquoise;
        }

        70% {
            transform: scale(1.45);
        }

        100% {
            transform: scale(1);
            opacity: 1;
            border-color: white;
        }
    }

    .x {
        position: relative;
        width: 80%;
        height: 80%;
        animation: .5s ease-in-out 0s enter;

        &:before, &:after {
            background-color: chocolate;
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            height: 1px;
            width: 100%;
        }

        &:before {
            transform: rotateZ(-45deg);
        }

        &:after {
            transform: rotateZ(45deg);
        }
    }

    .o {
        border: 1px solid turquoise;
        border-radius: 100em;
        width: 70%;
        height: 70%;
        animation: .5s ease-in-out 0s enter;

        &:after {
            content: '';
            display: block;
            padding-bottom: 100%;
        }
    }
</style>
