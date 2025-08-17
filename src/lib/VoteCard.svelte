<script>
    import Card from "./Card.svelte";
    import openLink from "../util/openLink.js";

    let {
        link = undefined,
    } = $props()

    const url = new URL(link)

    function click() {
        openLink(link)
    }
</script>

<Card
    img="/img/ang.png"
    imgAlt="Double chevron pointing right"
    header={url.host}
    {click}
    tabindex="0"
/>
