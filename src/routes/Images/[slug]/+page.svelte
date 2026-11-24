<script>
	import { settings } from '#lib/settings.svelte.js';
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
		<a class="back_link" href=".">
		<img class="back_image" src="/artwork/icons/rest-svgrepo-com.svg" alt="" />
		 Back to Gallery</a>

		<div class="header_container">
		<h1 class="header">{data.artwork.title ?? data.artwork.slug}</h1>
                </div>

		<div class="description_container">
				<p>{data.artwork.description}</p>
		</div>
		
		<a class="share_links" href=#>
                <img class="back_image" src="/artwork/icons/connect-svgrepo-com.svg" alt="" />
		Share</a>
		<a class="share_links" href="/artwork/{data.artwork.image_url}" download>
                <img class="back_image" src="/artwork/icons/download-svgrepo-com.svg" alt="" />
		Download</a>
		</div>
	</div>
</main>
<style>

* {
  text-decoration: none;
  color: black;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 1.15rem;
  transition: all 0.5s linear;
  &::-webkit-scrollbar { display: none; }
    scrollbar-width: none;
   -ms-overflow-style: none;
   transition: all 0.3s linear;
}

.header {
font-size: 1.5rem;
font-weight: 700;
}

.main_section {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
}

.main_section * {
color: black;
}

.main_section div div .share_links {
background-color: white;
color: black;
} 

.fullscreen_image {
width: 100%;
height: 100%;
object-position: center;
object-fit: cover;
overflow: hidden;
}

.back_image {
width: 1.5rem;
height: 1.5rem;
}

.back_link {
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
background-color: #ffffff;
padding: 10px 25px 10px 15px;
border-radius: 100px;
}

.back_link:hover {
background-color: red;
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

.description_container {
height: 100%;
width: calc(100% - 40px);
padding: 0px 20px 0px 20px;
background-color: white;
overflow-x: hidden;
overflow-y: scroll;
margin-top: 0px;
margin-bottom: 10px;
border-radius: 0px 0px 10px 10px;
display: flex;
align-items: flex-start;
justify-content: center;
}

.header_container {
width: calc(100% - 40px);
padding: 10px 20px 0px 20px;
background-color: white;
overflow-x: hidden;
overflow-y: scroll;
margin-top: 10px;
margin-bottom: 0px;
border-radius: 10px 10px 0px 0px;
display: flex;
align-items: center;
}

.share_links {
background-color: #303030;
padding: 10px 15px;
margin-bottom: 10px;
width: calc(100% - 30px);
border-radius: 10px;
color: white;
display: flex;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
}

.fullscreen_container {
display: flex;
margin: auto;
inset: 0;
position: fixed;
border-radius: 20px;
overflow: hidden;
width: 96%;
height: 94%;
}

.darkmode {
background-color: black;
color: white;
}

.darkmode * {
color: white;
}

.darkmode div .back_image {
filter: invert();
}

.darkmode div div {
background-color: #101010;
}

.darkmode div div .share_links,
.darkmode div div .header_container,
.darkmode div div .description_container,
.darkmode div .back_link {
background-color: #202020;
color: white;
}

</style>
