<script>
	import favicon from '#lib/assets/favicon.svg';
        import { settings } from '#lib/settings.svelte.js';	
	let { children } = $props();

       

	$effect(()=>{


        document.documentElement.style.setProperty('--ui-scale', scaleValue);


	
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
scale: calc(var(--ui-scale, 1.0) * 100%);
}


.main_section {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;

}



</style>

