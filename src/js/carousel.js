export const carouselSlides = [
  {
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c",
    title: "New Collection",
    description: "Discover our latest arrivals in athletic footwear"
  },
  {
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    title: "Special Offers",
    description: "Up to 40% off on selected running shoes"
  },
  {
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    title: "Premium Quality",
    description: "Handcrafted with premium materials"
  }
];

export function setupCarousel() {
  const carouselContainer = document.getElementById('promotion-carousel');
  if (!carouselContainer) return;

  // Create carousel structure
  carouselContainer.innerHTML = `
    <div id="mainCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        ${carouselSlides.map((_, index) => `
          <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="${index}"
            ${index === 0 ? 'class="active" aria-current="true"' : ''} 
            aria-label="Slide ${index + 1}">
          </button>
        `).join('')}
      </div>
      <div class="carousel-inner">
        ${carouselSlides.map((slide, index) => `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${slide.image}" class="d-block w-100" alt="${slide.title}">
            <div class="carousel-caption d-none d-md-block">
              <h2>${slide.title}</h2>
              <p>${slide.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;
}