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


</script>


<main 
class="main_section hero_section" 
id="main_section"
>
{#each images as image}
<img src={image.image_url}
class="fade-in-on-scroll hero_image hero_section"
/>

{/each}

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
animation: fadeIn 1s ease-in;
}

.hero_image {
width: 70vw;
aspect-ratio: 16/9;
object-fit: cover;
}


/* 1. Define the fade-in animation keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(200px); /* Optional: slight slide-up effect */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 2. Apply it to your target elements */
.fade-in-on-scroll {
  /* Tie the animation progress to the element entering the viewport */
  animation-timeline: view();
  
  /* Define when the animation starts and finishes */
  /* 'entry 0%' starts as soon as the element peeks into view */
  /* 'cover 30%' finishes when it travels through 30% of the viewport */
  animation-range: entry 0% cover 100%;
  
  /* Assign the keyframes */
  animation-name: fadeIn;
  animation-fill-mode: both; 
}


/* 1. Define the fade-out animation keyframes */
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* 2. Apply it to the hero container */
.hero-section {
  animation-timeline: view();
  
  /* 'exit 0%' begins the fade as the section starts leaving the top */
  /* 'exit 100%' finishes when the section is completely out of view */
  animation-range: exit 0% exit 100%;
  
  animation-name: fadeOut;
  animation-fill-mode: both;
}


</style>

