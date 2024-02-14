<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  let duration = 500;
  let easing = quadOut;

  let ready = false;

  onMount(() => {
    setTimeout(() => {
      ready = true;
    }, 0);
  });
</script>

<div class="content">
  <h1 class="small">Patents</h1>
  <h3 class="small">Summary</h3>
  <p>
    As part of my regular work in the Office of the CTO, I created prototypes
    and submitted patent disclosures to Dell, a subset of which were filed with
    the US Patent Office. You can find an up-to-date list of my granted and
    published patents at
    <a
      href="https://patents.google.com/?inventor=Seth+Jacob+Rothschild"
      target="_blank"
      rel="noopener noreferrer"
      >https://patents.google.com/?inventor=Seth+Jacob+Rothschild</a
    >.
  </p>

  <h3 class="small">Some Interesting Inventions</h3>
  {#if ready}
    <article
      in:fly={{ duration: duration, easing: easing, x:100}}
      class="border patentcard"
    >
      <a
        href="https://patents.google.com/patent/US11664988B2/en?inventor=Seth+Jacob+Rothschild"
      >
        Method and system for encrypting and decrypting secrets using escrow
        agents</a
      > Suppose you have a very secret password that you can't keep in a
      password manager -- like the password to your password manager. While you
      could trust one "escrow provider" to encrypt and store this secret, it
      would be hard to prevent this provider from peeking. This patent is an
      invention of
      <a href="https://en.wikipedia.org/wiki/Radia_Perlman">Radia Perlman's</a> that
      we prototyped which describes a way to keep this secret in escrow, so that
      a quorum of escrow providers need to grant access in order to reconstruct the
      secret. (with Radia Perlman, Alex Robbins)
    </article>
    <article
      in:fly={{ duration: duration, delay: 100, easing: easing, x:100}}
      class="border patentcard"
    >
      <a
        href="https://patents.google.com/patent/US20230409722A1/en?inventor=Seth+Jacob+Rothschild"
      >
        System and method for encrypted storage of constructed data</a
      > Plugging into existing access control systems, particularly at a large
      company, is hard. The main idea here is to make sharing of applications
      that use protected data easier, by gating app access behind a challenge
      that only someone with pre-existing access to data could answer. (with
      Michael Thomas Kruzewski)
    </article>
    <article
      in:fly={{ duration: duration, delay: 400, easing: easing, x: 100}}
      class="border patentcard"
    >
      <a
        href="https://patents.google.com/patent/US11770412B2/en?inventor=Seth+Jacob+Rothschild"
      >
        Secure password log in on insecure devices</a
      > Since passkeys are not widely adopted, we wondered if it would be
      possible to create a system that converts "what you have" into traditional
      username/password authentication. Our prototype did the login on a secure
      device and transferred the session cookie to the less secure device. (With
      Radia Perlman, Ben Santaus, Orlando Xavier Nieves)
    </article>
    <article
      in:fly={{ duration: duration, delay: 600, easing: easing, x: 100}}
      class="border patentcard"
    >
      <a
        href="https://patents.google.com/patent/US11553159B1/en?inventor=Seth+Jacob+Rothschild"
      >
        Continuous video generation from voice data</a
      > We spend a lot of time on video calls, but not a lot of people like
      being on video. This invention provides an inexpensive way to be on video
      without being on video, by taking the audio input and manipulating the
      lips of an existing video of the user. (with Alex Robbins)
    </article>
  {/if}
</div>

<style>
  .patentcard {
    padding: 10px;
    margin-top: 15px;
  }
  a {
    color: var(--primary);
    font-weight: bold;
    text-decoration: underline;
  }

  h1 {
    padding-top: 50px;
  }
</style>
