function pageLoaded() {

  let pizzaMenu = document.querySelector(".pizza_menu");
  let pizzaImg = document.querySelector(".pizza_img");

  pizzaImg.addEventListener("click", function(){
    pizzaMenu.classList.toggle("clicked");
  })

}

window.addEventListener("load", pageLoaded);