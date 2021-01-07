function loadedPage(){

  const hamburger = document.getElementById('hamburger');
  const navigation = document.querySelector('.nav');

  hamburger.addEventListener('click', function(){
    navigation.classList.toggle('active');
  });

}

window.addEventListener('load', loadedPage);