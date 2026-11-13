<script></script>

<main class="main_section">
<nav class="nav_section">
<a class="menu_link" href=""><img class="menu_icon" src="artwork/icons/home.svg"/>Home</a>
<a class="menu_link" href=""><img class="menu_icon" src="artwork/icons/memo-pad.svg"/>Blog</a>
<a class="menu_link" href=""><img class="menu_icon" src="artwork/icons/user.svg"/>Contact</a>
<a class="menu_link" href=""><img class="menu_icon" src="artwork/icons/info.svg"/>About</a>

</nav>
</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');


* {
   font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 0.6rem;
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
height: calc(10vh + 30px);
display: flex;
align-items: center;
justify-content: center;
}

.nav_section {
display: flex;
gap: calc(2vw + 5px);
background-color: rgba(255,255,255,0.7);
margin-bottom: 0px;
padding: calc(1vh + 5px) calc(2vw + 10px);
backdrop-filter: blur(20px);
border: 1px solid white;
box-shadow: -2px 2px 5px rgba(0,0,0,0.1);
border-radius: 100px;
}

.menu_link {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-decoration: none;
color: black;
gap: 0.5vh;
}

.menu_link:hover {
font-weight: 700;
}

.menu_icon {
width: 1.7rem;
height: 1.7rem;
}

@media (max-width: 700px) {

.main_section {
background-color: rgba(0,0,0,0);
margin: auto;
inset: 0;
position: fixed;
margin-bottom: 0px;
width: 100vw;
height: calc(5vh + 30px);
display: flex;
align-items: center;
justify-content: center;
}

.nav_section {
display: flex;
gap: 0px;
background-color: rgba(255,255,255,0.9);
margin-bottom: 0px;
backdrop-filter: blur(20px);
height: 100%;
width: 100%;
border-radius: 0px;
border: none;
border-top: 1px solid white;
align-items: center;
justify-content: space-evenly;
padding: 0px;
}

.menu_link {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-decoration: none;
color: black;
gap: 0.5vh;
}

.menu_link:hover {
font-weight: 700;
}

.menu_icon {
width: 1.7rem;
height: 1.7rem;
}

}

</style>
