document.addEventListener("DOMContentLoaded", function() {
  const homeBtn = document.getElementById("homebtn");
  const rentalBtn = document.getElementById("rentalbtn");

  homeBtn.addEventListener("click", fetchAndRenderHomeDetails);
  rentalBtn.addEventListener("click", fetchAndRenderRentalsDetails);
});

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
          <img src="${house.image}" id="fetchedimages">
          
        `;
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
          <button class="like-btn">Like</button>
        `;
        info.appendChild(houseElement);
      });
    })
    .catch((error) => {
      console.error('Error fetching house details:', error);
    });
}
