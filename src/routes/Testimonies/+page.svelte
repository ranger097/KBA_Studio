<script>
import Searchbar from '../Searchbar.svelte';
import { getSearchResults, searchState } from '#lib/search.svelte.js';
import all_testimonies from '#lib/data/testimonies.json';
let results = $derived(getSearchResults());
</script>

<Searchbar />

<main class="main_section">
{#if results.testimonies.length > 0}
{#each results.testimonies as testimonie}
<div class="testimonie_container">
<img class="testimonie_image" src="./artwork/{testimonie.image}" alt="" />
<div class="testimonie_text_container">
<p class="testimonie_text">"{testimonie.testimonies}" - {testimonie.author}, {testimonie.month.charAt(0).toUpperCase() + testimonie.month.slice(1).toLowerCase()} {testimonie.year}</p>
</div>
</div>
{/each}
{:else if results.testimonies.length == 0 && searchState.query.length > 0 }
<div class="testimonie_container">
<p>Sorry no results for that query.</p>
</div>
{:else}
{#each all_testimonies as testimonie}
<div class="testimonie_container">
<img class="testimonie_image" src="./artwork/{testimonie.image}" alt="" />
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

h2 {
font-weight: 600;
font-size: 1.6rem;
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


@media (max-width: 700px) {

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
}

.testimonie_text_container {
background-color: rgba(245,245,245,1);
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 20px 60px;
width: calc(100vw - 120px);
border-radius: 20px;
height: 100%;
white-space: normal;
}

}

</style>
