let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll('.slides img');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function() {
  showSlides(1); 
});

const navigation = document.querySelector(".primary-navigation");

const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

// Your existing JavaScript code
// ...

// Function to show tour details based on ID
function showTour(tourId) {
    const tours = document.querySelectorAll('.tour-content');
    
    // Hide all tour details
    for (let i = 0; i < tours.length; i++) {
      tours[i].classList.remove('active');
    }
  
    // Show the selected tour detail
    const selectedTour = document.getElementById(tourId);
    if (selectedTour) {
      selectedTour.classList.add('active');
    }
  }
  
