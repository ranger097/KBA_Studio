<script>
	import { settings } from '#lib/settings.svelte.js';
	import { asset,resolve } from '$app/paths';
	let { data } = $props();
	let copied = $state(false);
	let download = $state(false);
	let download_button_text = $derived(download ? 'Success' : 'Download');
        let button_text = $derived(copied ? 'Success' : 'Share');
        
	function download_button() {
        download = !download;
	setTimeout(()=>{
        download = !download
	}, 2000);
	}

       
  function copyCurrentLink() {
    const baseUrl = new URL(window.location.href);
    const fullUrl = new URL(asset(/** @type {any} */(`artwork/${data.artwork.image_url}`)), baseUrl.origin).href;
    navigator.clipboard.writeText(fullUrl)
    .then(()=>{
    copied = true;
    setTimeout(()=>{
    copied = false;
    }, 2000)
    })
    .catch((err)=>{
    console.error('failed to copy link', err)
    });
  }

</script>


<main class="main_section" class:darkmode={settings.darkmode}>
	
	<div class="fullscreen_container">
	        <div class="image_container">
		<a class="mobile_back_link" href={resolve('/')}>
		<img class="back_image" 
		 src={asset(/** @type {any} */ (`/artwork/icons/rest-svgrepo-com.svg`))} alt="" />
		 Back to Gallery</a>

		<img 
		 class="fullscreen_image"
		 src={asset(/** @type {any} */ (`/artwork/${data.artwork.image_url}`))} 
		 alt={data.artwork.alt_text} 
		/>
		</div>
		<div class="fullscreen_info_container">
		<a class="back_link" href={resolve('/')}>
		<img class="back_image" 
		 src={asset(/** @type {any} */ (`/artwork/icons/rest-svgrepo-com.svg`))} 
		 alt="" />
		 Back to Gallery</a>

		<div class="header_container">
		<h1 class="header">{data.artwork.title ?? data.artwork.slug}</h1>
                </div>

		<div class="description_container">
		<p>{data.artwork.description}</p>
		</div>
		
		<div class="share_link_container">
		<button type="button" class:green={copied} class="share_links" onclick={copyCurrentLink}>
		<img class="back_image" 
		 src={asset(/** @type {any} */ (`/artwork/icons/connect-svgrepo-com.svg`))} 
		 alt="share icon" />
		{button_text}
               </button>
		<a class="share_links" class:green={download} onclick={download_button} 
		href={asset(/** @type {any} */ (`/artwork/${data.artwork.image_url}`))} download>
                <img class="back_image" 
	         src={asset(/** @type {any} */ (`/artwork/icons/download-svgrepo-com.svg`))} 
		 alt="" />
		{download_button_text}</a>
		</div>
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

.image_container {
width: 70vw;
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

.fullscreen_info_container {
display: flex;
background-color: rgba(245,245,245,1);
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
width: calc(40vw);
padding: 1vw 1vw 0vw 1vw;
}

.description_container {
flex: 0.5 0.5 0.5;
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
overflow-y: hidden;
margin-top: 10px;
margin-bottom: 0px;
border-radius: 10px 10px 0px 0px;
display: flex;
align-items: center;
}

.mobile_back_link {
display: none;
}

.share_link_container {
flex-basis: 0.1;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: 0px 0px 0px 0px;
gap: 10px;
}

.share_links {
background-color: #303030;
padding: 10px 15px;
margin-bottom: 10px;
width: calc(100% - 30px);
border-radius: 100px;
color: white;
display: flex;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
border: none;
cursor: pointer;
border: 0px solid white;
}

.green {
border: 0px solid green;
font-weight: 700;
background: linear-gradient(lightgreen);
color: green;
}

.fullscreen_container {
display: flex;
margin: auto;
inset: 0;
position: fixed;
border-radius: 0px;
overflow: hidden;
width: calc(100vw - 20px);
height: calc(100vh - 20px);
padding: 10px;
background-color: white;
gap: 0px;
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

.darkmode div div,
.darkmode .fullscreen_container {
background-color: #101010;
}

.darkmode div div .share_links,
.darkmode div div .header_container,
.darkmode div div .description_container,
.darkmode div .back_link {
background-color: #202020;
color: white;
}

@media (max-width: 744px) {
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

.image_container {
height: 50vh;
width: 100vw;
position: relative;
}

.description_container {
flex-basis: 0.9;
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
justify-content: flex-start;
}


.share_link_container {
flex-basis: 0.1;
display: flex;
align-items: center;
justify-content: center;
width: calc(100vw - 20px);
padding: 0px 0px 10px 0px;
gap: 10px;
}

.share_links {
background-color: #303030;
padding: 10px 20px;
margin-bottom: 0px;
width: calc(50% - 0px);
border-radius: 10px;
color: white;
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
}

.header {
font-size: 1.5rem;
font-weight: 700;
}

.main_section {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: 100vw;
height: 100vh;
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
padding: 0px;
}

.back_image {
width: 1.5rem;
height: 1.5rem;
}

.back_link {
display: none;
align-items: center;
justify-content: center;
gap: 10px;
background-color: #ffffff;
padding: 10px 25px 10px 15px;
border-radius: 100px;
}

.mobile_back_link {
position: absolute;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
background-color: #ffffff;
padding: 10px 25px 10px 15px;
border-radius: 100px;
top: 10px;
right: 10px;
}


.fullscreen_info_container {
display: flex;
background-color: rgba(245,245,245,1);
align-items: center;
justify-content: flex-start;
flex-direction: column;
width: calc(100vw - 20px);
padding: 0px 10px;
height: 50vh;
}

.header_container {
width: calc(100% - 40px);
padding: 10px 20px 10px 20px;
background-color: white;
overflow-x: hidden;
overflow-y: hidden;
margin-top: 10px;
margin-bottom: 0px;
border-radius: 10px 10px 0px 0px;
display: flex;
align-items: center;
}


.fullscreen_container {
display: flex;
flex-direction: column;
border-radius: 0px;
overflow-x: hidden;
overflow-y: hidden;
width: 100vw;
height: 100vh;
margin: 0px;
inset:inherit;
position:relative;
padding: 0px;
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
.darkmode div .back_link,
.darkmode .mobile_back_link {
background-color: #202020;
color: white;
}

}

</style>
