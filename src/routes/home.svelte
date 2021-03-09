<script lang="ts">
  import Logos from "../components/Logos.svelte"
  import TextContainer from "../components/text/TextContainer.svelte"
  import Link from "../components/text/Link.svelte"
  import { SITES } from "../lib/config"
</script>

<TextContainer>
  <h1>NIH HCW Flu Study</h1>

  <h2>About</h2>

  <p>
    Six hospitals across Australia are conducting a research study in
    collaboration with the <Link href="http://influenzacentre.org"
      >World Health Organisation (WHO) Collaborating Centre for Reference and
      Research on Influenza</Link
    >
    and the
    <Link href="https://www.lshtm.ac.uk"
      >London School of Hygiene and Tropical Medicine in the UK</Link
    >. The study aims to examine the immune response to influenza vaccination
    among hospital workers by measuring antibody levels in blood before and
    after vaccination. The study will also examine the risk of infection after
    vaccination by collecting nasal swabs and blood samples from health care
    workers who develop flu-like illness.
  </p>

  <p>The participating hospitals are:</p>
  <ul>
    {#each SITES as site}
      <li><Link href={site.link}>{site.long}</Link></li>
    {/each}
  </ul>

  <p>
    The research study is funded by the US National Institutes of Health grant
    number
    <code>1R01AI141534-01A1</code>. The US National Institutes of Health has
    also funded a research addendum to study SARS-CoV-2 in the health care
    worker cohort, grant number <code>3R01AI141534-01A1S1 REVISED</code>
  </p>

  <hr />

  <h2>Can I join?</h2>

  <p>
    Adults who are eligible for the free flu vaccine campaigns at the
    participating hospitals are invited to join. We especially need those not
    intending to be vaccinated and those who will be getting the flu vaccine for
    the first time. There are no restrictions on the health care worker roles
    that can be recruited into the study. All hospital staff, including
    clinical, research, administrative and support staff are welcome.
  </p>

  <h3>Eligibility criteria</h3>

  <ul>
    <li>
      Personnel (including staff, honorary staff, students and volunteers)
      located at a participating hospital or healthcare service at the time of
      recruitment who are eligible for the hospital’s free vaccination programme
    </li>
    <li>Be aged ≥18 years old and ≤60 years old</li>
    <li>Have a mobile phone that can receive and send SMS messages</li>
    <li>Be willing and able to provide blood samples</li>
    <li>Be available for follow-up over the next 7 months</li>
    <li>Be able and willing to complete the informed consent process</li>
  </ul>

  <hr />

  <h2>What's involved?</h2>

  <ul>
    <li>
      Participation will involve an initial visit before your vaccine, and
      follow up visits. The number of follow up visits depends on the arm of the
      study you enter. Most participants will have not more than 3 follow up
      visits, at approximately 7 days, 14 days and 7 months after vaccination.
      At each of these visits you will have a blood sample taken
    </li>
    <li>
      You will be asked to complete weekly symptom diaries (in form of an online
      survey)
    </li>
    <li>
      If you develop flu-like illness during the study, you will be asked to
      collect a nasal and/or throat swab for testing. If you test positive for
      flu or COVID-19, you will be asked to give additional samples during and
      after your illness
    </li>
    <li>
      Each time you are seen for a blood sample, you will be given a $10 voucher
      as compensation for your time
    </li>
    <li>
      The study will run for 4 years collecting samples from 2020 to 2023. The
      total time commitment for participating in this study is approximately 4
      hours per year
    </li>
    <li>
      Participation is voluntary and you will be free to withdraw at any time.
    </li>
  </ul>

  <hr />

  <h2>Registration of interest</h2>

  <p>
    If you are interested in participating, please{" "}<Link
      href="/registration-of-interest">complete the form</Link
    >
  </p>

  <hr />

  <h2>Principal investigators</h2>

  <h3>Coordinating sites</h3>

  <ul>
    <li>
      <Link href="https://www.doherty.edu.au"
        >Peter Doherty Institute for Infection and Immunity, Melbourne, VIC</Link
      >
    </li>
    <ul>
      <li>
        <Link href="https://www.doherty.edu.au/people/dr-sheena-sullivan"
          >A/Prof Sheena Sullivan</Link
        >
      </li>
      <li>
        <Link href="https://www.doherty.edu.au/people/dr-annette-fox"
          >Dr Annette Fox</Link
        >
      </li>
    </ul>
    <li>
      <Link href="https://www.lshtm.ac.uk"
        >London School of Hygiene and Tropical Medicine, UK</Link
      >
    </li>
    <ul>
      <li>
        <Link href="https://www.lshtm.ac.uk/Linkboutus/people/kucharski.adam"
          >A/Prof Adam Kucharski</Link
        >
      </li>
    </ul>
  </ul>

  <h3>Participating sites</h3>

  <ul>
    {#each SITES as site}
      <li><Link href={site.link}>{site.long}</Link></li>
      <ul><li>{site.investigator}</li></ul>
    {/each}
  </ul>

  <hr />

  <h2>Study coordinators</h2>

  <ul>
    {#each SITES as site}
      <li><Link href={site.link}>{site.long}</Link></li>
      <ul>
        <li>{site.coordinator.name}</li>
        <ul>
          <li>
            Email: <Link href="mailto:{site.coordinator.email}"
              >{site.coordinator.email}</Link
            >
          </li>
          <li>Phone: {site.coordinator.phone}</li>
        </ul>
      </ul>
    {/each}
  </ul>

  <hr />

  <h2>For participants</h2>

  <p>
    See <Link href="/for-participants">here</Link> for information on how to interpret
    your antibody results.
  </p>

  <hr />
</TextContainer>

<footer>
  <Logos />
</footer>

<style>
  li {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  p,
  ul {
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>
