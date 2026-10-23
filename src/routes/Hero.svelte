<script>
import { onMount } from 'svelte';

const home_page_images = [
{ title: "wow art",
  image_url: "IMG_9645.JPG",
  alt_text: "cool art",
  id: "a"},
{ title: "wow art",
  image_url: "IMG_8656.JPG",
  alt_text: "cool art",
  id: "b"},
{ title: "wow art",
  image_url: "IMG_8802.JPG",
  alt_text: "cool art",
  id: "c"},
{ title: "wow art",
  image_url: "111.png",
  alt_text: "cool art",
  id: "d"},
{ title: "wow art",
  image_url: "22.png",
  alt_text: "cool art",
  id: "e"},
{ title: "wow art",
  image_url: "IMG_9645.JPG",
  alt_text: "cool art",
  id: "f"},
{ title: "wow art",
  image_url: "IMG_8656.JPG",
  alt_text: "cool art",
  id: "g"},
{ title: "wow art",
  image_url: "IMG_8802.JPG",
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
      "f g h i"
      "j . . ."
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
<button class="bottom_links discover_link">DISCOVER</button>
<div>
<button class="bottom_links article_link">ARTICLES</button>
<button class="bottom_links review_link">REVIEWS</button>
</div>
</section>

</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gravitas+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

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
top: 0px;
left: 20px;
background-color: transparent;
font-family: "Playfair Display SC", serif;
font-weight: 700;
font-style: normal;
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
justify-content: space-between;
align-items: center;
gap: 0px;
background-color: transparent;
}

.bottom_links {
background-color: transparent;
padding: 17px 30px;
text-decoration: none;
color: black;
border: none;
border-bottom: 3px solid transparent;
font-family: "Playfair Display SC", serif;
font-weight: 700;
font-style: normal;
clip-path: inset(-100px -100px -100px -100px);
}

.bottom_links:hover {
border-bottom: 3px solid red;
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
height: 50vh;
width: 60vw;
padding: 40px 20px 40px 15vw;
}

.grid_image {
aspect-ratio: 1/1;
border-radius: 2px;
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
margin-top: auto;
margin-bottom: auto;
margin-left: 50px;
width: 18vw;
height: 18vw;
border: 0px solid black;
z-index: 100000000;
box-shadow: inset 0px 0px 0.5vw white,-1vw 2vw 1vw rgba(0,0,0,0.5), 0px 0px 100vw rgba(0,0,255,1);
background: radial-gradient( coral 30%, orange 70% );

gap: 0px;
transition: all 1s linear;
background-size: 200% 200%;
animation: gradient 30s alternate infinite, corners 60s alternate infinite,alt_sway 10s alternate infinite;

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
color: white;
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
border-radius: 100px 100px 100px 100px;
}

50% {
border-radius: 200px 100px 200px 100px;
}

75% {
border-radius: 200px 400px 200px 400px;
}

100% {
border-radius: 200px 100px 200px 100px;
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

