document.addEventListener("DOMContentLoaded", function() {
  const fetchAndRenderHomeDetails = async () => {
    try {
      
      const response = await fetch("https://api.jsonbin.io/v3/b/64a998bb9d312622a37c58a7");
      const data = await response.json();

      const houses = data.record.Houses;

      const details = document.getElementById("homes");
      details.innerHTML = '';

      houses.forEach((house) => {
        const houseElement = document.createElement('div');
        houseElement.innerHTML = `
          <p>Title: ${house.title}</p>
          <p>Location: ${house.location}</p>
          <p>Features: ${house.features}</p>
          <p>Amenities: ${house.amenities}</p>
          <p>Price: ${house.price}</p>
          <img src="${house.image}" id="fetchedimages" style="max-width: 100%;">
          <video width="500" height="320"  style="max-width: 100%;"autoplay muted>
            <source src=${house.video} type="video/mp4">
            Your browser does not support the video tag.
          </video><br><br>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <i id="heart-icon" class="fa fa-heart" aria-hidden="true" onclick="toggleHeartColor(this)"></i>
        `;

        details.appendChild(houseElement);
      });
    } catch (error) {
      console.error('Error fetching house details:', error);
    }
  };

  const homeBtn = document.getElementById("homebtn");
  homeBtn.addEventListener("click", fetchAndRenderHomeDetails);
});

function toggleHeartColor(element) {
  element.classList.toggle('clicked');
}

function toggleForm() {
  let form = document.getElementById("loginForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}