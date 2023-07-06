document.addEventListener("DOMContentLoaded", function() {
  const home = document.getElementById("homebtn");
  home.addEventListener("click", fetchAndRenderMovieDetails);

  function fetchAndRenderMovieDetails() {
    fetch("http://localhost:3000/Houses")
      .then((res) => res.json())
      .then((data) => {
        const details = document.getElementById("homes");
        
        // Clear previous details
        details.innerHTML = '';
  
        // Loop through houses and render details
        data.forEach((house) => {
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
      });
  }
})  