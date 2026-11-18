<script>
import { onMount } from 'svelte';
import { getSearchResults, searchState } from '#lib/search.svelte.js';
import all_testimonies from '#lib/data/testimonies.json';
import all_art from '#lib/data/art.json';
import all_articles from '#lib/data/articles.json';
let results = $derived(getSearchResults());
</script>

<main class="main_section">
<div class="homepage_image_flex_container">
<div class="image_container">
{#if results.art.length > 0}
{#each results.art as art}
<img class="flex_image" src="./artwork/{art.image_url}" alt={art.alt_text} />
{/each}
{:else}
{#each all_art as artwork}
<img class="flex_image" src="./artwork/{artwork.image_url}" alt={artwork.alt_text} />
{/each}
{/if}
</div>
</div>

<div class="homepage_article_flex_container">
{#if results.articles.length > 0}
<div class="icon_container">
<img class="hero_icons" src="./artwork/icons/book-svgrepo-com.svg" alt="" />
<p>Articles</p>
</div>

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
{/if}
</div>

{#if results.testimonies.length > 0}
{#each results.testimonies as testimonie}
<div class="testimonies_container">
<img class="flex_image" src="./artwork/{testimonie.image}" alt="" />
<h2>{testimonie.author}</h2>
<p>{testimonie.testimonies}</p>
</div>
{/each}
{:else}
{#each all_testimonies as testimonie}
<div class="testimonies_container">
<img class="flex_image" src="./artwork/{testimonie.image}" alt="" />
<h2>{testimonie.author}</h2>
<p>{testimonie.testimonies}</p>
</div>
{/each}
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
padding-bottom: 12vh;
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

@media (max-width: 700px) {
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

.article_container {
background-color: rgba(245,245,245,1);
width: calc(100vw - 40px);
border-radius: 0px;
padding: 10px 20px;
}

}

</style>

