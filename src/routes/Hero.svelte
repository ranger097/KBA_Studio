<script>
const images = [
{ title: "wow art",
  image_url: "/Gallery/IMG_8781.JPG",
  alt_text: "cool art" },
{ title: "wow art",
  image_url: "/Gallery/IMG_8781.JPG",
  alt_text: "cool art" },
{ title: "wow art",
  image_url: "/Gallery/IMG_8781.JPG",
  alt_text: "cool art" },
{ title: "wow art",
  image_url: "/Gallery/IMG_8781.JPG",
  alt_text: "cool art" },
{ title: "wow art",
  image_url: "/Gallery/IMG_8781.JPG",
  alt_text: "cool art" }
]
</script>

<section class="hero_section">
<div class="header_div">
<h1>KATHY BELCHER ART</h1>
</div>
<div class="description_container">
<p class="description">Creating art for me is a form of meditation. When a landscape painting is going well, it is not so much about the image for me; it is about being with the painting, inside the painting space. I often get lost in my work, losing a sense of time and specific space. My contemporary semi-abstract paintings give the viewer the opportunity to travel to a place of peace and tranquility.</p>
<button class="view_button">see more</button>
</div>
<section class="hero_art_image_container">
{#each images as art}
<img class="hero_art_images" src={art.image_url} alt={art.alt_text}/>
{/each}

</section>
</section>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gravitas+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');


* {
  font-family: "Gravitas One", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.hero_art_images {
max-width: 200px;
}

.hero_art_image_container {
margin: 20px 6vw;
display: flex;
gap: 20px;

}

.description {
margin: -3vw 0px 0px 6vw;
 font-family: "Fredoka", sans-serif;
  font-size: clamp(1.2vw, 2vw, 1.5vw) ;
  font-weight: 300;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;

}

.description_container {
display: flex;
flex-basis: 50%;
flex-wrap: nowrap;
}

.view_button {
margin: 10px 6vw 0px 50px;
text-wrap: nowrap;
flex-basis: 50%;
background-color: black;
outline: none;
border: none;
border-radius: 0px;
color: white;
font-size: clamp(1vw, 2vw, 1.4vw);
}

.hero_section {
background: radial-gradient(#f7edd3 0%,white);
height: 100vh;
margin: 39px 0px 0px 0px;
}

.header_div {
width: 100vw;
background-color: rgba(255,255,255,0);
display: flex;
align-items: center;
justify-content: center;
padding: 0px;
}

h1 {
font-size: clamp(6vw, 2vw, 8vw);
}
</style>

