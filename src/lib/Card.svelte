<script>
    let {
        img,
        imgAlt,
        header,
        body
    } = $props()
</script>

<div class="card">
    <div class="header">
        {#if img !== undefined}
            <img src={img} alt={imgAlt} />
        {/if}
        {#if header !== undefined}
            <h3>{header}</h3>
        {/if}
    </div>
    {#if body !== undefined}
        <p>{body}</p>
    {/if}
</div>

