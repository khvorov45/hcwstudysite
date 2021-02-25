<script context="module" lang="ts">
  import { fetchParsed } from "../lib/md"

  export async function preload({ params }: { params: any }) {
    return await fetchParsed(this.fetch, params.slug)
  }
</script>

<script lang="ts">
  export let md: string
</script>

{@html md}

<style>
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
