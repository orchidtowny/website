<script>
import Wordmark from "../lib/Wordmark.svelte";
</script>

<main>
    <header>
        <div class="inner">
            <Wordmark />
            <div class="links">
                <a href="/#vote">Vote</a>
                <a href="https://store.orchidmc.org">Support</a>
                <a href="https://discord.orchidmc.org">Discord</a>
            </div>
        </div>
    </header>

    <slot></slot>

    <footer>
        <div class="inner">
            <p>&copy; 2022-2026 Orchid Development &bull; play.orchidmc.org</p>
        </div>
    </footer>
</main>

<style>
    header {
        position: sticky;
        top: 0;

        display: flex;
        align-items: center;
        padding: 12px 16px;

        background-color: var(--bg-2-99);
        backdrop-filter: blur(10px);
    }

    header .inner {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    header .inner .links {
        float: right;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-left: auto;

        a {
            color: var(--tx-2);
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
            text-decoration-color: var(--orchid-50);
        }
    }

    footer .inner p {
        width: 100%;
        text-align: center;
    }

    /* Consistent Layout Rules */

    .inner {
        display: flex;
        max-width: 1024px;
        width: 100%;
    }

    header, footer {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        max-width: 100vw;
    }
</style>