<script lang="ts">
  import Nav from "../components/Nav.svelte"
  export let segment: string
</script>

<Nav {segment} />
<main class="scroll">
  <div class="content">
    <slot />
  </div>
</main>

<style>
  .scroll {
    height: calc(100vh - var(--size-nav));
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .content {
    margin-top: 1em;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
