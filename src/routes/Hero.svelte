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
  image_url: "9090.jpg",
  alt_text: "cool art",
  id: "i"},
{ title: "wow art",
  image_url: "IMG_8861.JPG",
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
{ title: "Art", 
  id: "nav_link_one", 
  active_text: "Art ✍",
  description: "view art"
  },
{ title: "Events", 
  id: "nav_link_two", 
  active_text: "Events ✦",
  description: "view events"
  },
{ title: "Collections", 
  id: "nav_link_three", 
  active_text: "Collections ✦",
  description: "view collections"
  },
{ title: "Socials", 
  id: "nav_link_four", 
  active_text: "Socials ✦",
  description: "view socials"
  },
{ title: "Articles",
  id: "nav_link_five",
  active_text: "Articles ✦",
  description: "view articles" 
  },
{ title: "About",
  id: "nav_link_six",
  active_text: "About ✦",
  description: "view about" 
  }
];

function buttonSwitcher(id) {
active_nav_id = id;
}

</script>


<main class="main_section">
<section class="menu_section">
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
</section>
<section class="grid_section">
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
background-color: blue;
width: 25vw;
height: 100%;
}

.logo_container {
background: linear-gradient(purple, orange);
padding-top: 10px;
padding-right: 10px;
aspect-ratio: 1/1;
display: flex;
align-items: center;
justify-content: center;
}

.img_logo {
width: 100%;
aspect-ratio: 1/1;
scale: 1.2;
}

.header {
position: fixed;
bottom: 0px;
left: 20px;
background-color: transparent;
font-size: 3vw;
}

.menu_section {
width: 25vw;
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
gap: 41px;
background-color: white;
margin: 4px 0px 4px 4px;
height: calc(100vh - 8px);
overflow-x: hidden;
overflow-y: scroll;
}

#homepage_image_grid_container {
display: grid;
gap: 4px;
background-color: white;
height: 100%;
width: 75vw;
padding: 4px;
overflow-x: hidden;
overflow-y: scroll;
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
background-color: transparent;
display:flex;
flex-direction: column;
gap: 4px;
height: 100%
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

.main_section {
display: flex;
width: 100vw;
height: 100vh;
overflow: hidden;
background-color: white;
}
</style>

