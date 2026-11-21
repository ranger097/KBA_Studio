<script>
import { menu , menu_button } from '#lib/menu.svelte.js';
import { settings } from '#lib/settings.svelte.js';
let { hidden = false } = $props();
</script>

<main class="main_section" class:hidden class:darkmode={settings.darkmode}>
<nav class="nav_section" class:hidden class:darkmode={settings.darkmode}>
 {#if menu.open}
       <a class="menu_link close_button" onclick={menu_button} class:active={menu.open}>
      <img class="menu_icon close_icon" src="artwork/icons/close-icon-x-svgrepo-com.svg"/>
      Close
      </a>

      {:else}
       <a class="menu_link close_button" onclick={menu_button} class:active={menu.open}>
      <img class="menu_icon close_icon" src="artwork/icons/menu-svgrepo-com.svg"/>
      </a>
      {/if}

<a class="menu_link" onclick={menu_button} href="."><img class="menu_icon"  src="artwork/icons/house-svgrepo-com(1).svg"/>Home</a>
<a class="menu_link" onclick={menu_button} href="./Images/"><img class="menu_icon" src="artwork/icons/image-placeholder-svgrepo-com.svg"/>Images</a>
<a class="menu_link" onclick={menu_button} href="./Testimonies/"><img class="menu_icon" src="artwork/icons/heart-red-svgrepo-com.svg"/>Testimonies</a>
<a class="menu_link" onclick={menu_button} href="./Information/"><img class="menu_icon" src="artwork/icons/book-svgrepo-com.svg"/>Information</a>

<button class="menu_settings_button">
<img class="menu_icon" src="artwork/icons/delete-user-svgrepo-com.svg"/>
<div class="menu_settings_button_inner_container">
<span>Settings</span>
<img class="menu_settings_icon" src="artwork/icons/chevron-down-svgrepo-com.svg"/>
</div>
</button>

<div class="menu_settings">
<div class="scale_slider">
<label for="scale">UI Scale</label>
<input 
type="range" 
name="scale" 
min="0.5" 
max="1.00" 
step="0.01"
bind:value={settings.uiscale}>
</div>
<div class="darkmode_checkbox">
<label class="custom-checkbox" for="darkmode">Darkmode
<input 
type="checkbox" 
name="darkmode"
bind:checked={settings.darkmode}
>
</label>
</div>

</div>
</nav>
</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');


* {
   font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 1.3rem;
  transition: all 0.5s linear;
  &::-webkit-scrollbar { display: none; }
    scrollbar-width: none;
   -ms-overflow-style: none; 
}

.custom-checkbox input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  margin: 0;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid black;
  border-radius: 50%;
  background-color: #ffffff;
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}

.custom-checkbox input[type="checkbox"]::before {
  content: "";
  width: 0.65rem;
  height: 0.65rem;
  transform: scale(0);
  transition: transform 0.15s ease-in-out;
  background-color: #ffffff;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

.custom-checkbox input[type="checkbox"]:checked {
  background-color: black;
  border-color: black;
}

.custom-checkbox input[type="checkbox"]:checked::before {
  transform: scale(1);
}

.custom-checkbox {
display: flex;
align-items: center;
justify-content: flex-start;
gap: 10px;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  background: transparent;
  cursor: pointer;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 8px;
  background: #000000;
  border-radius: 4px;
}

input[type="range"]::-moz-range-track {
  height: 8px;
  background: #000000;
  border-radius: 4px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  background: grey;
  border-radius: 50%;
  border: 1px solid silver;
  margin-top: -6px; 
  transition: all 0.3s linear;
}

input[type="range"]::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  border: 2px solid black;
  transition: all 0.3s linear;
}

input[type="range"]::-moz-range-thumb:hover,
input[type="range"]::-webkit-slider-thumb:hover {
height: 21px;
width: 21px;
}

input[type="range"]:focus-visible::-webkit-slider-thumb {
  outline: 2px solid black;
  outline-offset: 2px;
}

input[type="range"]:focus-visible::-moz-range-thumb {
  outline: 2px solid black;
  outline-offset: 2px;
}

.main_section {
background-color: rgba(0,0,0,0);
width: 100vw;
display: flex;
align-items: flex-start;
justify-content: flex-start;
top: 0px;
height: 100%;
min-height: 100vh;
position: fixed;
}

.nav_section {
display: flex;
flex-direction: column;
align-items: flex-start;
gap: calc(30px);
background-color: rgba(255,255,255,0.5);
backdrop-filter: blur(20px);
margin-bottom: 0px;
height: 100%;
min-height: 100vh;
border-radius: 0px;
padding: 20px 22px;
width: 20vw;
border-right: 1px solid white;
box-shadow: inset 0px 0px 50px white;
}

.menu_link {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-decoration: none;
color: black;
background-color: transparent;
border-radius: 0px;
height: 20px;
gap: 20px;
cursor: pointer;
}

.menu_settings_button {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-decoration: none;
color: black;
background-color: transparent;
border-radius: 0px;
height: 20px;
gap: 20px;
cursor: pointer;
margin: 0px 0px 0px 0px;
padding: 0px;
border: none;
}


.menu_settings {
background-color: rgba(255,255,255,0.2);
border-radius: 5px;
border: 1px solid rgba(255,255,255,0.5);
padding: 20px;
display: flex;
flex-direction: column;
gap: 10px;

}


.menu_settings_icon {
width: 0.5rem;
height: 0.5rem;
margin-top: 3px;
}

.menu_settings_icon:hover span, 
.menu_settings_button:hover img {
width: 2.0rem;
height: 2.0rem;
}

.menu_settings_button_inner_container {
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
gap: 2px;
}

.menu_settings_button_inner_container:hover span {
font-weight: 700;
}

.menu_link:hover {
font-weight: 700;
}

.menu_link:hover img {
width: 2.0rem;
height: 2.0rem;
}

.menu_icon {
width: 1.7rem;
height: 1.7rem;
}

.menu_settings_icon {
width: 1.4rem;
height: 1.4rem;
}


.close_icon {
background-color: red;
border-radius: 100px;
}

.hidden {
display: none;
}

.close_button {
display: flex;
background-color: transparent;
width: 100%;
align-items: center;
justify-content: flex-start;
padding: 10px 10px;
margin: -10px;
border-radius: 5px;
margin-bottom: 20px;
margin-top: 10px;
}

.darkmode {
background-color: rgba(0,0,0,0.5);
border-right: 1px solid black;
box-shadow: inset 0px 0px 50px black;
color: white;
}

.darkmode a,
.darkmode button
{
color: silver;
}

.darkmode button img,
.darkmode img {
filter: invert();
background-color: transparent;
}




@media (max-width: 700px) {

.main_section {
background-color: rgba(0,0,0,0);
width: 100vw;
display: flex;
align-items: flex-start;
justify-content: flex-start;
top: calc(0px);
height: calc(100vh);
position: fixed;
}

.nav_section {
display: flex;
flex-direction: column;
align-items: flex-start;
gap: calc(50px);
background-color: rgba(255,255,255,0.9);
backdrop-filter: blur(20px);
margin-bottom: 0px;
height: calc(100vh);
border-radius: 0px;
padding: 20px 22px;
width: 100vw;
}

.menu_link {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-decoration: none;
color: #101010;
gap: 30px;
font-size: 2rem;
}

.menu_link:hover {
font-weight: 700;
}

.menu_link:hover img {
width: 4.0rem;
height: 4.0rem;
}


.menu_icon {
width: 3.0rem;
height: 3.0rem;
}

.hidden {
display: flex;
}

.close_button {
display: flex;
background-color: transparent;
width: 100%;
align-items: center;
justify-content: flex-start;
padding: 10px 10px;
margin: -10px;
border-radius: 5px;
margin-bottom: 30px;
margin-top: 10px;
}

}

</style>
