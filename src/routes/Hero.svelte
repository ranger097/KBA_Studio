<script>

const images = [
{ title: "wow art",
  image_url: "/Gallery/IMG_9645.JPG",
  alt_text: "cool art",
  link1: "who cool link",
  link2: "who another link",
  link3: "dang 3 links" },
{ title: "wow art",
  image_url: "/Gallery/IMG_8656.JPG",
  alt_text: "cool art",
  link1: "who cool link",
  link2: "who another link",
  link3: "dang 3 links" },
{ title: "wow art",
  image_url: "/Gallery/IMG_8802.JPG",
  alt_text: "cool art",
  link1: "who cool link",
  link2: "who another link",
  link3: "dang 3 links" },
{ title: "wow art",
  image_url: "/Gallery/111.png",
  alt_text: "cool art",
  link1: "who cool link",
  link2: "who another link",
  link3: "dang 3 links" },
{ title: "wow art",
  image_url: "/Gallery/22.png",
  alt_text: "cool art",
  link1: "who cool link",
  link2: "who another link",
  link3: "dang 3 links" },
{ title: "wow art",
  image_url: "/Gallery/IMG_9645.JPG",
  alt_text: "cool art",
  link1: "who cool link",
  link2: "who another link",
  link3: "dang 3 links" },
{ title: "wow art",
  image_url: "/Gallery/IMG_8656.JPG",
  alt_text: "cool art",
  link1: "who cool link",
  link2: "who another link",
  link3: "dang 3 links" },
{ title: "wow art",
  image_url: "/Gallery/IMG_8802.JPG",
  alt_text: "cool art",
  link1: "who cool link",
  link2: "who another link",
  link3: "dang 3 links" },
{ title: "wow art",
  image_url: "/Gallery/111.png",
  alt_text: "cool art",
  link1: "who cool link",
  link2: "who another link",
  link3: "dang 3 links" },
{ title: "wow art",
  image_url: "/Gallery/22.png",
  alt_text: "cool art",
  link1: "who cool link",
  link2: "who another link",
  link3: "dang 3 links" }
]

let starterImage = 0;
let currentImage = images[starterImage].image_url;
let lastThreshold = 0;

function nextImage() {
starterImage = (starterImage + 1) % images.length 
currentImage = images[starterImage].image_url;
}

function previousImage() {
starterImage = (starterImage - 1) % images.length 
currentImage = images[starterImage].image_url;
}


function handleScroll() {
const threshold = Math.floor(window.scrollY / 600);
if (threshold > lastThreshold) {
nextImage();
} 
else if ( threshold < lastThreshold) {
previousImage();
}
lastThreshold = threshold;
}


</script>

<svelte:window 
onscroll={handleScroll}
/>

<main 
class="main_section hero_section" 
id="main_section"
>
{#key starterImage}
<div class="image_container">
<img src={currentImage}
class="hero_image"
/>
</div>

{/key}
<div class="image_info">
<a href="">{images[starterImage].link1}</a>
<a href="">{images[starterImage].link2}</a>
<a href="">{images[starterImage].link3}</a>

</div>
</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gravitas+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');


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


.main_section {
background-size: 100vw;
background-repeat: no-repeat;
background-position: center;
object-fit: contain;
transition: all 0.5s linear;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 100px;

height: 10000vh;
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
}

.image_info {
background-color: transparent;
position: fixed;
z-index: 100000000000000;
margin: auto;
margin-right: 120px;
inset: 0;
width: 200px;
height: 200px;
text-decoration: none;
color: white;
}

a {
color: black;
}

@keyframes sway {
  from { 
  transform: rotate(-1deg) translateY(0px);
  }
  to { 
  transform: rotate(1deg) translateY(-10px); 

  }
}


@keyframes fadeIn {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.fade-in-on-scroll {
  animation-timeline: view();
  animation-range: entry 0% cover 10%;
  animation-name: fadeIn;
  animation-fill-mode: both; 
}


@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.hero-section {
  animation-timeline: view();
  animation-range: exit 0% exit 100%;
  animation-name: fadeOut;
  animation-fill-mode: both;
}


</style>

