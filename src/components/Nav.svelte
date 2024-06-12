<script>
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname;
  </script>
  
  <Navbar  let:hidden let:toggle>
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"><img loading="lazy" src="images/logo.png" alt="" class="max-h-24"></span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {activeUrl} {hidden}>
        <NavLi href="/" class="text-xl">Home</NavLi>
        <NavLi href="/services" class="text-xl">Services</NavLi>
        <NavLi data-sveltekit-reload href="/estimate" class="text-xl" >Free Quote</NavLi>
        <NavLi href="/about" class="text-xl">About Us</NavLi>
    </NavUl>
  </Navbar>