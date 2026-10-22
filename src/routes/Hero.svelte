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


let nav_buttons = [
{title: "Art",
 id: "nav_link_one"},
{title: "Events",
 id: "nav_link_two"},
{title: "Collections",
 id: "nav_link_three"},
{title: "Socials",
 id: "nav_link_four"}
]


function buttonSwitcher(event) {
const clickedButton = event.target;
let art = document.getElementById("nav_link_one");
let events = document.getElementById("nav_link_two");
let collections = document.getElementById("nav_link_three");
let socials = document.getElementById("nav_link_four");

if (clickedButton === art) {
art.innerHTML = "Art &#9997;";
events.innerHTML = "Events";
collections.innerHTML = "Collections";
socials.innerHTML = "Socials";
}
else if (clickedButton === events) {
art.innerHTML = "Art";
events.innerHTML = "Events &#10022;";
collections.innerHTML = "Collections";
socials.innerHTML = "Socials";
}
else if (clickedButton === collections) {
art.innerHTML = "Art ";
events.innerHTML = "Events";
collections.innerHTML = "Collections &#10022;";
socials.innerHTML = "Socials";
}
else if (clickedButton === socials) {
art.innerHTML = "Art";
events.innerHTML = "Events";
collections.innerHTML = "Collections";
socials.innerHTML = "Socials &#10022;";
}

}

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
</nav>

<div class="static_nav">
{#each nav_buttons as link}
<button 
onclick={buttonSwitcher} 
class="nav_buttons" 
id={link.id}>
{link.title}</button>
{/each}
</div>

<div class="KBA_container"></div>
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
<!--<img class="grid_image" src={images[0].image_url} style="grid-area: k"/>-->
</div>


<section class="menu_section">
<div class="side_div">
<div>
<div class="home_container"></div>
<a class="bottom_links home_link" href="">HOME</a>
</div>
<div>
<div class="discover_container"></div>
<a class="bottom_links discover_link" href="">DISCOVER</a>
</div>
</div>
<div class="side_div">
<div class="article_link_container"></div>
<a class="bottom_links article_link" href="">ARTICLES</a>
<div class="review_link_container"></div>
<a class="bottom_links review_link" href="">REVIEWS</a>
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



.discover_link, .home_link {
z-index: 1000000000;
position: absolute;
}


.discover_container {
background-color: yellow;
box-shadow: 0px 0px 500px yellow;
filter: blur(100px);
opacity: 0.6;
width: 5vw;
min-width: 70px;
height: 20px;
margin-right: 20px;
border-radius: 100px;
position: relative;
}

.home_container {
background-color: purple;
box-shadow: 0px 0px 500px purple;
filter: blur(100px);
opacity: 0.6;
width: 5vw;
min-width: 70px;
height: 20px;
margin-right: 20px;
border-radius: 100px;
position: relative;
}




.static_nav {
display: flex;
flex-direction: column;
background-color: transparent;
max-width: 200px;
max-height: 110px;
inset: 0;
margin-top: auto;
margin-bottom: auto;
margin-left: 50px;
position: fixed;
z-index: 100000000;
animation: staticnav 3s alternate infinite;
}

.KBA_container {
position: absolute;
margin: auto;
inset: 0;
background-color: indigo;
width: 200px;
height: 150px;
margin-left: -20px;
margin-top: -20px;
opacity: 0.2;
filter: blur(500px);
border-radius: 100px;
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
width: 100vw;
display: flex;
justify-content: space-between;
gap: 20px;
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
clip-path: inset(-100px -100px -100px -100px);
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
"a a b b c"
"a a d e f";
gap: 10px;
background-color: transparent;
scale: 1.0;
width: 50vw;
}

.grid_image {
aspect-ratio: 1/1;
border-radius: 10px;
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
}

.nav_container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
position: fixed;
min-width: 100px;
min-height: 100px;
inset: 0;
margin-top: auto;
margin-bottom: auto;
margin-left: 50px;
width: 17vw;
height: 17vw;
border: 0px solid black;
z-index: 100000000;
box-shadow: inset 0px 0px 5px white, 0px 0px 500px rgba(0,0,255,1);
gap: 0px;
transition: all 1s linear;
background: radial-gradient( pink 40%, orange );

  background-size: 600% 600%;
  animation: gradient 30s alternate infinite, corners 10s alternate infinite,alt_sway 10s alternate infinite;
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
animation: nav 4s alternate infinite, textsway 4s alternate infinite;
}

#nav_link_one {
animation: linkmove 3.10s alternate infinite;
}

#nav_link_one:hover {
scale: 2.1;
}

#nav_link_two {
animation: linkmove 3.11s alternate infinite;

}

#nav_link_three {
animation: linkmove 3.12s alternate infinite;

}

#nav_link_four {
animation: linkmove 3.13s alternate infinite;

}

@keyframes linkmove {
from {
margin-left: 45px;
scale: 1.01;
}

to {
margin-left: 47px;
scale: 1.05;
}
}


.nav_links:hover {
font-size: clamp(1.6vw, 2vw, 1.8vw);

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

@keyframes staticnav {
from {
transform: translateY(-35px);
transform: translateX(15px);

}

to {
transform: translateY(-25px);
transform: translateX(13px);
}

}



@keyframes corners {
0% {
border-radius: 100px 80px 80px 100px;
}

50% {
border-radius: 90px 90px 90px 90px;
}

75% {
border-radius: 100px 100px 100px 90px;
}

100% {
border-radius: 100px 100px 100px 100px;
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
  transform: rotate(-200deg) translateY(2px);
  }
  to { 
  transform: rotate(100deg) translateY(-2px); 

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

