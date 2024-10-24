// Select page elements
const homeSection = document.getElementById('home-section');
const productsSection = document.getElementById('products-section');
const cartSection = document.getElementById('cart-section');
const cartBtn = document.getElementById('cart-btn');
const browseProductsBtn = document.getElementById('browse-products');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Cart state
let cart = [];

// Page Navigation
document.getElementById('home-btn').addEventListener('click', () => {
  switchPage(homeSection);
});
document.getElementById('products-btn').addEventListener('click', () => {
  switchPage(productsSection);
});
cartBtn.addEventListener('click', () => {
  switchPage(cartSection);
  displayCart();
});

browseProductsBtn.addEventListener('click', () => {
  switchPage(productsSection);
});

// Switch between pages
function switchPage(page) {
  homeSection.classList.add('hidden');
  productsSection.classList.add('hidden');
  cartSection.classList.add('hidden');
  page.classList.remove('hidden');
}

// Add to Cart Functionality
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const productName = e.target.parentElement.querySelector('h2').textContent;
    const productPrice = parseFloat(e.target.dataset.price);

    cart.push({ name: productName, price: productPrice });
    updateCartCount();
  });
});

// Update Cart Count in the Header
function updateCartCount() {
  cartBtn.textContent = `Cart (${cart.length})`;
}

// Display Cart Items and Total Price
function displayCart() {
  cartItemsContainer.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsContainer.appendChild(cartItem);
    totalPrice += item.price;
  });

  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}
