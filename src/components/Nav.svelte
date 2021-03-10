<script lang="ts">
  import Button from "./Button.svelte"
  import Home from "./icons/Home.svelte"
  import { tooltip } from "../lib/tooltip"
  import Tooltip from "./Tooltip.svelte"
  import Search from "./icons/Search.svelte"
  import Registration from "./icons/Registration.svelte"
  import Popover from "./Popover.svelte"
  import Settings from "./icons/Settings.svelte"
  import Switch from "./Switch.svelte"
  import { theme, tooltips } from "../lib/state"

  export let segment: string

  const tooltipOpts = (
    text: string,
    left = "0px",
    height = "var(--size-nav)"
  ) => ({
    component: Tooltip,
    props: {
      height,
      top: "calc(100% + 1px)",
      left,
      text,
    },
  })

  let settingsVisible = false
  const toggleSettings = () => (settingsVisible = !settingsVisible)

  function toggleTheme() {
    $theme = darkMode ? "light" : "dark"
  }

  $: darkMode = $theme === "dark"
</script>

<nav>
  <div class="group">
    <div class="element" use:tooltip={tooltipOpts("Home")}>
      <a class:active={segment === "home"} href="home"><Home /></a>
    </div>
    <hr class="element" />
    <div class="element" use:tooltip={tooltipOpts("Registration of interest")}>
      <a
        class:active={segment === "registration-of-interest"}
        href="/registration-of-interest"><Registration /></a
      >
    </div>
  </div>
  <div class="group">
    <div class="element" use:tooltip={tooltipOpts("Search")}>
      <a class:active={segment === "search"} href="search"><Search /></a>
    </div>
    <hr class="element" />
    <div class="element">
      <div use:tooltip={tooltipOpts("Settings", "-20px", "0px")}>
        <Button variant="icon" action={toggleSettings}>
          <Settings />
        </Button>
      </div>
      <Popover
        visible={settingsVisible}
        top="calc(var(--size-nav) / 2)"
        left="-147px"
        ><Button variant="text" action={toggleTheme} width="140px"
          ><Switch checked={darkMode}>Dark mode</Switch></Button
        ><Button
          variant="text"
          action={() => ($tooltips = !$tooltips)}
          width="140px"><Switch checked={$tooltips}>Tooltips</Switch></Button
        ></Popover
      >
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
    transition: border-color var(--time-transition);
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
