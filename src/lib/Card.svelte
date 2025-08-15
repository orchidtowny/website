<script>
    let {
        img = undefined,
        imgAlt = undefined,
        header = undefined,
        body = undefined,
        tabindex = -1,
        click = () => {},
    } = $props()
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div class="card" onclick={() => click()} {tabindex} role={(tabindex > -1) ? `link` : `div`}>
    <div class="header">
        {#if img !== undefined}
            <img src={img} alt={imgAlt} title={imgAlt} />
        {/if}
        {#if header !== undefined}
            <h3>{header}</h3>
        {/if}
    </div>
    {#if body !== undefined}
        <p>{body}</p>
    {/if}
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        max-width: 275px;
        margin: 0 25px;
        width: 100%;

        .header {
            display: flex;
            align-items: center;
            gap: 10px;

            img {
                width: 40px;
                height: 40px;
                border-radius: 8px;
                border: 1px solid var(--bg-3-50);
                background-color: var(--bg-2-50);
            }

            h3 {
                margin: 0;
            }
        }
    }
</style>