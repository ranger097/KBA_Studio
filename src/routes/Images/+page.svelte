<script>
import Searchbar from '../Searchbar.svelte';
import { getSearchResults, searchState } from '#lib/search.svelte.js';
import { settings } from '#lib/settings.svelte.js';
import all_art from '#lib/data/art.json';
let results = $derived(getSearchResults());
</script>

<main class="main_section" class:darkmode={settings.darkmode}>
<Searchbar />
<div class="homepage_image_flex_container"  class:darkmode={settings.darkmode}>
<div class="image_container">
{#if results.art.length > 0}
{#each results.art as art}
<div class="art_card">
<a href="../Images/{art.slug}/" class="slug_link">
<span>Fullscreen</span>
<img class="full_image_icon" src="./artwork/icons/expand-svgrepo-com.svg" alt={art.alt_text} />
</a>
<img class="flex_image" src="./artwork/{art.image_url}" alt={art.alt_text} />
<p>{art.slug}</p>
</div>
{/each}
{:else if results.articles.length == 0 && searchState.query.length > 0}
<div class="homepage_image_flex_container">
<div class="no_results_container">
<p>Sorry no results for that query.</p>
</div>
</div>
{:else}
{#each all_art as artwork}
<div class="art_card">
<a href="../Images/{artwork.slug}/" class="slug_link">
<img class="full_image_icon" src="./artwork/icons/expand-svgrepo-com.svg" alt={artwork.alt_text} />
</a>
<img class="flex_image" src="./artwork/{artwork.image_url}" alt={artwork.alt_text} />
</div>

{/each}
{/if}
</div>
</div>

</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

* {
   font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 1.1rem;
  transition: all 0.5s linear;
  &::-webkit-scrollbar { display: none; }
    scrollbar-width: none;
   -ms-overflow-style: none;
   transition: all 0.3s linear;

}

.homepage_image_flex_container {
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
gap: 5px;
background-color: white;
width: 100vw;
overflow-x: hidden;
flex-wrap: wrap;
padding: 0vh 0px 20px 0px;
}

.no_results_container {
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
border-radius: 20px;
background-color: rgba(245,245,245,1);
width: calc(90vw + 40px);
overflow:hidden;
gap: 5px;
padding-left: 20px;
}

.full_image_icon {
width: 1.5rem;
height: 1.5rem;
background-color: rgba(255,255,255,0);
border-radius: 10px;
backdrop-filter: blur(0px);
filter: invert();
}

.art_card {
flex-basis: calc(25.1% - 5px);
position: relative;
transition: all 0.3s linear;
width: 100%;
height: 100%;
aspect-ratio: 1/1;
border-radius: 0px;
overflow: hidden;
object-fit: cover;
object-position: center;
}

.art_card a {
opacity: 0;
transition: all 0.8s linear;
}

.art_card:hover a {
opacity: 1.0;
}


.slug_link {
position: absolute;
right: 10px;
top: 10px;
display: flex;
align-items: center;
justify-content: center;
color: white;
text-decoration: none;
gap: 10px;
background-color: rgba(0,0,0,0.8);
padding: 5px 10px;
backdrop-filter: blur(10px);
border-radius: 100px;
border: 1px solid rgba(255,255,255,0.8);
}


.image_container {
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
border-radius: 20px;
background-color: rgba(245,245,245,1);
width: calc(90vw + 40px);
overflow:hidden;
gap: 5px;
}

.main_section {
display: flex;
flex-direction: column;
width: 100vw;
overflow: hidden;
background-color: white;
align-items: center;
justify-content: center;
padding-top: 10vh;
}

.flex_image {
width: 100%;
height: 100%;
aspect-ratio: 1/1;
border-radius: 0px;
overflow: hidden;
object-fit: cover;
object-position: center;

}

.darkmode,
.darkmode div{
background-color: black;
color: rgba(255,255,255,0.9);
}

.darkmode div div {
background-color: #101010;
}



@media (max-width: 700px) {
.no_results_container {
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
border-radius: 20px;
background-color: rgba(245,245,245,1);
width: calc(90vw);
margin-top: 3vh;
padding-left: 0px;
}

.no_results {
font-size: 1.1rem;
}


.homepage_image_flex_container {
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
background-color: white;
min-height: auto;
width: 100vw;
padding: calc(0vh + 0px) 20px 0px 20px;
}

.flex_image {
width: 98vw;
flex-basis: calc(100%);
aspect-ratio: 1/1;
border-radius: 0px;
overflow: hidden;
object-fit: cover;
object-position: center;
cursor: pointer;
}

.image_container {
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
border-radius: 0px;
background-color: rgba(245,245,245,1);
width: calc(100vw);
overflow:hidden;
gap: 5px;
}

}


</style>
