<script>
    import Card from "./Card.svelte";

    let {
        link = undefined,
    } = $props()

    const url = new URL(link)

    function click() {

    }
</script>

<Card
    header={url.host}
    {click}
    tabindex="0"
/>
