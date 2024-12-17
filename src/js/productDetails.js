import { Cart } from './cart.js';

export function setupProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  const product = window.products.find(p => p.id === productId);
  
  if (!product) {
    window.location.href = '/';
    return;
  }

  const detailsContainer = document.getElementById('product-details');
  detailsContainer.innerHTML = `
    <div class="row">
      <div class="col-md-6">
        <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
      </div>
      <div class="col-md-6">
        <h2>${product.name}</h2>
        <p class="lead">${product.description}</p>
        <h3 class="mb-3">$${product.price}</h3>
        <div class="mb-3">
          <label for="quantity" class="form-label">Quantity:</label>
          <input type="number" class="form-control" id="quantity" value="1" min="1" style="width: 100px">
        </div>
        <button id="addToCart" class="btn btn-primary btn-lg">Add to Cart</button>
      </div>
    </div>
  `;

  const cart = new Cart();
  const addToCartBtn = document.getElementById('addToCart');
  const quantityInput = document.getElementById('quantity');

  addToCartBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
      cart.addItem(product, quantity);
      window.location.href = '/cart.html';
    }
  });
}