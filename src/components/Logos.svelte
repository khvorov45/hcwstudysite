<script lang="ts">
  import { SITES } from "../lib/config"
</script>

<div class="logos">
  {#each SITES as site}
    <div class="logo-container {site.short}-container">
      <img
        alt="logo-{site.short}"
        src="logo-{site.short}.png"
        class="logo-{site.short}"
      />
    </div>
  {/each}
</div>

<style>
  .logos {
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
</style>
