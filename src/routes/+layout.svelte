<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  let innerWidth = 1000;
  let ready = false;

  const toggleReady = () => {
    ready = false;
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
  <nav style="width: 100%; padding-top: 20px">
    <a style="padding-left:50px" on:click={toggleReady} href="/"
      ><i>home</i>Home</a
    >
    <a on:click={toggleReady} href="/programming/"><i>code</i>Programming</a>
    <a on:click={toggleReady} href="/patents/"><i>school</i>Patents</a>
  </nav>
{:else}
  <nav class="primary left center" style="width: 100px;">
    <a on:click={toggleReady} href="/"><i>home</i>Home</a>
    <div class="small-divider" />
    <a on:click={toggleReady} href="/programming/"><i>code</i>Programming</a>
    <div class="small-divider" />
    <a on:click={toggleReady} href="/patents/"><i>school</i>Patents</a>
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
  :root,
  body.light {
    --primary: #2c3e5f;
    --on-primary: #ffffff;
    --primary-container: #e9ddff;
    --on-primary-container: #22005d;
    --secondary: #625b71;
    --on-secondary: #ffffff;
    --secondary-container: #e8def8;
    --on-secondary-container: #1e192b;
    --tertiary: #7e5260;
    --on-tertiary: #ffffff;
    --tertiary-container: #ffd9e3;
    --on-tertiary-container: #31101d;
    --error: #ba1a1a;
    --on-error: #ffffff;
    --error-container: #ffdad6;
    --on-error-container: #410002;
    --background: #fffbff;
    --on-background: #1c1b1e;
    --surface: #fdf8fd;
    --on-surface: #1c1b1e;
    --surface-variant: #e7e0eb;
    --on-surface-variant: #49454e;
    --outline: #7a757f;
    --outline-variant: #cac4cf;
    --shadow: #000000;
    --scrim: #000000;
    --inverse-surface: #313033;
    --inverse-on-surface: #f4eff4;
    --inverse-primary: #cfbcff;
    --surface-dim: #ddd8dd;
    --surface-bright: #fdf8fd;
    --surface-container-lowest: #ffffff;
    --surface-container-low: #f7f2f7;
    --surface-container: #f2ecf1;
    --surface-container-high: #ece7eb;
    --surface-container-highest: #e6e1e6;
    --overlay: rgb(0 0 0 / 0.5);
    --active: rgb(0 0 0 / 0.1);
    --elevate1: 0 0.125rem 0.125rem 0 rgb(0 0 0 / 0.32);
    --elevate2: 0 0.25rem 0.5rem 0 rgb(0 0 0 / 0.4);
    --elevate3: 0 0.375rem 0.75rem 0 rgb(0 0 0 / 0.48);
  }
</style>
