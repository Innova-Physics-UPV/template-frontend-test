document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector(".myHeader"); // Cambio aquí
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-100px"; // Change the value to the height of your header to completely hide it
    }
    prevScrollpos = currentScrollPos;
  }
  

  window.onscroll = function() {
    stickyHeader();
  };

  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
  });
});
