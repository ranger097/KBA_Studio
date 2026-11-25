<script>
import { asset, resolve } from '$app/paths';
import Searchbar from '../Searchbar.svelte';
import { getSearchResults, searchState } from '#lib/search.svelte.js';
import { settings } from '#lib/settings.svelte.js';
import all_art from '#lib/data/art.json';
let results = $derived(getSearchResults());

 /** @param {string} filename */
  function getArtworkUrl(filename) {
    return asset(/** @type {Parameters<typeof asset>[0]} */ (`/artwork/${filename}`));
  }
</script>
<Searchbar />

<main class="main_section" class:darkmode={settings.darkmode}>
<div class="homepage_image_flex_container"  class:darkmode={settings.darkmode}>
{#if results.art.length > 0}
{#each results.art as art}
<a href={resolve('/Images/[slug]', { slug: art.slug })}  class="art_card">
<img class="flex_image" src={getArtworkUrl(art.image_url)} alt={art.alt_text} />
</a>
{/each}
{:else if results.art.length == 0 && searchState.query.length > 0}
<div class="homepage_image_flex_container">
<div class="no_results_container">
<p>Sorry no results for that query.</p>
</div>
</div>
{:else}
{#each all_art as art}
<a href={resolve('/Images/[slug]', { slug: art.slug })}  class="art_card">
<img class="flex_image" src={getArtworkUrl(art.image_url)} alt={art.alt_text} />
</a>
{/each}
{/if}
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


.art_card {
width: calc(25% - 5px);
position: relative;
transition: all 0.3s linear;
aspect-ratio: 1/1;
border-radius: 0px;
overflow: hidden;
object-fit: cover;
object-position: center;
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



@media (max-width: 744px) {
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
flex-direction: column;
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

.art_card {
width: 100vw;
position: relative;
transition: all 0.3s linear;
aspect-ratio: 1/1;
border-radius: 0px;
overflow: hidden;
object-fit: cover;
object-position: center;
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
.darkmode div {
background-color: black;
color: rgba(255,255,255,0.9);
}

.darkmode div div {
background-color: #101010;
}
}


</style>
