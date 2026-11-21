<script>
import { onMount } from 'svelte';
import { getSearchResults, searchState } from '#lib/search.svelte.js';
let results = $derived(getSearchResults());
</script>

<main class="main_section">
{#if results.total > 0 }
{#if results.art.length > 0}
<div class="homepage_image_flex_container">
<div class="image_container">
{#each results.art as art}
<img class="flex_image" src="./artwork/{art.image_url}" alt={art.alt_text} />
{/each}
</div>
</div>
{/if}

{#if results.articles.length > 0}
<div class="homepage_article_flex_container">
{#each results.articles as article}
<div class="article_container">
<h2>{article.title}</h2>
{#if article.paragraph1}
<p>{article.paragraph1}</p>
{/if}
{#if article.paragraph2}
<p>{article.paragraph2}</p>
{/if}
{#if article.paragraph3}
<p>{article.paragraph3}</p>
{/if}
{#if article.paragraph4}
<p>{article.paragraph4}</p>
{/if}
{#if article.paragraph5}
<p>{article.paragraph5}</p>
{/if}
{#if article.paragraph6}
<p>{article.paragraph6}</p>
{/if}
{#if article.paragraph7}
<p>{article.paragraph7}</p>
{/if}
{#if article.paragraph8}
<p>{article.paragraph8}</p>
{/if}
</div>
{/each}
</div>
{/if}

{#if results.testimonies.length > 0}
{#each results.testimonies as testimonie}
<div class="testimonie_container">
<img class="testimonie_image" src="./artwork/{testimonie.image}" alt="" />
<div class="testimonie_text_container">
<p class="testimonie_text">"{testimonie.testimonies}" - {testimonie.author}, {testimonie.month.charAt(0).toUpperCase() + testimonie.month.slice(1).toLowerCase()} {testimonie.year}</p>
</div>
</div>
{/each}
{/if}

{:else if results.total == 0 && searchState.query.length > 0 }
<div class="no_results_container">
<p class="no_results">Sorry no results for that query.</p>
</div>

{:else}
<main class="main_unsearched_section">
<div class="title">
</div>
<div class="animated_text_container">
<img class="animated_text" src="./artwork/animated-text.gif" alt="" />
</div>
</main>
{/if}
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
}

h2 {
font-weight: 600;
font-size: 1.6rem;
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

.no_results {
font-size: 1.1rem;
}


.main_unsearched_section {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
}

.animated_text {
height: calc(100vh);
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

.homepage_article_flex_container {
background-color: white;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-bottom: 0vh;
gap: 0px;
}

.article_container {
background-color: rgba(245,245,245,1);
width: 90vw;
border-radius: 20px;
padding: 0px 20px;
margin-bottom: 10px;
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
}


.flex_image {
flex-basis: calc(25% - 4px);
aspect-ratio: 1/1;
border-radius: 0px;
overflow: hidden;
object-fit: cover;
object-position: center;
cursor: pointer;
}

.icon_container {
display: flex;
align-items: center;
justify-content: flex-start;
background-color: transparent;
width: calc(90vw +  40px);
margin-bottom: 0px;
height: 1.8rem;
padding-left: 0px;
}

.hero_icons {
width: 1.8rem;
height: 1.8rem;
}

.testimonie_container {
background-color: rgba(0,0,0,0);
width: 100vw;
border-radius: 20px;
padding: 0px 0px 0px 0px;
margin-bottom: 10px;
display: flex;
gap: 10px;
flex-wrap: nowrap;
align-items: center;
justify-content: center;
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

.main_unsearched_section {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
}

.animated_text_container {
overflow: hidden;
width: 100vw;
height: 100vw;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
}

.animated_text {
width: 125vw;
height: 125vw;
margin-left: -5vw;
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

.article_container {
background-color: rgba(245,245,245,1);
width: calc(100vw - 40px);
border-radius: 0px;
padding: 10px 20px;
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

