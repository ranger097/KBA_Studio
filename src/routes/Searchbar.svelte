<script>
import { searchState } from '#lib/search.svelte.js';
import { menu, menu_button } from '#lib/menu.svelte.js';
import { settings } from '#lib/settings.svelte.js';
import Menu from './Menu.svelte';

let scrollY = $state(0);
let lastScrollY = 0;
let isScrollingDown = $state(false);

 function handleScroll() {
   if (scrollY <= 10) {
   isScrollingDown = false;
   lastScrollY = 0;
   return;
   } 
    
   let diff = scrollY - lastScrollY;
   if (diff > 200) {
   isScrollingDown = true;
   lastScrollY = scrollY;
   } else if (diff < -200) {
   isScrollingDown = false;
   lastScrollY = scrollY;
  }

  }

</script>
<svelte:window bind:scrollY onscroll={handleScroll} />
{#if !menu.open}
<div class="search_div" class:darkmode={settings.darkmode} class:hidden={isScrollingDown}>
       <a class="menu_link" onclick={menu_button} class:active={menu.open}>
      <img class="menu_icon" src={menu.open ? "/artwork/icons/close-icon-x-svgrepo-com.svg" : "/artwork/icons/menu-svgrepo-com.svg"}
      />
      
      </a>
      <input 
      class="search"
      type="text" 
      bind:value={searchState.query} 
      placeholder="Search ..."
      />
 </div>
{/if}
{#if menu.open}
<Menu />
{/if}

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

* {
   font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 1.2rem;
  transition: all 0.5s linear;
  &::-webkit-scrollbar { display: none; }
    scrollbar-width: none;
   -ms-overflow-style: none;
   z-index: 100;
}

.menu_link {
padding: 6px;
border-radius: 0px;
background-color: rgba(255,255,255,0);
border: none;
height: calc(5vh + 30px -10px);
display: flex;
align-items: center;
justify-content: center;
border-radius: 100px;
margin-left: calc(20px - 6px);
}

.menu_icon {
width: 2rem;
height: 2rem;
}

.active {
background-color: red;
}

.search_div {
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
gap: 0vw;
padding: 0px 0px 0px 0px;
position: fixed;
top: 0px;
backdrop-filter: blur(20px);
border: none;
background-color: rgba(255,255,255,0.9);
animation: header_fade 0.3s linear;
}

.search {
border-radius: 0px;
background-color: rgba(255,255,255,0);
border: none;
color: black;
outline: none;
padding-left: 5vw;
padding-right: 5vw;
height: calc(5vh + 30px);
width: 100vw;
font-size: 1.4rem;
}

.search:focus {
border: none;
height: calc(5vh + 30px);
}

.hidden {
display: none;
}

@keyframes header_fade {
0% {
opacity: 0;
transform: translateY(-300%);
}
100% {opacity: 1}
}

.darkmode {
background-color: rgba(0,0,0,0.7);
color: white;
}

.darkmode a {
background-color: rgba(0,0,0,0);
color: white;
border-radius: 0px;
}

.darkmode img {
filter: invert();
}

.darkmode input {
color: white;
}


@media (max-width: 700px) {

.search_div {
background-color: rgba(0,0,0,0);
width: calc(100vw - 30px);
display: flex;
justify-content: center;
align-items: flex-start;
gap: 0vw;
padding: 15px 15px;
background-color: rgba(255,255,255,0.9);
height: calc(3rem);
gap: 30px;
}

.search {
border-radius: 0px;
border: none;
color: black;
box-shadow: none;
outline: none;
height: calc(3rem);
padding-left: 0px;
padding-right: 30px;
width: calc(100vw - 3rem - 30px - 30px);
font-size: 2rem;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
}

.search:focus {
border: none;
height: calc(3rem);
display: flex;
align-items: center;
justify-content: center;

}

.menu_link {
padding: 0px;
border-radius: 0px;
background-color: transparent;
border: none;
height: 3rem;
width: 3rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 0px;
margin-left: 0px;
cursor: pointer;
}

.menu_icon {
width: 3rem;
height: 3rem;
background-color: transparent;
padding: 0px 0px 0px 30px;

}

.hidden {
display: none;
}

@keyframes header_fade {
0% {
opacity: 0;
transform: translateY(-300%);
}
100% {opacity: 1}
}

.darkmode {
background-color: rgba(0,0,0,0.7);
color: white;
}

.darkmode a {
background-color: rgba(0,0,0,0);
color: white;
border-radius: 0px;
}

.darkmode img {
filter: invert();
}

.darkmode input {
color: white;
}


}

</style>
