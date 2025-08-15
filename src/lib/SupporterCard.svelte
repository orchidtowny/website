<script>
    let {
        name = undefined,
        uuid = undefined
    } = $props()
</script>

<div class="supporterCard">
    <img class="playerHead" src="https://mc-heads.net/head/{uuid}" alt="{name}'s head" />
    <span class="name">{name}</span>
</div>

<style>
    .supporterCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 100px;

        .playerHead {
            height: 45px;
            width: 45px;
        }

        .name {
            font-weight: 600;
            margin-top: 5px;
        }
    }
</style>