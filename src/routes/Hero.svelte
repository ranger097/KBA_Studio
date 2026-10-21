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

let starterImage = $state(0);
let currentImage = images[starterImage].image_url;
let lastThreshold = $state(0);

function nextImage() {
starterImage = (starterImage + 1) % images.length 
currentImage = images[starterImage].image_url;
}


function handleScroll() {
const threshold = Math.floor(window.scrollY / 600);
if (threshold > lastThreshold) {
nextImage();
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

<nav class="nav_container">
<a class="nav_links" href="">Art</a>
<a class="nav_links" href="">Events</a>
<a class="nav_links" href="">Collections</a>
<a class="nav_links" href="">Socials</a>
</nav>

<h3 class="header">KATHY<br>BELCHER<br>ART</h3>

{#key starterImage}
<div class="image_container">
<img src={currentImage} alt={images[starterImage].alt_text}
class="hero_image"
/>
</div>

{/key}

<div class="grid_container">
<img class="grid_image" src={images[0].image_url} style="grid-area: a"/>
<img class="grid_image" src={images[1].image_url} style="grid-area: b"/>
<img class="grid_image" src={images[2].image_url} style="grid-area: c"/>
<img class="grid_image" src={images[3].image_url} style="grid-area: d"/>
<img class="grid_image" src={images[4].image_url} style="grid-area: e"/>
<img class="grid_image" src={images[5].image_url} style="grid-area: f"/>
<img class="grid_image" src={images[6].image_url} style="grid-area: g"/>
<img class="grid_image" src={images[7].image_url} style="grid-area: h"/>
<img class="grid_image" src={images[8].image_url} style="grid-area: i"/>
<img class="grid_image" src={images[9].image_url} style="grid-area: j"/>
<img class="grid_image" src={images[0].image_url} style="grid-area: k"/>
<img class="grid_image" src={images[0].image_url} style="grid-area: l"/>
<img class="grid_image" src={images[0].image_url} style="grid-area: m"/>
<img class="grid_image" src={images[0].image_url} style="grid-area: n"/>
<img class="grid_image" src={images[0].image_url} style="grid-area: o"/>
</div>

<div class="image_info">
<a class="image_links" href="">{images[starterImage].link1}</a>
<a class="image_links" href="">{images[starterImage].link2}</a>
<a class="image_links" href="">{images[starterImage].link3}</a>
</div>

<section class="menu_section">
<a class="bottom_links" href="">DISCOVER</a>
<div class="side_div">
<a class="bottom_links" href="">ARTICLES</a>
<a class="bottom_links" href="">REVIEWS</a>
</div>
</section>

<button class="menu_button">Menu</button>
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

.header {
position: fixed;
top: 0px;
left: 20px;
background-color: transparent;
font-family: "Playfair Display SC", serif;
font-weight: 700;
font-style: normal;
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
height: 100vh;
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

.menu_section {
position: fixed;
width: 100vw;
bottom: 0px;
left: 0px;
display: flex;
justify-content: space-between;
}

.bottom_links {
background-color: transparent;
padding: 17px 30px;
text-decoration: none;
color: black;
border-bottom: 3px solid transparent;
font-family: "Playfair Display SC", serif;
font-weight: 700;
font-style: normal;
}

.bottom_links:hover {
border-bottom: 3px solid red;
}

.side_div {
display: flex;
}

.grid_container {
margin: auto;
inset: 0;
z-index: 1000000;
display: grid;
grid-template-areas: 
"a b c d e"
"f g h i j"
"k l m n o";
gap: 10px;
}


.grid_image {
aspect-ratio: 1/1;
max-width: 13vw;
}

.grid_image:hover {

}

.nav_container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
position: fixed;
width: 12vw;
height: 23vw;
min-width: 200px;
min-height: 100px;
inset: 0;
margin-top: auto;
margin-bottom: auto;
margin-left: 50px;
border: 1px solid black;
z-index: 100000000;
box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
gap: 0px;
transition: all 1s linear;
background: radial-gradient(blue, lightcoral, yellow, grey);

  background-size: 400% 400%;
  animation: gradient 200s ease infinite, corners 10s alternate infinite,alt_sway 10s alternate infinite, size_change 8s alternate infinite;
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

.nav_links {
text-decoration: none;
color: white;
border-radius: 0px;
font-family: "Fredoka";
font-weight: 300;
font-size: clamp(1.5vw, 2vw, 1.7vw);
text-shadow: 0px 0px 10px rgba(0,0,0,0.4);
margin-left: 45px;
}




@keyframes corners {
0% {
border-radius: 100px 100px 100px 100px;
}

50% {
border-radius: 0px 0px 0px 0px;
}

75% {
border-radius: 0px 0px 0px 0px;
}

100% {
border-radius: 0px 0px 0px 0px;
}


}


@keyframes size_change {
0% {
height: 15vw;
width: 15vw;
}

25% {
height: 15vw;
width: 15vw;
}

75% {
height: 15vw;
width: 15vw;
}

100% {
height: 15vw;
width: 15vw;
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


@keyframes alt_sway {
  from { 
  transform: rotate(-6deg) translateY(0px);
  }
  to { 
  transform: rotate(3deg) translateY(0px); 

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

.menu_button {
position: fixed;
margin: auto;
inset: 0;
width: 50px;
height: 20px;
padding: 0px;
cursor: pointer;
border: none;
margin-top: 30px;
margin-right: 30px;
font-family: "Playfair Display SC", serif;
font-weight: 700;
font-style: normal;
}

</style>

