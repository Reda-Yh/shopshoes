import { Cart } from './cart.js';

export function setupCartPage() {
  const cart = new Cart();
  const cartContainer = document.getElementById('cart-items');
  const totalElement = document.getElementById('cart-total');

  function updateCartUI() {
    cartContainer.innerHTML = '';
    cart.items.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'card mb-3';
      cartItem.innerHTML = `
        <div class="row g-0">
          <div class="col-2">
            <img src="${item.image}" id="image-cart" class="img-fluid rounded-start" alt="${item.name}" style="height: 100px; object-fit: cover;">
          </div>
          <div class="col-10">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="card-title">${item.name}</h5>
                <span class="text-muted">Prix unitaire: $${item.price.toFixed(2)}</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mt-2">
                <div class="input-group" style="width: 150px">
                  <button class="btn btn-outline-secondary" type="button" 
                    onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                  <input type="number" class="form-control text-center" value="${item.quantity}" 
                    onchange="updateQuantity(${item.id}, this.value)">
                  <button class="btn btn-outline-secondary" type="button" 
                    onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <span>Total: <strong>$${(item.price * item.quantity).toFixed(2)}</strong></span>
              </div>
            </div>
          </div>
        </div>
      `;
      cartContainer.appendChild(cartItem);
    });
    

    totalElement.textContent = `$${cart.getTotal().toFixed(2)}`;
  }

  window.updateQuantity = (productId, quantity) => {
    cart.updateQuantity(productId, parseInt(quantity));
    updateCartUI();
  };

  updateCartUI();
}