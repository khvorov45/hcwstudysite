<script lang="ts">
  import TextContainer from "../components/text/TextContainer.svelte"
  import Link from "../components/text/Link.svelte"
</script>

<TextContainer>
  <h1>For participants</h1>
  <h2>What do my antibody titre results mean?</h2>
  <p>
    Antibody titres measure the amount of antibodies in your blood. Commonly,
    antibody titres of at least 40 indicate protection against the vaccine virus
    strain. This is sometimes called seroprotection or seropositivity. The
    degree of protection against the vaccine virus strain can vary by a number
    of factors including the level of exposure to influenza.
  </p>

  <p>Further information on influenza vaccines can be found below:</p>

  <ul>
    <li>
      <Link href="https://www.cdc.gov/flu/vaccines-work/vaccineeffect.htm"
        >Vaccine Effectiveness: How Well Do the Flu Vaccines Work?</Link
      >
    </li>
    <li>
      <Link
        href="https://www.niaid.nih.gov/diseases-conditions/influenza-vaccines"
        >Seasonal influenza vaccine</Link
      >
    </li>
  </ul>
  <hr />
</TextContainer>
