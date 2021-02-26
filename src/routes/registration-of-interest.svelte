<script lang="ts">
  import Button from "../components/Button.svelte"
  import InputField from "../components/InputField.svelte"
  import MultipleChoice from "../components/MultipleChoice.svelte"
  import Select from "../components/Select.svelte"
  import { SITES } from "../lib/config"

  let siteSelected: any = undefined
  let screeningAge = undefined

  let name = ""

  $: eligible = siteSelected !== undefined && screeningAge === "yes"

  $: canSubmit = eligible && name !== ""

  function handleSubmit() {
    if (!canSubmit) {
      return
    }
    console.log(
      `site ${siteSelected?.short}
age good ${screeningAge}
name ${name}`
    )
  }
</script>

<form>
  <h1>Registration of interest</h1>
  <div class="questions eligibility">
    <Select
      options={SITES}
      getLabel={(s) => s.long}
      label="Site"
      bind:selected={siteSelected}
      minWidth="350px"
      maxWidth="350px"
    />
    <MultipleChoice
      question="Are you between 18 and 60 years of age?"
      options={["yes", "no"]}
      bind:selected={screeningAge}
    />
  </div>
  <br />
  <div class="questions registration">
    <InputField bind:value={name} label="Name" />
  </div>
  <br />
  <Button action={handleSubmit} maxWidth="100px" disabled={!canSubmit}
    >Submit</Button
  >
</form>

<style>
  form {
    min-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
  }
  .questions {
    display: flex;
    flex-wrap: wrap;
  }
  :global(.questions > *) {
    margin-bottom: 20px;
    margin-right: 20px;
  }
  :global(.questions > *:last-child) {
    margin-bottom: 0;
    margin-right: 0;
  }
  br {
    margin-top: 20px;
  }
</style>