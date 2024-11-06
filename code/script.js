// Funcion para mostrar la imagen
let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }    

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Cambia de imagen cada 3 segundos
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Iniciar la presentación automática
showSlides();
