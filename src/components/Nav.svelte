<script lang="ts">
  import Button from "./Button.svelte"
  import Home from "./icons/Home.svelte"
  import Report from "./icons/Report.svelte"
  import Help from "./icons/Help.svelte"
  import ThemeSwitch from "./icons/ThemeSwitch.svelte"
  import { tooltip } from "../lib/tooltip"
  import Tooltip from "./Tooltip.svelte"
  import { toggleTheme } from "../lib/theme"
  import Search from "./icons/Search.svelte"

  export let segment: string

  const tooltipOpts = (text: string, left = "0px") => ({
    component: Tooltip,
    props: {
      height: "var(--size-nav)",
      top: "calc(100% + 1px)",
      left,
      text,
    },
  })
</script>

<nav>
  <div class="group">
    <div class="element" use:tooltip={tooltipOpts("Home")}>
      <a class:active={segment === "home"} href="home"><Home /></a>
    </div>
    <div class="element" use:tooltip={tooltipOpts("Reports")}>
      <a href="https://reports.hcwflustudy.com"><Report /></a>
    </div>
    <hr class="element" />
  </div>
  <div class="group">
    <div class="element" use:tooltip={tooltipOpts("Search")}>
      <a class:active={segment === "search"} href="search"><Search /></a>
    </div>
    <hr class="element" />
    <div class="element" use:tooltip={tooltipOpts("Switch theme", "-50%")}>
      <Button variant="icon" action={toggleTheme}><ThemeSwitch /></Button>
    </div>
  </div>
</nav>

<style>
  :root {
    --size-nav-border: 2px;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(var(--size-nav) - var(--size-nav-border));
    border-bottom: var(--size-nav-border) solid var(--color-bg-2);
    font-weight: 350;
  }

  .group,
  .element {
    display: flex;
    align-items: center;
    height: var(--size-nav);
  }

  .element {
    padding-left: 5px;
    height: var(--size-nav);
  }

  .group:last-child > .element:last-child {
    padding-right: 5px;
  }

  a:hover,
  a:focus {
    border-bottom: 2px solid var(--color-primary-3-fade);
  }

  a {
    text-decoration: none;
    text-transform: capitalize;
    height: calc(var(--size-nav) - var(--size-nav-border));
    text-align: center;
    line-height: var(--size-nav);
    border-bottom: var(--size-nav-border) solid rgba(0, 0, 0, 0);
    transition: border-bottom var(--time-transition);
  }

  a.active {
    border-bottom: 2px solid var(--color-primary-3);
  }

  hr.element {
    padding: 0;
    margin-left: 5px;
    margin-right: 5px;
    color: var(--color-bg-2);
    height: calc(var(--size-nav) - 1px);
  }
</style>
