<script lang="ts">
  import Link from "../components/text/Link.svelte"
</script>

<h1>Site map</h1>

<ul>
  <li><Link href="/">Home (main page of this site)</Link></li>
  <li>
    <Link href="/registration-of-interest">Registration of interest</Link>
  </li>
  <li><Link href="/search">Search (this page)</Link></li>
  <li><Link href="/for-participants">For participants</Link></li>
</ul>

<hr />

<h1>External</h1>

<ul>
  <li>
    <Link href="https://reports.hcwflustudy.com">Reports</Link>
  </li>
  <li>
    <Link href="https://github.com/khvorov45/hcwstudysite">Site source</Link>
  </li>
</ul>

<style>
  ul {
    font-size: 16px;
  }
  li {
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
