<script>
import { onMount } from 'svelte';

let welcome_section;

onMount(()=>{
welcome_section.style.backgroundColor = "rgba(100,0,200,0.6)";
});


function welcome_button() {
welcome_section.style.display = "none";
}

let search_field = $state('');
let filtered_images = $derived(
    all_images.filter(img => {
      const query = search_field.toLowerCase();
      return (
        img.tags.toLowerCase().includes(query) ||
        img.alt_text.toLowerCase().includes(query)
      );
    })
  );

const all_images = [
{ image_url: "0.jpg",
  alt_text: "art",
  tags: "apple" },
{ image_url: "1.png",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "2.png",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "3.png",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "5.jpg",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "6.jpg",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "7.png",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "8.jpg",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "9.png",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "10.jpg",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "11.jpg",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "12.png",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "13.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "14.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "15.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "16.PNG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "17.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "18.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "19.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "20.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "21.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "22.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "23.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "24.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "25.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "26.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "27.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "28.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "29.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "30.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "31.JPG",
  alt_text: "art",
  tags: "wow cool dang" },
{ image_url: "32.jpeg",
  alt_text: "art",
  tags: "wow cool dang" }
]

const home_page_images = [
{ title: "wow art",
  image_url: "24.JPG",
  alt_text: "cool art",
  id: "a"},
{ title: "wow art",
  image_url: "30.JPG",
  alt_text: "cool art",
  id: "b"},
{ title: "wow art",
  image_url: "5.jpg",
  alt_text: "cool art",
  id: "c"},
{ title: "wow art",
  image_url: "8.jpg",
  alt_text: "cool art",
  id: "d"},
{ title: "wow art",
  image_url: "10.jpg",
  alt_text: "cool art",
  id: "e"},
{ title: "wow art",
  image_url: "12.png",
  alt_text: "cool art",
  id: "f"},
{ title: "wow art",
  image_url: "13.JPG",
  alt_text: "cool art",
  id: "g"},
{ title: "wow art",
  image_url: "19.JPG",
  alt_text: "cool art",
  id: "h"},
{ title: "wow art",
  image_url: "15.JPG",
  alt_text: "cool art",
  id: "i"},
{ title: "wow art",
  image_url: "16.PNG",
  alt_text: "cool art",
  id: "j"}
]


let nav_buttons = [
{ title: "Art", 
  id: "nav_link_one", 
  active_text: "Art ✍",
  description: "view art",
  bg_color: "lightblue"
  },
{ title: "Events", 
  id: "nav_link_two", 
  active_text: "Events ✦",
  description: "view events",
  bg_color: "lightgreen"
  },
{ title: "Collections", 
  id: "nav_link_three", 
  active_text: "Collections ✦",
  description: "view collections",
  bg_color: "lightyellow"
  },
{ title: "Socials", 
  id: "nav_link_four", 
  active_text: "Socials ✦",
  description: "view socials",
  bg_color: "lightorange"
  },
{ title: "Articles",
  id: "nav_link_five",
  active_text: "Articles ✦",
  description: "view articles",
  bg_color: "lightpurple"
  },
{ title: "About",
  id: "nav_link_six",
  active_text: "About ✦",
  description: "view about",
  bg_color: "lightred"
  },
{ title: "Reviews",
  id: "reviews",
  active_text: "Reviews ✦",
  description: "view reviews",
  bg_color: "indigo"
  }
];

function buttonSwitcher(id) {
active_nav_id = id;
}

</script>


<section bind:this={welcome_section} class="welcome_section">
<button onclick={welcome_button}>Enter</button>
</section>


<nav class="nav_section"></nav>


<main class="main_section">
<section class="search_div">
<input 
  type="text" 
  bind:value={search_field} 
  placeholder="Search images by tags..." 
  id="search"
/>
</section>

<section class="homepage_images">
{#if filtered_images.length >= 1}
  <div class="homepage_image_flex_container">
    {#each filtered_images as image}
        <img 
	class="flex_image" 
	src="artwork/{image.image_url}" 
	alt="artwork/{image.alt_text}" 
	/>
    {/each}
  </div>
{/if}
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
  &::-webkit-scrollbar { display: none; }
    scrollbar-width: none;
   -ms-overflow-style: none; 
}

.expand_button {
position: absolute;
background-color: transparent;
color: white;
border: none;
font-size: 3rem;
}



.welcome_section {
backdrop-filter: blur(20px);
margin: auto;
inset: 0;
position: fixed;
box-shadow: inset 0px 0px 100px grey;
z-index: 100000000000000000000;
}

.static_nav {
display: flex;
flex-direction: column;
background-color: transparent;
align-items: center;
width: calc(25vw);
height: 100%;
gap: 4px;
margin-top: 4px;
}


.homepage_image_flex_container {
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
gap: 5px;
background-color: white;
height: calc(100vh - 30vh);
width: calc(100vw - 20vw);
padding: 15vh 10vw;
overflow-x: hidden;
overflow-y: scroll;
flex-wrap: wrap;
}


.flex_image {
width: calc(20vw - 5px);
aspect-ratio: 1/1;
border-radius: 5px;
}



.menu_section {
width: 25vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 0px;
background-color: black;
margin: 4px 0px 4px 4px;
height: calc(100vh - 8px);
overflow-x: hidden;
overflow-y: scroll;
border-radius: 5px;
}

.search_div {
background-color: rgba(0,0,0,0);
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
padding: 0px 20px 0px 20px;
position: fixed;
z-index: 10000;
top: 0px;
left: 0px;
}

#search {
border-radius: 500px;
padding: 12px 30px;
width: 50vw;
background-color: rgba(255,255,255,0.8);
border: 1px solid rgba(255,255,255,1);
color: black;
margin: 4vh;
box-shadow: -5px 5px 15px rgba(0,0,0,0.1);
backdrop-filter: blur(20px);
outline: none;
}

#search:focus {
border: 3px inset red; 
}

#homepage_image_grid_container {
display: grid;
gap: 5px;
background-color: white;
height: calc(100vh - 120px);
width: calc(100vw - 350px);
padding: 85px 175px;
overflow-x: hidden;
overflow-y: scroll;
}

.grid_image {
aspect-ratio: 1/1;
border-radius: 5px;
width: 100%;
height: 100%;
object-fit: cover;
object-position: center;
overflow: hidden;
filter: saturate(110%);
}

.nav_container {
background-color: transparent;
display:flex;
flex-direction: column;
gap: 0px;
height: calc(100%);
}

.nav_buttons {
text-decoration: none;
text-align: left;
border: none;
padding: 20px;
background-color: white;
color: black;
border-radius: 5px;
font-family: "Fredoka";
font-weight: 300;
cursor: pointer;
font-size: clamp(1.5vw, 2vw, 1.7vw);
animation: textsway 4s alternate infinite;
width: calc(25vw - 54px);
}

.nav_buttons:hover {
font-size: clamp(1.6vw, 2vw, 1.8vw);
font-weight: 400;
}

.main_section {
display: flex;
width: 100vw;
height: 100%;
overflow: hidden;
background-color: white;
}
</style>

