<script></script>

<main class="main_section">
<nav>
<a class="menu_link" href=""><img class="menu_icon" src="artwork/icons/home.svg"/>Home</a>
</nav>
</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');


* {
   font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 0.7rem;
  transition: all 0.5s linear;
  &::-webkit-scrollbar { display: none; }
    scrollbar-width: none;
   -ms-overflow-style: none; 
}




.main_section {
background-color: rgba(0,0,0,0);
margin: auto;
inset: 0;
position: fixed;
margin-bottom: 0px;
width: 100vw;
height: 10vh;
display: flex;
align-items: center;
justify-content: center;
}

.menu_link {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-decoration: none;
color: black;
height: 10vh;
}

.menu_icon {
width: 5vh;
height: 5vh;
}
</style>
