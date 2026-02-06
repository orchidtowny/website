<script>
    let {
        type = undefined,
        to = undefined,
        action = () => {}
    } = $props()
</script>

{#if to}
    <a class={"button" + (type !== undefined ? " "+type : "")} href={to}>
        <slot />
    </a>
{:else}
    <button class={"button" + (type !== undefined ? " "+type : "")} onclick={() => action()}>
        <slot />
    </button>
{/if}

<style>
    .button {
        display: flex;
        padding: 8px 14px;
        width: fit-content;

        color: var(--tx-2);
        background-color: var(--bg-2);
        border: none;
        border-radius: 10px;

        font-size: 0.95rem;
        box-shadow: var(--funky-effect);

        transition: transform 0.1s;
        text-decoration: none;
    }

    .button.success {
        color: var(--bg-3);
        background-color: var(--success);
    }

    .button:hover {
        transform: scale(0.95);
        cursor: pointer;
    }
</style>