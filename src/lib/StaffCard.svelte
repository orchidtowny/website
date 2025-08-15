<script>
    let {
        name = undefined,
        uuid = undefined,
        rank = undefined
    } = $props()
</script>

<div class="staffCard">
    <img class="playerHead" src="https://mc-heads.net/head/{uuid}" alt="{name}'s head" />
    <span class="name">{name}</span>
    <span class="rank">{rank}</span>
</div>

<style>
    .staffCard {
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

        .rank {
            font-size: .8rem;
            text-transform: capitalize;
        }
    }
</style>