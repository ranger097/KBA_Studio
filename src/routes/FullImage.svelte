<script>
function open_image(id) {
  selected_image_id = id;
}

  let buttonText = 'Copy and Share Image';
  let isCopied = false;

  function copyCurrentLink(image_url) {
    const baseUrl = new URL(window.location.href);
    const fullUrl = new URL(`artwork/${image_url}`, baseUrl.origin).href;

    navigator.clipboard.writeText(fullUrl)
      .then(() => {
        buttonText = 'Copied!';
        isCopied = true;
        setTimeout(() => {
          buttonText = 'Copy Page Link';
          isCopied = false;
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  }
</script>

<style>
.full_image_container {
position: fixed;
background: linear-gradient(120deg,rgba(0,0,0,0.5) 70%, #202020);
backdrop-filter: blur(10px);
display: flex;
align-items: center;
justify-content: center;
}


.full_image_info_container {
background-color: transparent;
padding: 0px;
height: calc(80vh - 0px);
display: flex;
flex-direction: column;
gap: 10px;
padding: 10px;
}

.full_image_info_div {
padding: 10px 20px;
border-radius: 10px;
background-color: rgba(255,255,255,0.5);
backdrop-filter: blur(20px);
width: 25vw;
}


.full_image_share_div {
padding: 10px 20px;
background-color: black;
color: white;
border-radius: 10px;
cursor: pointer;
}

.full_image_share_div:hover {
background-color: black;

}

.full_image_share_div a {
color: white;
text-decoration: none;
}

.full_image_description {
background: linear-gradient(120deg,black 70%, #202020);
color: lightgoldenrodyellow;
}

.full_image_tag {
background: linear-gradient(120deg,black 70%, #202020);
color: white;
}


.full_image {
height: 80vh;
border-radius: 10px;
max-width: 50vw;
overflow: hidden;
object-fit: cover;
object-position: center;
}


.full_image_close_button {
margin: auto;
inset: 0;
width: 50px;
margin-right: 2vw;
margin-top: 2vw;
position: fixed;
aspect-ratio: 1/1;
border-radius: 100px;
font-size: 2rem;
color: white;
text-shadow: -2px 2px 5px rgba(0,0,0,0.3);
border: 1px solid grey;
background-color: rgba(0,0,0,1);
}

.full_image_close_button:hover {
border: 1px solid red;
background-color: rgba(255,0,0,0.5);
}

@media (max-width: 700px) {
.homepage_image_flex_container {
display: flex;
align-items: flex-start;
justify-content: flex-start;
gap: 5px;
background-color: white;
min-height: auto;
height: calc(100vh - 20vh);
width: 100vw;
padding: 12vh 5vw;
overflow-y: scroll;
}

.flex_image {
width: 90vw;
aspect-ratio: 1/1;
border-radius: 5px;
overflow: hidden;
object-fit: cover;
object-position: center;
cursor: pointer;
}

.full_image_container {
position: fixed;
margin: auto;
inset: 0;
background-color: rgba(255,255,255,0.8);
backdrop-filter: blur(20px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 1000000000;
padding: 0px 5vw;
width: 90vw;
}

.full_image_info_div {
padding: 10px 20px;
border-radius: 10px;
width: calc(90vw - 40px);
box-shadow: -5px 5px 10px rgba(0,0,0,0.5);
background-color: rgba(255,255,255,0.5);
backdrop-filter: blur(20px);
border: 1px solid black;
}

.full_image_share_div {
padding: 10px 20px;
background-color: blue;
color: white;
border-radius: 10px;
border: 1px solid black;
box-shadow: -5px 5px 10px rgba(0,0,0,0.5);
cursor: pointer;
width: calc(90vw - 40px);
}

.full_image_share_div:hover {
background-color: black;
box-shadow: 0px 0px 100px grey;
}

.full_image_share_div a {
color: white;
text-decoration: none;
}

.full_image_description:hover {
background-color: purple ;
color: lightgoldenrodyellow;
box-shadow: 0px 0px 100px grey;
border: 1px solid purple;
}

.full_image_tag:hover {
background-color: red;
color: white;
box-shadow: 0px 0px 100px grey;
border: 1px solid red;
}

.full_image {
min-height: auto;
box-shadow: -5px 5px 10px rgba(0,0,0,0.5);
border-radius: 10px;
border: 1px solid black;
min-width: 90vw;
overflow: hidden;
object-fit: cover;
object-position: center;
margin-top: 2vh;
}

.full_image:hover {
box-shadow: 0px 0px 100px grey;
}

.full_image_close_button {
display: none;
}

.full_image_close_button_mobile {
width: 100px;
height: 30px;
aspect-ratio: 1/1;
border-radius: 100px;
font-size: 1rem;
color: white;
text-shadow: -2px 2px 5px rgba(0,0,0,0.3);
border: 1px solid grey;
background-color: rgba(0,0,0,1);
box-shadow: -2px 2px 5px rgba(0,0,0,0.3);
margin-top: 5vh;
display: block;
}

.full_image_close_button_mobile:after {
content: " close";
}

.full_image_close_button_mobile:hover {
background-color: red;
}

.search_div {
background-color: rgba(0,0,0,0);
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
z-index: 10000;
top: 0px;
left: 0px;
gap: 0vw;
padding: 0px 0px 20px 0px;
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
height: calc(3vh + 20px);
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
