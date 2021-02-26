<script lang="ts">
  export let options: any[]
  export let label: string
  export let selected: any
  export let getLabel: (x: any) => string

  export let maxWidth: string = "auto"
  export let minWidth = "auto"
  export let width = "auto"

  let optionsVisible = false
</script>

<div
  class="container"
  class:non-empty={selected !== undefined}
  style="max-width: {maxWidth}; min-width: {minWidth}; width: {width}"
>
  <div class="label" on:click={() => (optionsVisible = !optionsVisible)}>
    <div class="name">
      {label}
    </div>
    <div class="selected" class:placeholder={selected === undefined}>
      {selected ? getLabel(selected) : "select site..."}
    </div>
  </div>
  {#if optionsVisible}
    <div class="options-container">
      <div class="options">
        {#each options as option}
          <div
            class="option"
            on:click={() => {
              optionsVisible = false
              selected = option
            }}
          >
            {getLabel(option)}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  :root {
    --size-container-padding: 5px;
  }
  .container {
    cursor: pointer;
    border: 1px solid var(--color-bg-2);
    padding: var(--size-container-padding);
    transition: background-color var(--time-transition);
    transition: border-color var(--time-transition);
  }
  .container.non-empty {
    border-color: var(--color-primary-1);
  }
  .options-container {
    position: absolute;
    z-index: 50;
    padding: var(--size-container-padding);
  }
  .options {
    position: relative;
    padding: var(--size-container-padding);
    border: 1px solid var(--color-bg-2);
    background-color: var(--color-bg-1);
  }
  .selected {
    white-space: pre;
    overflow: hidden;
  }
  .selected.placeholder {
    color: var(--color-font-2);
  }
  .option:hover,
  .option:focus,
  .container:hover,
  .container:focus {
    background-color: var(--color-bg-2);
  }
</style>
