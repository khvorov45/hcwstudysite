<script lang="ts">
  import Button from "../components/Button.svelte"
  import Select from "../components/Select.svelte"
  import { SITES } from "../lib/config"

  let siteSelected: any = undefined

  function handleSubmit() {
    console.log(`site ${siteSelected.short}`)
  }
</script>

<h1>Registration of interest</h1>

<form>
  <Select
    options={SITES}
    getLabel={(s) => s.long}
    label="Site"
    bind:selected={siteSelected}
    maxWidth="350px"
  />
  <br />
  <Button action={handleSubmit}>Submit</Button>
</form>

<style>
</style>
