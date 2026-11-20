<script>
import {menu , menu_button} from '#lib/menu.svelte.js';
let {hidden = false} = $props();
</script>

<main class="main_section" class:hidden>
<nav class="nav_section" class:hidden>
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

<a class="menu_link" onclick={menu_button} href="."><img class="menu_icon" src="artwork/icons/house-svgrepo-com(1).svg"/>Home</a>
<a class="menu_link" onclick={menu_button} href="./Images/"><img class="menu_icon" src="artwork/icons/image-placeholder-svgrepo-com.svg"/>Images</a>
<a class="menu_link" onclick={menu_button} href="./Testimonies/"><img class="menu_icon" src="artwork/icons/heart-red-svgrepo-com.svg"/>Testimonies</a>
<a class="menu_link" onclick={menu_button} href="./Information/"><img class="menu_icon" src="artwork/icons/book-svgrepo-com.svg"/>Information</a>
<a class="menu_link" href=""><img class="menu_icon" src="artwork/icons/delete-user-svgrepo-com.svg"/>Settings</a>
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

.main_section {
background-color: rgba(0,0,0,0);
width: 100vw;
display: flex;
align-items: flex-start;
justify-content: flex-start;
top: 0px;
height: calc(100vh);
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
height: calc(100vh);
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
