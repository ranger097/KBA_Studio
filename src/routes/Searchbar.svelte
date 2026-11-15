<script>
import { searchState } from '#lib/search.svelte.js';



</script>

<div class="search_div">
    <input 
      id="search"
      type="text" 
      bind:value={searchState.query} 
      placeholder="Search art, articles..." 
    />
</div>

<style>

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
}

#search {
border-radius: 0px;
background-color: rgba(255,255,255,0.8);
border: none;
border-bottom: 1px solid rgba(255,255,255,1);
color: black;
backdrop-filter: blur(20px);
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
}

#search {
border-radius: 0px;
background-color: rgba(255,255,255,0.8);
border: none;
border-bottom: 1px solid white;
color: black;
box-shadow: none;
backdrop-filter: blur(20px);
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
