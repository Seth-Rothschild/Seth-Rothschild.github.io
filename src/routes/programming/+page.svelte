<script>
  import { onMount } from "svelte";
  import ContentCard from "../../components/ContentCard.svelte";
  let ready = false;
  onMount(() => {
    setTimeout(() => {
      ready = true;
    }, 0);
  });
</script>

<div class="content">
  <h1 class="small">Programming</h1>
  <div class="small-divider" />
  <h3 class="small">Example Tools from Work</h3>
  <p>
    There's a large part of my day-to-day that's considered proprietary information, but a few of the tools I've made have been either disclosed as patents, or would not be considered proprietary. The consistent theme between these and the hobby projects is that I enjoy making tools that make life better.
  </p>
  <ContentCard order=0>
    <b>Retriever</b> is an application I made to help the team write and submit reports and patent disclosures. It has a Svelte frontend and Django backend, but the most interesting part is that it uses pandoc to convert from markdown (which the team does like using) into LaTeX templates that match required designs by the org. The upshot of this is that adoption is much higher than similar LaTeX attempts and people actively prefer to use the tool over Word.
  </ContentCard>
  <ContentCard order=1>
    <b>Springerdoodle</b> was a prototype application I made in Elm and Flask back in 2019 to manage access to remote machines. Noting that the default behavior of developers was to use username/password, this application took care of the mechanics of key transfer and setting up the ssh config. That prototype is associated with the patent <a href="https://patents.google.com/patent/US11489824B2/en?inventor=Seth+Jacob+Rothschild" target="_blank" rel="noopener noreferrer">US11489824B2</a>.
  </ContentCard>
  

  <h3 class="small">A few public projects</h3>
  <p>
    My Github page can be found <a
      href="https://github.com/Seth-Rothschild"
      target="_blank"
      rel="noopener noreferrer">here,</a> and I'm happy to talk about any of the projects in there. Here are a few of the more recent and interesting ones:
    </p>
  <ContentCard order="2">
    <a
      href="https://github.com/Seth-Rothschild/goban_irl"
      target="_blank"
      rel="noopener noreferrer">Goban IRL</a
    >
    This is an app that uses a webcam to track the state of a Go board using OpenCV.
    While I've seen a lot of sophisticated strategies for detecting stones with image
    recognition, the strategy here is to just use the color differential between
    black and white stones which is sufficient, cheap, and fast. As a proof of concept
    I was able to use this library to copy games between a physical board to a computer,
    but also between two computer boards.
  </ContentCard>
  <ContentCard order="3">
    <a
      href="https://github.com/Seth-Rothschild/player_pyano"
      target="_blank"
      rel="noopener noreferrer">Player Pyano</a
    >
    At home I'm housesitting a 1989 Yamaha Disklavier grand piano, which takes in
    floppy disks of MIDI and plays the song using solenoids built into the piano.
    Thankfully, MIDI hasn't really changed in the last 30 years. This is a webapp
    that I run on a raspberry pi to quickly create a playlist and send songs to the
    piano. The software also does adjustments to note velocity to account for the
    physical state of the piano.
  </ContentCard>
  <ContentCard order="4">
    <a
      href="https://github.com/Seth-Rothschild/wordle_strategy_evaluation"
      target="_blank"
      rel="noopener noreferrer">Wordle Strategy Evaluation</a
    >
    When everyone was playing Wordle, there was some speculation on what the optimal
    strategy would be. To quickly test out varying strategies I threw together a
    quick TDD Wordle implementation in Python to test a given strategy against the
    full word list. The oft-proposed strategy to select words by how often a letter
    appears in a particular position only scores an average of 3.81 guesses across
    the word set.
  </ContentCard>
</div>

<style>
  a {
    color: var(--primary);
    text-decoration: underline;
    font-weight: bold;
  }
</style>
