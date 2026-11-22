<script>
	import { settings } from '#lib/settings.svelte.js';
	import Searchbar from '../../Searchbar.svelte';
	let { data } = $props();
</script>


<main class="main_section" class:darkmode={settings.darkmode}>
	
	<div class="fullscreen_container">
		<img 
		 class="fullscreen_image"
		 src="/artwork/{data.artwork.image_url}" 
		 alt={data.artwork.alt_text} 
		/>
		<div class="fullscreen_info_container">
		<a href=".">← Back to Gallery</a>
		<h1>{data.artwork.title ?? data.artwork.slug}</h1>
		<p>{data.artwork.alt_text}</p>
		<a href="/artwork/{data.artwork.image_url}" download>Download</a>
		<a href=#>Share</a>
		</div>
	</div>
</main>
<style>

* {
text-decoration: none;
color: black;
}

.main_section {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
}

.fullscreen_image {
width: 100%;
height: 100%;
object-position: center;
object-fit: cover;
overflow: hidden;
}

.fullscreen_info_container {
display: flex;
background-color: rgba(245,245,245,1);
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
width: 40vw;
padding: 20px 40px;
}

.fullscreen_container {
display: flex;
background-color: white;
height: calc(100vh - 60px);
width: calc(100vw - 60px);
border-radius: 20px;
overflow: hidden;
}

.darkmode {
background-color: black;
color: white;
}
</style>
