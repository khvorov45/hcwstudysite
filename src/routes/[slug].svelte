<script context="module" lang="ts">
  import { fetchParsed } from "../lib/md"

  export async function preload({ params }: { params: any }) {
    return await fetchParsed(this.fetch, params.slug)
  }
</script>

<script lang="ts">
  export let md: string
  import { SITES } from "../lib/config"
</script>

<div class="md">
  {@html md}
</div>

<footer>
  {#each SITES as site}
    <div class="logo-container {site.short}-container">
      <img
        alt="logo-{site.short}"
        src="logo-{site.short}.png"
        class="logo-{site.short}"
      />
    </div>
  {/each}
</footer>

<style>
  .md {
    text-align: justify;
    max-width: 56em;
    margin-left: auto;
    margin-right: auto;
  }
  footer {
    display: grid;
    grid-template-areas:
      "ad ad sd"
      "br br sd"
      "ml nc pr";
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  img {
    filter: invert(var(--invert-img));
    transition: filter var(--time-transition);
    max-width: 100%;
    max-height: 100%;
  }
  .adelaide-container {
    grid-area: ad;
    max-width: 500px;
    height: 80px;
  }
  .brisbane-container {
    grid-area: br;
    max-width: 500px;
    height: 55px;
  }
  .melbourne-container {
    grid-area: ml;
    height: 72px;
  }
  .newcastle-container {
    grid-area: nc;
    height: 72px;
  }
  .perth-container {
    grid-area: pr;
    height: 72px;
  }
  .sydney-container {
    grid-area: sd;
    height: 135px;
  }
  :global(li) {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  :global(p),
  :global(ul) {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  :global(a) {
    color: var(--color-primary-3);
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    transition: border-bottom var(--time-transition);
  }
  :global(a):hover,
  :global(a):focus {
    border-bottom: 1px solid var(--color-primary-3);
  }
  :global(hr) {
    color: var(--color-bg-2);
  }
</style>
