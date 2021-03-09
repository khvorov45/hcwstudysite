<script lang="ts">
  import Link from "../components/text/Link.svelte"
  import { toggleTheme } from "../lib/theme"
</script>

<h1>Site map</h1>

<h2>Navigation</h2>

<p>Top-left:</p>

<ul>
  <li><Link href="/">Home</Link> (main page of this site)</li>
  <li>
    <Link href="/registration-of-interest">Registration of interest</Link>
  </li>
</ul>

<p>Top-right:</p>

<ul>
  <li><Link href="/search">Search</Link> (this page)</li>
  <li>
    <span class="theme-toggle" on:click={toggleTheme}
      >Theme switch (light/dark)</span
    >
  </li>
</ul>

<p>Other pages</p>

<ul><li><Link href="/for-participants">For participants</Link></li></ul>

<hr />

<p>Email: hcwcohortstudy@influenzacentre.org</p>

<p><Link href="https://github.com/khvorov45/hcwstudysite">Site source</Link></p>

<style>
  p,
  ul {
    font-size: 16px;
  }
  li {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .theme-toggle {
    cursor: pointer;
  }
  .theme-toggle:hover,
  .theme-toggle:focus {
    cursor: pointer;
    color: var(--color-font-2);
    transition: color var(--time-transition);
  }
</style>
