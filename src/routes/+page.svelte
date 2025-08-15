<script>
import CardContainer from "../lib/CardContainer.svelte";
import Card from "../lib/Card.svelte";
import VoteCard from "../lib/VoteCard.svelte";
import Button from "../lib/Button.svelte";
import openLink from "../util/openLink.js";

const voteSites = []

function openAllVoteSites() { for (const site of voteSites) { openLink(site) } }
</script>

<div class="homeImage"></div>

<div class="content">
    <div class="inner">
        <h2 id="features">Features</h2>
        <CardContainer>
            <Card
                img="/img/towny.png"
                imgAlt="Towny logo"
                header="Towny"
                body="With Towny, you can create towns and nations to protect your land and pool resources."
            />
            <Card
                    img="/img/slimefun.png"
                    imgAlt="Slimefun logo"
                    header="Slimefun"
                    body="Slimefun is like a tech modpack, it introduces a lot of machines and tools to gather resources."
            />
            <Card
                    img="/img/seasons.png"
                    imgAlt="An image of trees in Minecraft, split in half. On the left the trees are green and orange, on the right they're white and snowy."
                    header="Seasons"
                    body="In our main world, a seasons system modifies the look and feel of the world as days pass in game."
            />
            <Card
                    img="/img/dollar.png"
                    imgAlt="A dollar sign with a red slash through it"
                    header="Not Pay to Win"
                    body="We refuse to be like other servers that offer wildly pay to win ranks. Everything that can be bought through ranks is available in survival ranks."
            />
            <Card
                    img="/img/wrench.png"
                    imgAlt="Wrench icon"
                    header="Custom and Advanced"
                    body="We have multiple plugins written by us that make our server unique. We also have many premium plugins that enhance gameplay."
            />
        </CardContainer>

        <h2 id="vote">Vote</h2>
        <CardContainer>
            {#if voteSites.length > 0}
                {#each voteSites as voteSite}
                    <VoteCard link={voteSite} />
                {/each}
                <div class="openAll">
                    <Button action={openAllVoteSites}>
                        Open All
                    </Button>
                </div>
            {:else}
                <p>Currently, voting is unavailable.</p>
            {/if}
        </CardContainer>
    </div>
</div>

<style>
    .homeImage {
        height: 500px;
        width: 100%;
        background-image: url("/img/orchid_spawn_pillars.png");
        background-size: cover;
        background-position: center center;
        margin-top: -60px;
    }

    .content {
        margin: 45px 0 45px 0;

        .inner {
            display: flex;
            flex-direction: column;
            align-items: center;

            h2 {
                font-family: Commissioner, sans-serif;
            }
        }
    }

    .openAll {
        margin-top: 15px;
    }
</style>