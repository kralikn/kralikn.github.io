function loadedPage(){

  const servicesSubmenu = document.getElementById('services-submenu');
  const submenu = document.getElementById('submenu');

  servicesSubmenu.addEventListener('click', function(){
    submenu.classList.toggle('active');
  });

}




window.addEventListener('load', loadedPage);