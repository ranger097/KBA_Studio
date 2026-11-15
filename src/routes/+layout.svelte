<script>
	import favicon from '#lib/assets/favicon.svg';
	import Searchbar from './Searchbar.svelte';
	import Hero from './Hero.svelte';
        import Menu from './Menu.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="main_section">
<Searchbar class="search" />
<Hero class="hero" />
<Menu class="menu" />
{@render children()}
</main>

<style>

* {
background-color: transparent;
}

.main_section {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
max-width: 100vw;
max-height: 100vh;

}



</style>

