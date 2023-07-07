document.addEventListener("DOMContentLoaded", function() {
  const homeBtn = document.getElementById("homebtn");
  const rentalBtn = document.getElementById("rentalbtn");

  homeBtn.addEventListener("click", fetchAndRenderHomeDetails);
  rentalBtn.addEventListener("click", fetchAndRenderRentalsDetails);
  


function fetchAndRenderHomeDetails() {
  const ids = [1, 2, 3]; // IDs of the houses you want to fetch

  const fetchRequests = ids.map((id) => {
    return fetch(`http://localhost:3000/Houses/${id}`)
      .then((res) => res.json());
  });

  Promise.all(fetchRequests)
    .then((houses) => {
      const details = document.getElementById("homes");

      // Clear previous details
      details.innerHTML = '';

      // Loop through houses and render details
      houses.forEach((house) => {
        const houseElement = document.createElement('div');
        houseElement.innerHTML = `
          <p>Title: ${house.title}</p>
          <p>Location: ${house.location}</p>
          <p>Features: ${house.features}</p>
          <p>Amenities: ${house.amenities}</p>
          <p>Price: ${house.price}</p>
          <img src="${house.image}" id="fetchedimages">
          <video width="500" height="320" autoplay muted>
          <source src=${house.video} type="video/mp4">
          Your browser does not support the video tag.
           </video><br><br>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <i  id="heart-icon"class="fa fa-heart" aria-hidden="true" onclick="toggleHeartColor(this)"></i>

`
          
        
        details.appendChild(houseElement);
      });
    })
    .catch((error) => {
      console.error('Error fetching house details:', error);
    });
}

function fetchAndRenderRentalsDetails() {
  const ids = [4, 5, 6]; // IDs of the houses you want to fetch

  const fetchRequests = ids.map((id) => {
    return fetch(`http://localhost:3000/Houses/${id}`)
      .then((res) => res.json());
  });

  Promise.all(fetchRequests)
    .then((houses) => {
      const info = document.getElementById("rentals");

      // Clear previous details
      info.innerHTML = '';

      // Loop through houses and render details
      houses.forEach((house) => {
        const houseElement = document.createElement('div');
        houseElement.innerHTML = `
          <p>Title: ${house.title}</p>
          <p>Location: ${house.location}</p>
          <p>Features: ${house.features}</p>
          <p>Amenities: ${house.amenities}</p>
          <p>Price: ${house.price}</p>
          <img src="${house.image}" id="fetchedimages">
          <video width="500" height="320" autoplay muted>
          <source src=${house.video} type="video/mp4">
          Your browser does not support the video tag.
           </video><br><br>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          <i id="heart-icon" class="fa fa-heart" aria-hidden="true" onclick="toggleHeartColor(this)"></i>

          `
        info.appendChild(houseElement);
      });
    })
    .catch((error) => {
      console.error('Error fetching house details:', error);
    });
}

})

function toggleHeartColor(element) {
  element.classList.toggle('clicked');
}
function toggleForm() {
  let form = document.getElementById("loginForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
}
