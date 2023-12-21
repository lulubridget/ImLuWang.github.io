const navbar = document.querySelector(".navbar-target");


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        navbar.classList.add("shadow");
      } else {
        navbar.classList.remove("shadow");
      }
    });
  });


  

