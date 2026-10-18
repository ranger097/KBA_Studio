<script>

</script>

<nav class="nav_container">
<a href="">Home</a>
<div class="nav_div">
<a href="">Blog</a>
<a href="">About</a>
<a href="">Socials</a>
</div>
</nav>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');

* {
 font-family: "Fredoka", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}


.nav_container {
background-color: black;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 0px 0px 20px;
position: fixed;
left: 0px;
top: 0px;
width: calc(100vw - 20px);
margin: 0px;
}

.nav_div {
background-color: black;
display: flex;
align-items: center;
padding: 10px 20px;
gap: 20px;
}

a {
text-decoration: none;
color: rgba(255,255,255,0.7);
}

a:hover {
color: rgba(255,255,255,1);
}

</style>
