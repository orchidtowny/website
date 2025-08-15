<script>
import Button from "./Button.svelte";
</script>

<div class="homeImage">
    <div class="welcome">
        <div class="inner">
            <b>Welcome to Orchid!</b>
            <p>We're a Minecraft community dedicated to creating a fun, custom, and welcoming server for all.</p>
            <p>Below, you can see some of our features!</p>
            <div class="copyIp">
                <Button action={() => { navigator.clipboard.writeText("play.orchidmc.org"); }}>Copy IP</Button>
                <span>play.orchidmc.org</span>
            </div>
        </div>
    </div>
</div>


<style>
    :root {
        --home-image-height: 500px;
        --heavy-shadow: 0 1px 2px #000, 0 2px 4px #000, 0 2px 10px #000, 0 2px 20px #000, 0 2px 40px #000, 0 2px 60px #000;
    }

    .homeImage {
        height: var(--home-image-height);
        width: 100%;
        background-image: url("/img/orchid_spawn_pillars.png");
        background-size: cover;
        background-position: center center;
        margin-top: -60px;

        .welcome {
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            width: 100%;
            max-width: 100vw;

            .inner {
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-width: 1024px;
                width: 100%;

                box-sizing: border-box;
                margin-top: calc(var(--home-image-height) / 2);
                padding: 0 16px;

                p {
                    margin: 0;
                    font-size: 1.05rem;
                }

                b {
                    font-size: 1.25rem;
                }

                p, b {
                    color: var(--tx-1);
                    text-shadow: var(--heavy-shadow);
                }

                .copyIp {
                    display: flex;
                    align-items: center;
                    gap: 20px;

                    color: var(--tx-3);
                    text-shadow: var(--heavy-shadow);
                }
            }
        }
    }
</style>