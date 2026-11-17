<script>
import { searchState } from '#lib/search.svelte.js';
import { menu, menu_button } from '#lib/menu.svelte.js';
import Menu from './Menu.svelte';

</script>

<div class="search_div">
      <a class="menu_link" onclick={menu_button} class:active={menu.open}>
      {#if menu.open}
      <img class="menu_icon" src="artwork/icons/close-icon-x-svgrepo-com.svg"/>
      {:else}
      <img class="menu_icon" src="artwork/icons/menu-svgrepo-com.svg"/>
      {/if}
      </a>
    <input 
      id="search"
      type="text" 
      bind:value={searchState.query} 
      placeholder="Search art, articles..." 
    />
</div>

{#if menu.open}
<Menu />
{/if}

<style>

.menu_link {
padding: 0px 20px;
border-radius: 0px;
background-color: rgba(255,255,255,0);
border: none;
height: calc(4vh + 20px);
display: flex;
align-items: center;
justify-content: center;
}

.menu_icon {
width: 2rem;
height: 2rem;
}

.active {
background-color: red;
}

.search_div {
background-color: rgba(0,0,0,0);
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
gap: 0vw;
padding: 0px 0px 0px 0px;
position: fixed;
top: 0px;
backdrop-filter: blur(20px);
border-bottom: 0px solid rgba(255,255,255,1);
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
height: calc(4vh + 20px);
width: 100vw;
}

#search:focus {
border: none;
height: calc(4vh + 20px);
}

@media (max-width: 700px) {

.search_div {
background-color: rgba(0,0,0,0);
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
gap: 0vw;
padding: 0px 0px 0px 0px;
background-color: rgba(255,255,255,0.9);
backdrop-filter: blur(20px);
}

#search {
border-radius: 0px;
border: none;
border-bottom: 1px solid white;
color: black;
box-shadow: none;
outline: none;
height: calc(5vh + 30px);
padding-left: 5vw;
padding-right: 5vw;
width: 100vw;
}

#search:focus {
border: none;
height: calc(3vh + 20px);
}


}

</style>
