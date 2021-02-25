<script lang="ts">
  export let text = "tooltip"
  export let top: string = "0px"
  export let left: string = "0px"
  export let height: string = "0px"
</script>

<div
  class="container"
  style="transform: translate({0}px, {0}px);
  height: {height};"
>
  <div class="content" style="left: {left}; top: {top}">
    {text}
  </div>
</div>

<style>
  .container {
    position: absolute;
    z-index: 99;
    pointer-events: none;
    animation: appear var(--time-transition);
  }
  .content {
    position: relative;
    background-color: var(--color-bg-2);
    padding: 5px;
    color: var(--color-font-2);
  }
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
