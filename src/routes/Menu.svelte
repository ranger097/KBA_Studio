<script></script>

<main class="main_section">
<nav class="nav_section">
<a class="menu_link" href=""><img class="menu_icon" src="artwork/icons/house-svgrepo-com(1).svg"/>Home</a>
<a class="menu_link" href=""><img class="menu_icon" src="artwork/icons/image-placeholder-svgrepo-com.svg"/>Images</a>
<a class="menu_link" href=""><img class="menu_icon" src="artwork/icons/heart-red-svgrepo-com.svg"/>Testimonies</a>
<a class="menu_link" href=""><img class="menu_icon" src="artwork/icons/book-svgrepo-com.svg"/>Information</a>
<a class="menu_link" href=""><img class="menu_icon" src="artwork/icons/delete-user-svgrepo-com.svg"/>Settings</a>
</nav>
</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');


* {
   font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
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
top: calc(4vh + 20px);
height: calc(100vh - 4vh - 20px);
position: fixed;
}

.nav_section {
display: flex;
flex-direction: column;
align-items: flex-start;
gap: calc(20px);
background-color: rgba(255,255,255,0.9);
backdrop-filter: blur(20px);
margin-bottom: 0px;
height: calc(100vh - 4vh - 20px);
border-radius: 0px;
padding: 20px 22px;
width: 20vw;
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
aspect-ratio: 1/1;
height: 20px;
gap: 20px;
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
width: 100vw;
display: flex;
align-items: flex-start;
justify-content: flex-start;
top: calc(7vh + 19px);
height: calc(100vh - 4vh - 20px);
position: fixed;
}

.nav_section {
display: flex;
flex-direction: column;
align-items: flex-start;
gap: calc(20px);
background-color: rgba(255,255,255,0.9);
backdrop-filter: blur(20px);
margin-bottom: 0px;
height: calc(100vh - 4vh - 20px);
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
