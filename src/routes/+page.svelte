<script>
    import CardContainer from "../lib/CardContainer.svelte";
    import Card from "../lib/Card.svelte";
    import VoteCard from "../lib/VoteCard.svelte";
    import Button from "../lib/Button.svelte";
    import openLink from "../util/openLink.js";
    import HomeImage from "../lib/HomeImage.svelte";

    import staff from '../lib/assets/staff.json' with { type: "json" }
    import supporters from '../lib/assets/supporters.json' with { type: "json" }
    import voteSites from '../lib/assets/voteSites.json' with { type: "json" }
    import StaffCard from "../lib/StaffCard.svelte";
    import SupporterCard from "../lib/SupporterCard.svelte";
    import Town from "../lib/Town.svelte";

    let loadingTowns = $state(true)

    const endpoint = "https://towny.orchidmc.org/api/towns"
    let towns = $state([])

    let indexPush = 0
    let visibleTowns = $state([])

    window.fetch(endpoint).then(async (r) => {
        if (!r.ok) return;

        towns = (await r.json())
            .sort((a, b) => a.residents - b.residents)
            .sort((a, b) => a.size - b.size)
            .reverse()

        fetchMoreTowns()

        loadingTowns = false
    })

    function fetchMoreTowns() {
        let step = 4;

        if ((indexPush + step) > towns.length)
            step = towns.length - indexPush;

        for (let i = 0; i < step; i++) {
            visibleTowns.push(towns[i + indexPush])
        }

        indexPush += step
    }

    function openAllVoteSites() { for (const site of voteSites) { openLink(site) } }
</script>

<HomeImage />

<div class="pageContent">
    <div class="inner">
        <h2 id="about">Features</h2>
        <CardContainer>
            <Card
                    header={"Custom SMP"}
                    body={"We have towns and nations, custom fishing, farming, and enchantments, a job and skills system, a" +
                 " ranks system, and an assortment of quality of life and fun features."}
            />
            <Card
                    header={"Player Oriented Economy"}
                    body={"You can create chest shops, list items on the auction house, or do jobs to earn money. Certain" +
                     " items like fish and custom farming goods can be sold to the server for more. We also have an admin" +
                      " shop to ensure that theres better access to certain resources, so there's nothing that's inaccessible" +
                       " to builders."}
            />
            <Card
                    header={"Web Map"}
                    body={"We have a web map that tracks towns and nations, and shows off our world's custom generation."}
            />
            <Card
                header={"Community First Moderation"}
                body={"We want everyone to enjoy Orchid, so we have zero tolerance for griefing, stealing, bigotry, or anything else that worsens playing for our community."}
            />
        </CardContainer>

        <h2 id="vote">Vote</h2>
        <CardContainer>
            {#if voteSites.length > 0}
                {#each voteSites as voteSite}
                    <VoteCard link={voteSite} />
                {/each}
            {:else}
                <p>Currently, voting is unavailable.</p>
            {/if}
        </CardContainer>
        <div class="openAll">
            <Button action={openAllVoteSites}>
                Open All
            </Button>
        </div>

        <h2 id="towns">Towns</h2>
        <CardContainer>
            <div class="status">
                {#if loadingTowns}
                    <span>Loading...</span>
                {:else}
                    <span>There are {towns.length} towns, {visibleTowns.length} shown</span>
                {/if}
            </div>

            <CardContainer>
                {#each visibleTowns as town}
                    <Town {town} />
                {/each}
            </CardContainer>

            {#if visibleTowns.length < towns.length}
                <Button action={fetchMoreTowns}>
                    Load More...
                </Button>
            {/if}
        </CardContainer>

        {#if staff.length > 0}
            <h2>Staff Team</h2>
            <CardContainer>
                {#each staff as staffMember}
                    <StaffCard name={staffMember.name} uuid={staffMember.uuid} rank={staffMember.rank} />
                {/each}
            </CardContainer>
        {/if}

        {#if supporters.length > 0}
            <h2>Supporters</h2>
            <CardContainer>
                {#each supporters as supporter}
                    <SupporterCard name={supporter.name} uuid={supporter.uuid} />
                {/each}
            </CardContainer>
            <p class="thanks">Thank you so much for supporting our server!</p>
        {/if}
    </div>
</div>

<style>
    .townStatus {
        margin-bottom: 10px;
    }

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
    }

    .thanks, .openAll {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        margin-top: 35px;
    }
</style>