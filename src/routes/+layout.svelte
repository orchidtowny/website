<script>
import Wordmark from "../lib/Wordmark.svelte";
</script>

<main>
    <header>
        <div class="inner">
            <Wordmark />
            <div class="links">
                <a href="/#vote">Vote</a>
                <a href="https://store.orchidmc.org">Store</a>
                <a href="https://discord.orchidmc.org">Discord</a>
            </div>
        </div>
    </header>

    <slot></slot>

    <footer>
        <div class="inner">
            <p>&copy; 2023-2025 Orchid Development</p>
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

    header .inner .links {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-left: 20px;

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

    header, footer, .content {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        max-width: 100vw;
    }
</style>