<script lang="ts">
    export let sign: string;
</script>

<div class="{sign}"></div>

<style lang="scss">
    .x {
        position: relative;
        width: 80%;
        height: 80%;

        &:before, &:after {
            background-color: #fff;
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
        border: 1px solid #fff;
        border-radius: 100em;
        width: 70%;
        height: 70%;

        &:after {
            content: '';
            display: block;
            padding-bottom: 100%;
        }
    }
</style>