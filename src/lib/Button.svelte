<script>
    let {
        type = undefined,
        action = () => {}
    } = $props()
</script>

<button class={"button" + (type !== undefined ? " "+type : "")} onclick={() => action()}>
    <slot />
</button>

<style>
    .button {
        display: flex;
        padding: 8px 14px;

        color: var(--tx-2);
        background-color: var(--bg-2);
        border: none;
        border-radius: 10px;

        font-size: 0.95rem;
        box-shadow: var(--funky-effect);

        transition: transform 0.1s;
    }

    .button:hover {
        transform: scale(0.95);
        cursor: pointer;
    }
</style>