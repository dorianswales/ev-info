// Hamburger Menu

function ToggleBurger() {
    let x = document.querySelector("#myLinks");
  
    if (x.style.display === "flex") {
      x.style.display = "none";
      
    } else {
      x.style.display = "flex";
    }
  }

var imgCount = -1;
var images = ["assets/images/cross-solid.svg", "assets/images/bars-solid.svg",];
function changeImage() {
  if (imgCount !== images.length - 1)
    imgCount++;
  else 
    imgCount = 0;
  var image = document.getElementById('imgClickAndChange');
  image.src = images[imgCount];
}

// Search bar
  
  let search_bar = document.querySelector("#search_bar");
  let search_occluder = document.querySelector("#search_occluder");
  let search_input = search_bar.querySelector("input");
  
  function HideSearchBar () {
      search_bar.style.display = "none";
      search_occluder.style.display = "none";
      search_input.blur();
  }
  
  function ToggleSearchBar() {
    search_input.onkeydown = (e => {
      if (e.key == "Escape") {
        HideSearchBar();
        e.preventDefault();
      }
    });
  
    search_occluder.onclick = (e => {
      HideSearchBar();
      e.preventDefault();
    });
  
    if (search_bar.style.display === "flex") {
      HideSearchBar();
    } else {
      search_bar.style.display = "flex";
      search_occluder.style.display = "block";
      search_input.focus();
    }
  }