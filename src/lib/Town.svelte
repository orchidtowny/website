<script>
    import Button from "../lib/Button.svelte";

    let {
        town = undefined
    } = $props()

    let buttonType = $state("")
</script>

{#snippet placeName(name)}
    <b>{name.replaceAll("_", " ")}</b>
{/snippet}

{#snippet townOpen(boolean)}
    {#if boolean}
        Yes
    {:else}
        No, ask for an invite
    {/if}
{/snippet}

{#snippet mayor(mayor)}
    <div class="mayor">
        <b>Mayor:</b>
        <img class="playerHead" src="https://mc-heads.net/head/{mayor.uuid}" alt="{mayor.name}'s head" />
        <span>{mayor.name}</span>
    </div>
{/snippet}

{#if town}
    <div class="town">
        <h2>{@render placeName(town.name)}</h2>

        {#if town.board && town.board !== "/t set board [msg]"}
            <p>
                <i>{town.board}</i>
            </p>
        {/if}

        {#if town.nation}
            <p>
                {#if town.capital}Capital{:else}Town{/if} of {@render placeName(town.nation.name)}<br />
            </p>
        {/if}

        <p>
            <b>Population:</b> {town.residents}
        </p>
        <p>
            <b>Size (chunks):</b> {town.size}
        </p>
        <p>
            <b>Open:</b> {@render townOpen(town.open)}
        </p>

        {@render mayor(town.mayor)}

        <div class="buttons">
            <Button to="https://map.orchidmc.org/#{town.spawn.world}:{Math.round(town.spawn.x)}:0:{Math.round(town.spawn.z)}:350:0:0:0:0:flat">
                Visit on map
            </Button>
            <Button type={buttonType}
                    action={() => {
                        navigator.clipboard.writeText("/t spawn "+town.name);
                        buttonType = "success";
                        setTimeout(() => { buttonType = "" }, 10000)
                    }}>
                {#if buttonType.length > 1}Copied!{:else}Copy command{/if}
            </Button>
        </div>
    </div>
{/if}

<style>
    .town {
        display: flex;
        flex-direction: column;
        max-width: 275px;
        margin: 0 25px;
        width: 100%;
        gap: 10px;

        h2, p {
            margin: 0;
        }

        h2 {
            b { font-weight: bold; }
        }

        .mayor {
            display: flex;
            align-items: center;
            gap: 10px;

            .playerHead {
                height: 20px;
                width: 20px;
            }
        }

        .buttons {
            display: flex;
            gap: 4px;
        }
    }
</style>