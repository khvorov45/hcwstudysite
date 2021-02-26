<script lang="ts">
  export let variant: "icon" | "text" = "text"
  export let action: () => void = () => {}
  export let active = false
  export let maxWidth = "auto"
  export let minWidth = "auto"
  export let disabled = false
</script>

<div
  style="max-width: {maxWidth}; min-width: {minWidth}"
  class:icon={variant === "icon"}
  class:text={variant === "text"}
  class:active
  on:click={action}
  on:keyup={(e) => e.key === "Enter" && action()}
  class:disabled
  tabindex="0"
>
  <slot />
</div>

<style>
  div {
    display: flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    transition: background-color var(--time-transition);
  }
  div:hover,
  div:focus {
    background-color: var(--color-bg-2);
  }
  div:active {
    background-color: var(--color-bg-3);
  }
  div.active {
    background-color: var(--color-primary-1);
  }
  .icon {
    border-radius: 100%;
    width: var(--size-icon-button);
    height: var(--size-icon-button);
  }
  .text {
    text-transform: uppercase;
    font-weight: bold;
    border: 1px solid var(--color-bg-2);
    padding: 5px;
  }
  div.disabled {
    color: var(--color-font-2);
    background-color: var(--color-bg-1);
    cursor: not-allowed;
  }
</style>
