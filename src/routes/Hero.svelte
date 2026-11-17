<script>
import { onMount } from 'svelte';
import { getSearchResults, searchState } from '#lib/search.svelte.js';
import all_art from '#lib/data/art.json';
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

.expand_button {
position: absolute;
background-color: transparent;
color: white;
border: none;
font-size: 3rem;
}

.full_image_close_button_mobile {
display: none;
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
padding: 10vh 0px 20px 0px;
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
gap: 10px;
}

.article_container {
background-color: rgba(245,245,245,1);
width: 90vw;
border-radius: 20px;
padding: 10px 20px;
}

.main_section {
display: flex;
flex-direction: column;
width: 100vw;
overflow: hidden;
background-color: white;
align-items: center;
justify-content: center;
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


@media (max-width: 700px) {
.homepage_image_flex_container {
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
background-color: white;
min-height: auto;
width: 100vw;
padding: 12vh 20px 10px 20px;
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


.full_image_container {
position: fixed;
margin: auto;
inset: 0;
background-color: rgba(255,255,255,0.8);
backdrop-filter: blur(20px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 1000000000;
padding: 0px 5vw;
width: 90vw;
}

.full_image_info_div {
padding: 10px 20px;
border-radius: 10px;
width: calc(90vw - 40px);
box-shadow: -5px 5px 10px rgba(0,0,0,0.5);
background-color: rgba(255,255,255,0.5);
backdrop-filter: blur(20px);
border: 1px solid black;
}

.full_image_share_div {
padding: 10px 20px;
background-color: blue;
color: white;
border-radius: 10px;
border: 1px solid black;
box-shadow: -5px 5px 10px rgba(0,0,0,0.5);
cursor: pointer;
width: calc(90vw - 40px);
}

.full_image_share_div:hover {
background-color: black;
box-shadow: 0px 0px 100px grey;
}

.full_image_share_div a {
color: white;
text-decoration: none;
}

.full_image_description:hover {
background-color: purple ;
color: lightgoldenrodyellow;
box-shadow: 0px 0px 100px grey;
border: 1px solid purple;
}

.full_image_tag:hover {
background-color: red;
color: white;
box-shadow: 0px 0px 100px grey;
border: 1px solid red;
}

.full_image {
min-height: auto;
box-shadow: -5px 5px 10px rgba(0,0,0,0.5);
border-radius: 10px;
border: 1px solid black;
min-width: 90vw;
overflow: hidden;
object-fit: cover;
object-position: center;
margin-top: 2vh;
}

.full_image:hover {
box-shadow: 0px 0px 100px grey;
}

.full_image_close_button {
display: none;
}

.full_image_close_button_mobile {
width: 100px;
height: 30px;
aspect-ratio: 1/1;
border-radius: 100px;
font-size: 1rem;
color: white;
text-shadow: -2px 2px 5px rgba(0,0,0,0.3);
border: 1px solid grey;
background-color: rgba(0,0,0,1);
box-shadow: -2px 2px 5px rgba(0,0,0,0.3);
margin-top: 5vh;
display: block;
}

.full_image_close_button_mobile:after {
content: " close";
}

.full_image_close_button_mobile:hover {
background-color: red;
}

.search_div {
background-color: rgba(0,0,0,0);
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
z-index: 10000;
top: 0px;
left: 0px;
gap: 0vw;
padding: 0px 0px 20px 0px;
}

#search {
border-radius: 0px;
background-color: rgba(255,255,255,0.8);
border: none;
border-bottom: 1px solid white;
color: black;
box-shadow: none;
backdrop-filter: blur(20px);
outline: none;
height: calc(3vh + 20px);
padding-left: 5vw;
padding-right: 5vw;
width: 100vw;
}

#search:focus {
border: none;
height: calc(3vh + 20px);
}


}

</style>

