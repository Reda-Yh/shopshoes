import { products } from '../data/products.js';

export function setupProductsPage() {
  const productsContainer = document.getElementById('products-list');
  const searchInput = document.getElementById('search-input');
  const priceFilter = document.getElementById('price-filter');

  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const maxPrice = parseInt(priceFilter.value) || Infinity;

    const filteredProducts = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                          product.description.toLowerCase().includes(searchTerm);
      const matchesPrice = product.price <= maxPrice;
      return matchesSearch && matchesPrice;
    });

    displayProducts(filteredProducts);
  }

  function displayProducts(productsToShow) {
    productsContainer.innerHTML = '';
    productsToShow.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'col-md-4 mb-4';
      productCard.innerHTML = `
        <div class="card product-card ${product.promotion ? 'promotion' : ''}">
          <div class="position-relative">
            <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
            ${product.promotion ? '<span class="badge bg-danger position-absolute top-0 end-0 m-2">Promotion</span>' : ''}
          </div>
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text text-truncate">${product.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="h5 mb-0">$${product.price}</span>
              <a href="/product.html?id=${product.id}" class="btn btn-primary">Details</a>
            </div>
          </div>
        </div>
      `;
      productsContainer.appendChild(productCard);
    });
  }

  searchInput.addEventListener('input', filterProducts);
  priceFilter.addEventListener('change', filterProducts);

  // Initial display
  displayProducts(products);
}