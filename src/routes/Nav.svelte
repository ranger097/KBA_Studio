<script>

</script>

<nav class="nav_container">
<a href="">Art</a>
<a href="">Events</a>
<a href="">Collections</a>
<a href="">Socials</a>
</nav>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');

.nav_container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px 0px 0px 50px;
position: fixed;
width: 12vw;
height: 23vw;
min-width: 100px;
min-height: 100px;
inset: 0;
margin-top: auto;
margin-bottom: auto;
margin-left: 50px;

z-index: 100000000;
box-shadow: 0px 0px 10px rgba(0,0,0,0.6);
gap: 10px;
transition: all 1s linear;
background: radial-gradient(black);
  background-size: 400% 400%;
  animation: gradient 200s ease infinite;
}

.nav_container:hover {
background: radial-gradient(blue, lightcoral, yellow);
  background-size: 400% 400%;
  animation: gradient 200s ease infinite;
  transition: all 1s linear;

}

@keyframes gradient {
  0% {
    background-position: 0% 20%;
  }
  50% {
    background-position: 20% 50%;
  }
  100% {
    background-position: 50% 100%;
  }
}

a {
text-decoration: none;
color: white;
border-radius: 10px;
font-family: "Fredoka";
font-weight: 300;
font-size: clamp(1.3vw, 2vw, 1.5vw);
}

</style>
