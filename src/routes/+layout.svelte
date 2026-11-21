<script>
	import favicon from '#lib/assets/favicon.svg';
        import { settings } from '#lib/settings.svelte.js';	
	let { children } = $props();

	$effect(()=>{

	if (settings.uiscale) {
        document.documentElement.style.zoom = 1.0;
	} 
	else {
        document.documentElement.style.zoom = 0.91; 
	} 

	if (settings.darkmode) {
	document.documentElement.style.backgroundColor = "black";
	} else {
        document.documentElement.style.backgroundColor = "white";
	}
	});


</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="main_section">

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
}



</style>

