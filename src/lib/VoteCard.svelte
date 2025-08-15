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
    img="/img/ang.png"
    imgAlt="Double chevron pointing right"
    header={url.host}
    {click}
    tabindex="0"
/>
