<script>
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import "../app.css";
  let innerWidth = 1000;
  let ready = false;
  let navVisible = false;

  const toggleReady = () => {
    ready = false;
    navVisible = false;
    setTimeout(() => {
      ready = true;
    }, 0);
  };

  onMount(() => {
    setTimeout(() => {
      ready = true;
    }, 0);
  });
</script>

<svelte:window bind:innerWidth />
{#if innerWidth < 950}
  <nav>
    <div class="max" />
    <button
      on:click={() => {
        navVisible = !navVisible;
      }}
      class="button border"
    >
      <i>menu</i>
    </button>
  </nav>
  {#if navVisible}
    <nav
      transition:fly={{ x: -300, duration: 500 }}
      class="primary left center"
      style="width: 200px; padding-top: 20px"
    >
      <a on:click={toggleReady} href="/"><i>home</i>Home</a>
      <div class="small-divider" />
      <a on:click={toggleReady} href="/programming/"><i>code</i>Programming</a>
      <div class="small-divider" />
      <a on:click={toggleReady} href="/patents/"><i>school</i>Patents</a>
      <div class="small-divider" />
      <a on:click={toggleReady} href="/seth_rothschild_resume.pdf"
        ><i>clinical_notes</i>Resume</a
      >
    </nav>
  {/if}

  <!-- <nav style="padding-bottom: 10px">
    <a class="button border" on:click={toggleReady} href="/"><i>home</i>Home</a>
    <a class="button border" on:click={toggleReady} href="/programming/"
      ><i>code</i>Programming</a
    >
    <a class="button border" on:click={toggleReady} href="/patents/"
      ><i>school</i>Patents</a
    >
    <a class="button border" on:click={toggleReady} href="/seth_rothschild_resume.pdf"
      ><i>clinical_notes</i>Resume</a>
  </nav> -->
{:else}
  <nav class="primary left center" style="width: 130px; padding-top: 20px">
    <a on:click={toggleReady} href="/"><i>home</i>Home</a>
    <div class="small-divider" />
    <a on:click={toggleReady} href="/programming/"><i>code</i>Programming</a>
    <div class="small-divider" />
    <a on:click={toggleReady} href="/patents/"><i>school</i>Patents</a>
    <div class="small-divider" />
    <a on:click={toggleReady} href="/seth_rothschild_resume.pdf"
      ><i>clinical_notes</i>Resume</a
    >
  </nav>
{/if}
{#if ready}
  <div in:fade={{ duration: 200 }}>
    <slot />
  </div>
{/if}

<!-- <nav class="footer">
  <a
    href="https://github.com/Seth-Rothschild"
    target="_blank"
    rel="noopener noreferrer">GitHub</a
  >
  |
  <a
    href="https://www.reddit.com/user/seth-rothschild"
    target="_blank"
    rel="noopener noreferrer">Reddit</a
  >
  |
  <a rel="me" href="https://fosstodon.org/@sethrothschild" target="_blank"
    >Mastodon</a
  >
  |
  <a
    href="https://stackoverflow.com/users/9458191/seth-rothschild"
    target="_blank"
    rel="noopener noreferrer">Stack Overflow</a
  >
</nav> -->

<style>
</style>
