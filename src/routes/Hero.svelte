<script>
import { onMount } from 'svelte';

const home_page_images = [
{ title: "wow art",
  image_url: "IMG_9645.JPG",
  alt_text: "cool art",
  id: "a"},
{ title: "wow art",
  image_url: "khbxkjs.jpeg",
  alt_text: "cool art",
  id: "b"},
{ title: "wow art",
  image_url: "2222.jpg",
  alt_text: "cool art",
  id: "c"},
{ title: "wow art",
  image_url: "IMG_9677.JPG",
  alt_text: "cool art",
  id: "d"},
{ title: "wow art",
  image_url: "IMG_9971.JPG",
  alt_text: "cool art",
  id: "e"},
{ title: "wow art",
  image_url: "IMG_9973.JPG",
  alt_text: "cool art",
  id: "f"},
{ title: "wow art",
  image_url: "IMG_1370.JPG",
  alt_text: "cool art",
  id: "g"},
{ title: "wow art",
  image_url: "IMG_8656.JPG",
  alt_text: "cool art",
  id: "h"},
{ title: "wow art",
  image_url: "111.png",
  alt_text: "cool art",
  id: "i"},
{ title: "wow art",
  image_url: "22.png",
  alt_text: "cool art",
  id: "j"}
]

let homepage_image_grid_container;

onMount(()=>{
homepage_image_grid_container.style.gridTemplateAreas = `
      "a a b c"
      "a a d e"
      "f g h h"
      "j i h h"
      `; 

});

let clicked_grid_image = "";

function clickedImage(id) {
  clicked_grid_image = id; 
    if (clicked_grid_image === "a") {
      homepage_image_grid_container.style.gridTemplateAreas = `
      "a a b c"
      "a a d e"
      "f g h i"
      "j . . ."
      `;
      
    }
    else if (clicked_grid_image === "b") {
       homepage_image_grid_container.style.gridTemplateAreas = `
      "a b b c"
      "d b b e"
      "f g h i"
      "j . . ."
      `; 
    }
       else if (clicked_grid_image === "c") {
       homepage_image_grid_container.style.gridTemplateAreas = `
      "a b c c"
      "d e c c"
      "f g h i"
      "j . . ."
      `; 
    }
       else if (clicked_grid_image === "d") {
       homepage_image_grid_container.style.gridTemplateAreas = `
      "a b f c"
      "d d g e"
      "d d h i"
      "j . . ."
      `; 
    }
       else if (clicked_grid_image === "e") {
       homepage_image_grid_container.style.gridTemplateAreas = `
      "a b c d"
      "h i e e"
      "f g e e"
      "j . . ."
      `; 
    }
       else if (clicked_grid_image === "f") {
       homepage_image_grid_container.style.gridTemplateAreas = `
      "a b c d"
      "e g h i"
      "f f j ."
      "f f . ."
      `; 
    }
       else if (clicked_grid_image === "g") {
       homepage_image_grid_container.style.gridTemplateAreas = `
      "a b c d"
      "e f g g"
      "h i g g"
      "j . . ."
      `; 
    }
       else if (clicked_grid_image === "h") {
       homepage_image_grid_container.style.gridTemplateAreas = `
      "a b c d"
      "e f g i"
      "j . h h"
      ". . h h"
      `; 
    }
       else if (clicked_grid_image === "i") {
       homepage_image_grid_container.style.gridTemplateAreas = `
      "a b c d"
      "e f g h"
      "j j i i"
      ". . i i"
      `; 
    }
       else if (clicked_grid_image === "j") {
       homepage_image_grid_container.style.gridTemplateAreas = `
      "a b c d"
      "e f g h"
      "j j i ."
      "j j . ."
      `; 
    }
}

let active_nav_id = "";

let nav_buttons = [
  { title: "Art", id: "nav_link_one", active_text: "Art ✍" },
  { title: "Events", id: "nav_link_two", active_text: "Events ✦" },
  { title: "Collections", id: "nav_link_three", active_text: "Collections ✦" },
  { title: "Socials", id: "nav_link_four", active_text: "Socials ✦" }
];

function buttonSwitcher(id) {
active_nav_id = id;
}

</script>


<main 
class="main_section hero_section" 
id="main_section"
>

<nav class="nav_container">
<div class="static_nav">
{#each nav_buttons as link}
<button 
onclick={()=>buttonSwitcher(link.id)} 
class="nav_buttons" 
id={link.id}>
{active_nav_id === link.id ? link.active_text : link.title}
</button>
{/each}
</div>
</nav>


<div class="KBA_container"></div>
<h3 class="header">KATHY<br>BELCHER<br>ART</h3>


<div class="black_box"></div>
<div id="homepage_image_grid_container" bind:this={homepage_image_grid_container}>
{#each home_page_images as image}
<div class="image_card_wrapper" style="grid-area: {image.id};">
<img 
style="grid-area: {image.id};" 
src="artwork/{image.image_url}" 
id={image.id} 
alt={image.alt_text} 
class="grid_image"
onclick={()=> clickedImage(image.id)}/>
{#if clicked_grid_image === image.id}
<button class="expand_button">&#9974;</button>
{/if}
</div>
{/each}
</div>

<section class="menu_section">
<button class="article_link bottom_links">
  <span>ARTICLES</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 74 74"
    height="34"
    width="34"
  >
    <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
    <path
      fill="white"
      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
    ></path>
  </svg>
</button>

<button class="review_link bottom_links">
  <span>REVIEWS</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 74 74"
    height="34"
    width="34"
  >
    <circle stroke-width="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
    <path
      fill="white"
      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
    ></path>
  </svg>
</button>

</section>

</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gravitas+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Modak&display=swap');

* {
  font-family: "Gravitas One", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  transition: all 0.5s linear;
  scrollbar-width: 0px;
}

h1 {
color: white;
text-shadow: 0px 0px 100px black;
background-color: red;
padding: 20px 30px;
border-radius: 10px;
}

.expand_button {
position: absolute;
background-color: transparent;
color: white;
border: none;
font-size: 3rem;
}

.black_box {
background-color: black;
width: 100vw;
min-height: 100%;
margin: auto;
inset: 0;
position: fixed;
margin-right: 2vw;
margin-left: 24vw;
}

.static_nav {
display: flex;
flex-direction: column;
background-color: transparent;
z-index: 100000000;
transform: rotate(0deg);
width: 15vw;
margin-left: 7vw;
margin-bottom: 0.5vh;
}

 .image_card_wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

.header {
position: fixed;
bottom: 0px;
left: 20px;
background-color: transparent;
font-size: 3vw;
}

.hero_image {
width: 70vw;
aspect-ratio: 16/9;
object-fit: cover;
position: fixed;
margin: auto;
inset: 0;
animation: fadeIn 0.2s linear;
transition: all 0.3s ease;
perspective: 800px;
}

.image_container {
background-color: grey;
width: 70vw;
aspect-ratio: 16/9;
object-fit: cover;
position: fixed;
margin: auto;
inset: 0;
animation: sway 4s ease-in-out infinite alternate;
transform-origin: center;
display: none;
}

.menu_section {
width: 100vw;
display: flex;
position: fixed;
z-index: 10000000000;
left: 0px;
bottom: 0px;
justify-content: flex-end;
align-items: center;
gap: 0px;
background-color: transparent;
}

.bottom_links {
padding: 8px 15px;
text-decoration: none;
color: black;
border: none;
font-family: "Playfair Display SC", serif;
font-weight: 300;
font-style: normal;
backdrop-filter: blur(30px);

cursor: pointer;
transition: all 0.2s;
border-radius: 100px;
display: flex;
align-items: center;
}

@keyframes article_sway {
from {transform: translateX(-15px);}
to {transform: translateX(-10px);}
}

@keyframes review_sway {
from {transform: translateX(-5px);}
to {transform: translateX(-10px);}
}


.bottom_links > svg {
  margin-left: 10px;
  transition: transform 0.3s ease-in-out;
}

.bottom_links:hover svg {
  transform: translateX(5px);
}



.review_link {
margin-right: 1vw;
margin-bottom: 1vw;
background: linear-gradient(45deg, grey, green);
color: white;
animation: review_sway 2s alternate-reverse infinite;
box-shadow: inset 0px 0px 4px silver, -5px 5px 10px rgba(0,0,0,0.5);
}

.article_link {
margin-right: 1vw;
margin-bottom: 1vw;
background: linear-gradient(45deg, gold, indigo);
color: white;
animation: article_sway 2s alternate infinite;
box-shadow: inset 0px 0px 4px darkgrey, -5px 5px 10px rgba(0,0,0,0.5);
}


.side_div {
display: flex;
}

#homepage_image_grid_container {
margin: auto;
inset: 0;
z-index: 1000000;
display: grid;
gap: 4px;
background-color: transparent;
height: 60vh;
width: 75.25vw;
padding-bottom: 5vw;
margin-right: 0.5vw;
margin-top: 0.25vw;
margin-bottom: 5vw;
}

.grid_image {
aspect-ratio: 1/1;
border-radius: 0px;
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
}

.nav_container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
min-width: 100px;
min-height: 100px;
inset: 0;
margin-top: 5vw;
margin-bottom: auto;
margin-left: 50px;
width: 16vw;
height: 16vw;
border: 0px solid black;
z-index: 100000000;
box-shadow: inset 0px 0px 0.5vw white,-1vw 2vw 1vw rgba(0,0,0,0.5), 0px 0px 100vw rgba(0,0,255,1);
background: radial-gradient( coral 30%, orange 70% );
gap: 0px;
transition: all 1s linear;
background-size: 200% 200%;
animation: gradient 30s alternate infinite, corners 20s alternate infinite,alt_sway 10s alternate infinite;

}


@keyframes gradient {
  0% {
    background-position: 0% 20%;
  }
  50% {
    background-position: 20% 50%;
  }
  100% {
    background-position: 50% 100%;
  }
}

.nav_buttons {
text-decoration: none;
text-align: left;
border: none;
padding: 0px;
background-color: transparent;
color: rgba(255,255,255,0.7);
border-radius: 0px;
font-family: "Fredoka";
font-weight: 300;
cursor: pointer;
font-size: clamp(1.5vw, 2vw, 1.7vw);
animation: textsway 4s alternate infinite;
}


.nav_buttons:hover {
font-size: clamp(1.6vw, 2vw, 1.8vw);
font-weight: 400;
}


@keyframes nav {
from {
margin: -1px 0px 0px 55px;
}

to {
margin: -1px 0px 0px 54px;
}

to {
margin: 0.5px 0px 0px 55px;
}

to {
margin: 0px 0px 0px 53px;
}

}

@keyframes corners {
0% {
border-radius: 5px 5px 5px 5px;
}

50% {
border-radius: 20px 100px 20px 100px;
}

75% {
border-radius: 40px 40px 40px 40px;
}

100% {
border-radius: 20px 20px 20px 20px;
}


}


@keyframes sway {
  from { 
  transform: rotate(-1deg) translateY(0px);
  }

  to { 
  transform: rotate(1deg) translateY(-10px); 

  }
}

@keyframes textsway {
  from { 
  transform: rotate(-2deg) translateY(0px);
  }

  to { 
  transform: rotate(2deg) translateY(0px); 

  }
}


@keyframes alt_sway {
  from { 
  transform: rotate(-3deg) translateY(2px);
  }
  to { 
  transform: rotate(3deg) translateY(-2px); 

  }

}

.hero_section {
background-color: transparent;
height: 100vh;
width: 100vw;
overflow-x: hidden;
}

</style>

