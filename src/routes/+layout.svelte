<script>
  import "../app.postcss";
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import { page } from '$app/stores'

  </script>




{#if $page.url.pathname === '/done'}
    <slot />
{:else}
  <Nav />
  <slot />
  <Footer />
{/if}