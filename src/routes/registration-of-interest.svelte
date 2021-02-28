<script lang="ts">
  import { onMount } from "svelte"

  import Button from "../components/Button.svelte"
  import InputField from "../components/InputField.svelte"
  import MultipleChoice from "../components/MultipleChoice.svelte"
  import Select from "../components/Select.svelte"
  import { apireq } from "../lib/api"
  import { SITES } from "../lib/config"
  import { detectScrollbarWidth } from "../lib/util"

  let scrollbarWidth
  onMount(() => (scrollbarWidth = detectScrollbarWidth()))

  let siteSelected: any = undefined
  let screeningAge = undefined
  let isStaff = undefined

  let name = ""
  let mobile = ""
  let email = ""

  let submitResult = {
    isLoading: false,
    error: undefined as string | undefined,
    done: false,
  }

  $: eligible =
    siteSelected !== undefined && screeningAge === "yes" && isStaff === "yes"

  $: canSubmit = eligible && (email !== "" || mobile !== "")

  function handleSubmit() {
    if (!canSubmit) {
      return
    }
    submitResult.isLoading = true
    apireq<void>({
      path: "registration-of-interest",
      method: "POST",
      body: [
        {
          site: siteSelected.short,
          name: name === "" ? null : name,
          mobile: mobile === "" ? null : mobile,
          email: email === "" ? null : email,
          date: new Date(),
        },
      ],
    })
      .then(() => {
        submitResult.isLoading = false
        submitResult.done = true
      })
      .catch((e) => {
        submitResult.isLoading = false
        submitResult.error = e.message
      })
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
      minWidth="275px"
      maxWidth="500px"
      width="calc(100vw - 20px - {scrollbarWidth}px"
    />
    <MultipleChoice
      question="Are you a staff, volunteer, student or honorary personnel at the selected site eligible for the hospital's free vaccination program?"
      options={["yes", "no"]}
      bind:selected={screeningAge}
      maxWidth="500px"
    />
    <MultipleChoice
      question="Are you between 18 and 60 years of age?"
      options={["yes", "no"]}
      bind:selected={isStaff}
      maxWidth="500px"
    />
  </div>
  <br />
  <div class="questions registration">
    <InputField bind:value={name} label="Name" />
    <InputField bind:value={mobile} label="Mobile" />
    <InputField bind:value={email} label="Email" />
  </div>
  <br />
  <Button
    action={handleSubmit}
    maxWidth="100px"
    disabled={!canSubmit || submitResult.done}>Submit</Button
  >
</form>

<style>
  form {
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
  }
  :global(.questions > *) {
    margin-bottom: 20px;
  }
  :global(.questions > *:last-child) {
    margin-bottom: 0;
  }
  br {
    margin-top: 20px;
  }
</style>
