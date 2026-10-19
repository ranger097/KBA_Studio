<script>
let selectedBackground = "/Gallery/IMG_9960.JPG";
let selectedImage = null;
let intervalId = null;

const images = [
{ title: "wow art",
  image_url: "/Gallery/IMG_9645.JPG",
  alt_text: "cool art" },
{ title: "wow art",
  image_url: "/Gallery/IMG_8656.JPG",
  alt_text: "cool art" },
{ title: "wow art",
  image_url: "/Gallery/IMG_8802.JPG",
  alt_text: "cool art" },
{ title: "wow art",
  image_url: "/Gallery/111.png",
  alt_text: "cool art" },
{ title: "wow art",
  image_url: "/Gallery/22.png",
  alt_text: "cool art" },
{ title: "wow art",
  image_url: "/Gallery/IMG_9645.JPG",
  alt_text: "cool art" },
{ title: "wow art",
  image_url: "/Gallery/IMG_8656.JPG",
  alt_text: "cool art" },
{ title: "wow art",
  image_url: "/Gallery/IMG_8802.JPG",
  alt_text: "cool art" },
{ title: "wow art",
  image_url: "/Gallery/111.png",
  alt_text: "cool art" },
{ title: "wow art",
  image_url: "/Gallery/22.png",
  alt_text: "cool art" }
]

function nextImage() {
if (selectedImage === null) {
    selectedImage = 0;
  } else {
    selectedImage = (selectedImage + 1) % images.length;
  }
  selectedBackground = images[selectedImage].image_url;
}

function slideShow() {
if (intervalId) clearInterval(intervalId);
intervalId = setInterval(nextImage,3000);
}

slideShow();

</script>


<main 
class="main_section" 
id="main_section"
style:background-image={`url("${selectedBackground}")`}
>

<section class="hero_section">
<div class="header_div">
<h1>KATHY BELCHER ART</h1>
</div>
<div class="description_container">
<p class="description">Creating art for me is a form of meditation. When a landscape painting is going well, it is not so much about the image for me; it is about being with the painting, inside the painting space. I often get lost in my work, losing a sense of time and specific space. My contemporary semi-abstract paintings give the viewer the opportunity to travel to a place of peace and tranquility.</p>
<button class="view_button">
  Learn More
  <div class="star-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      version="1.1"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      viewBox="0 0 784.11 815.53"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          class="fil0"
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      version="1.1"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      viewBox="0 0 784.11 815.53"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          class="fil0"
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      version="1.1"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      viewBox="0 0 784.11 815.53"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          class="fil0"
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      version="1.1"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      viewBox="0 0 784.11 815.53"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          class="fil0"
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      version="1.1"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      viewBox="0 0 784.11 815.53"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          class="fil0"
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        ></path>
      </g>
    </svg>
  </div>
  <div class="star-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      version="1.1"
      style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      viewBox="0 0 784.11 815.53"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs></defs>
      <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"></metadata>
        <path
          class="fil0"
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        ></path>
      </g>
    </svg>
  </div>
</button>

</div>
</section>
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
}

h1 {
color: white;
text-shadow: 0px 0px 10px rgba(255,255,255,0.1);
}

.description {
margin: 0vw 0px 0vw 0vw;
 font-family: "Fredoka", sans-serif;
 font-size: clamp(1.5vw, 4vw, 1.7vw) ;
 font-weight: 300;
 font-style: normal;
 font-variation-settings:
    "wdth" 100;
padding: 20px 6vw;
background-color: rgba(0,0,0,1);
color: white;
text-shadow: -2px 2px 5px rgba(0,0,0,0.4);

}

.description_container {
display: flex;
flex-basis: 50%;
flex-wrap: nowrap;
background-color: black;
margin: 0vh 0px 0px 0px;
}

.view_button {
margin: 5vw;
text-wrap: nowrap;
flex-basis: 50%;
background-color: red;
outline: none;
border-radius: 100px;
color: white;
font-size: clamp(1.3vw, 4vw, 1.4vw);
padding: 0px 30px;
}

.hero_section {
object-fit: contain;
height: 100%;
margin: 0px 0px 0px 0px;
}

.hero_section:hover {
object-fit: contain;
height: 100%;
margin: 0px 0px 0px 0px;
}


.main_section {
background-size: 100vw;
background-repeat: no-repeat;
background-position: center;
}

.header_div {
width: 100vw;
background-color: rgba(255,255,255,0);
display: flex;
align-items: center;
justify-content: center;
padding: 10vw 0px 10vw 0px;
height: 100%;
margin: 0vw 0px 0px 0px;

}

.header_div:hover {
-webkit-backdrop-filter: blur(20px) brightness(0.4) saturate(1);
backdrop-filter: blur(20px) brightness(0.4) saturate(1);

}

h1 {
font-size: clamp(6vw, 2vw, 8vw);
}

button {
  position: relative;
  padding: 12px 35px;
  background: #fec195;
  font-size: 17px;
  font-weight: 500;
  color: #181818;
  border-radius: 100px;
  box-shadow: 0 0 30 #fec1958c;
  transition: all 0.5s linear;
  cursor: pointer;
  outline: none;
  border: none;
}

.star-1 {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 10px #000000);
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
}

.star-2 {
  position: absolute;
  top: 45%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #000000);

  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-3 {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #000000);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-4 {
  position: absolute;
  top: 20%;
  left: 40%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 10px #000000);
  z-index: -5;
  transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-5 {
  position: absolute;
  top: 25%;
  left: 45%;
  width: 15px;
  height: auto;
 filter: drop-shadow(0 0 10px #000000);
  z-index: -5;
  transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-6 {
  position: absolute;
  top: 5%;
  left: 50%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #000000);
  z-index: -5;
  transition: all 0.8s ease;
}

button:hover {
  background: rgba(0,0,0,1);
  border-radius: 100px;
  color: #fec195;
  box-shadow: 0 0 70px lightgoldenrodyellow;
  outline:none;
  border: none;
}

button:hover .star-1 {
  position: absolute;
  top: -80%;
  left: -30%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 15px black);
  z-index: 2;
}

button:hover .star-2 {
  position: absolute;
  top: -25%;
  left: 10%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 15px black);
  z-index: 2;
}

button:hover .star-3 {
  position: absolute;
  top: 55%;
  left: 25%;
  width: 5px;
  height: auto;
 filter: drop-shadow(0 0 15px black);
  z-index: 2;
}

button:hover .star-4 {
  position: absolute;
  top: 30%;
  left: 80%;
  width: 8px;
  height: auto;
 filter: drop-shadow(0 0 15px black);
  z-index: 2;
}

button:hover .star-5 {
  position: absolute;
  top: 25%;
  left: 115%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 15px black);
  z-index: 2;
}

button:hover .star-6 {
  position: absolute;
  top: 5%;
  left: 60%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 15px black);
  z-index: 2;
}

.fil0 {
  fill: lightgoldenrodyellow;
}

</style>

