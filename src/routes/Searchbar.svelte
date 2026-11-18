<script>
import { searchState } from '#lib/search.svelte.js';
import { menu, menu_button } from '#lib/menu.svelte.js';
import Menu from './Menu.svelte';

 let scrollY = $state(0);
  let lastScrollY = 0;
  let isScrollingDown = $state(false);

  function handleScroll() {
    isScrollingDown = scrollY > lastScrollY;
    lastScrollY = scrollY;
  }

</script>
<svelte:window bind:scrollY onscroll={handleScroll} />
<div class="search_div" class:hidden={isScrollingDown}>
      {#if menu.open}
       <a class="menu_link" onclick={menu_button} class:active={menu.open}>
      <img class="menu_icon" src="artwork/icons/close-icon-x-svgrepo-com.svg"/>
      </a>

      {:else}
       <a class="menu_link" onclick={menu_button} class:active={menu.open}>
      <img class="menu_icon" src="artwork/icons/menu-svgrepo-com.svg"/>
      </a>
      {/if}
      <input 
      id="search"
      type="text" 
      bind:value={searchState.query} 
      placeholder="Search ..."
    />

 </div>
{#if menu.open}
<Menu hidden={isScrollingDown} />
{/if}

<style>

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
}

#search {
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

#search:focus {
border: none;
height: calc(5vh + 30px);
}

.hidden {
display: none;
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
}

#search {
border-radius: 0px;
border: none;
color: black;
box-shadow: none;
outline: none;
height: calc(3rem);
padding-left: 7vw;
padding-right: 5vw;
width: calc(100vw - 3rem - 12vw);
font-size: 2rem;
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
}

#search:focus {
border: none;
height: calc(3rem);
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


}

</style>
