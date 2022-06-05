<script>
    import { level } from '../store/store';
</script>

<fieldset>
    <label><input type="radio" name="level" id="easy" value="easy" bind:group={$level} /> <span>سهل</span></label>
    <label><input type="radio" name="level" id="difficult" value="difficult" bind:group={$level} /> <span>صعب</span></label>
</fieldset>

<style lang="scss">
    fieldset {
        border: 0;
    }

    label {
        cursor: pointer;
        display: inline-block;
        font-size: 2rem;
        font-family: 'Vibes', cursive;
        margin: 0 1rem;

        > span {
            &:before {
                content: '';
                background-color: rgba(255, 255, 255, 0);
                border-radius: 99em;
                border: 1px solid turquoise;
                display: inline-block;
                margin-left: 1rem;
                width: 25px;
                height: 25px;
                transition: all .2s ease-in-out;
            }
        }

        > input {
            display: none;

            &:checked + span:before {
                border-width: 8px;
                background-color: rgba(255, 255, 255, 1);
            }
        }

        &:hover {
            > span:before {
                border-width: 3px;
            }
        }
    }
</style>