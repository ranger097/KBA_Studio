<script>
import Searchbar from '../Searchbar.svelte';
import { getSearchResults, searchState } from '#lib/search.svelte.js';
import all_testimonies from '#lib/data/testimonies.json';
import { settings } from '#lib/settings.svelte.js';
import { asset } from '$app/paths';
let results = $derived(getSearchResults());
</script>

<Searchbar />

<main class="main_section" class:darkmode={settings.darkmode}>
{#if results.testimonies.length > 0}
{#each results.testimonies as testimonie}
<div class="testimonie_container">
<img class="testimonie_image" src={asset(/** @type {any} */ (`artwork/${testimonie.image}`))} alt="" />
<div class="testimonie_text_container">
<p class="testimonie_text">"{testimonie.testimonies}" - {testimonie.author}, {testimonie.month.charAt(0).toUpperCase() + testimonie.month.slice(1).toLowerCase()} {testimonie.year}</p>
</div>
</div>
{/each}
{:else if results.testimonies.length == 0 && searchState.query.length > 0 }
<div class="no_results_container">
<p class="no_results">Sorry no results for that query.</p>
</div>
{:else}
{#each all_testimonies as testimonie}
<div class="testimonie_container">
<img class="testimonie_image" src={asset(/** @type {any} */ (`artwork/${testimonie.image}`))} alt="" />
<div class="testimonie_text_container">
<p class="testimonie_text">"{testimonie.testimonies}" - {testimonie.author}, {testimonie.month.charAt(0).toUpperCase() + testimonie.month.slice(1).toLowerCase()} {testimonie.year}</p>
</div>
</div>
{/each}
{/if}
</main>

<style>
* {
   font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 1.5rem;
  transition: all 0.5s linear;
  &::-webkit-scrollbar { display: none; }
    scrollbar-width: none;
   -ms-overflow-style: none; 
  white-space: break;
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

.no_results {
font-size: 1.1rem;
}


.testimonie_container {
background-color: rgba(245,245,245,0);
width: 90vw;
border-radius: 20px;
padding: 0px 0px 0px 0px;
margin-bottom: 10px;
display: flex;
gap: 10px;
flex-wrap: nowrap;
}

.testimonie_text_container {
background-color: rgba(245,245,245,1);
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 20px 30px 20px 60px;
width: 65vw;
border-radius: 20px;
height: calc(20vw - 40px);
white-space: normal;
}

.testimonie_text {
white-space: normal;
}

.main_section {
display: flex;
flex-direction: column;
width: 100vw;
overflow: hidden;
background-color: white;
align-items: center;
justify-content: center;
margin-top: 10vh;
margin-bottom: 10vh;
}


.testimonie_image {
aspect-ratio: 1/1;
border-radius: 0px;
overflow: hidden;
object-fit: cover;
object-position: center;
cursor: pointer;
width: 20vw;
height: 20vw;
border-radius: 20px;

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


.testimonie_image {
width: 100vw;
flex-basis: calc(100%);
aspect-ratio: 1/1;
border-radius: 0px;
overflow: hidden;
object-fit: cover;
object-position: center;
cursor: pointer;
}


.testimonie_container {
background-color: rgba(245,245,245,1);
width: calc(100vw);
border-radius: 0px;
padding: 0px 0px;
display: flex;
flex-direction: column;
gap: 0px;
margin-bottom: 10px;
}

.testimonie_text_container {
background-color: rgba(245,245,245,1);
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 20px 60px;
width: calc(100vw - 120px);
border-radius: 0px;
height: 100%;
white-space: normal;
}

.darkmode,
.darkmode div{
background-color: black;
color: rgba(255,255,255,0.9);
}

.darkmode div div {
background-color: #101010;
}


}

</style>
