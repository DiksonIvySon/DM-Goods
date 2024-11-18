






























































// // Select page elements
// const homeSection = document.getElementById('home-section');
// const productsSection = document.getElementById('products-section');
// const cartSection = document.getElementById('cart-section');
// const cartBtn = document.getElementById('cart-btn');
// const browseProductsBtn = document.getElementById('browse-products');
// const addToCartButtons = document.querySelectorAll('.add-to-cart');
// const cartItemsContainer = document.getElementById('cart-items');
// const totalPriceElement = document.getElementById('total-price');

// // Cart state
// let cart = [];

// // Page Navigation
// document.getElementById('home-btn').addEventListener('click', () => {
//   switchPage(homeSection);
// });
// document.getElementById('products-btn').addEventListener('click', () => {
//   switchPage(productsSection);
// });
// cartBtn.addEventListener('click', () => {
//   switchPage(cartSection);
//   displayCart();
// });

// browseProductsBtn.addEventListener('click', () => {
//   switchPage(productsSection);
// });

// // Switch between pages
// function switchPage(page) {
//   homeSection.classList.add('hidden');
//   productsSection.classList.add('hidden');
//   cartSection.classList.add('hidden');
//   page.classList.remove('hidden');
// }

// // Add to Cart Functionality
// addToCartButtons.forEach(button => {
//   button.addEventListener('click', (e) => {
//     const productName = e.target.parentElement.querySelector('h2').textContent;
//     const productPrice = parseFloat(e.target.dataset.price);

//     cart.push({ name: productName, price: productPrice });
//     updateCartCount();
//   });
// });

// // Update Cart Count in the Header
// function updateCartCount() {
//   cartBtn.textContent = `Cart (${cart.length})`;
// }

// // Display Cart Items and Total Price
// function displayCart() {
//   cartItemsContainer.innerHTML = '';
//   let totalPrice = 0;

//   cart.forEach(item => {
//     const cartItem = document.createElement('div');
//     cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//     cartItemsContainer.appendChild(cartItem);
//     totalPrice += item.price;
//   });

//   totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
// }

// /*    JavaScript for Navigation and Sliders  ***********************************************************************/


// // Product Data (Simulated)
// const products = [
//     { id: 1, name: 'Product 1', price: 10, images: ['images/product1.jpg', 'images/product1-2.jpg'] },
//     { id: 2, name: 'Product 2', price: 20, images: ['images/product2.jpg', 'images/product2-2.jpg'] },
//     { id: 3, name: 'Product 3', price: 30, images: ['images/product3.jpg', 'images/product3-2.jpg'] },
// ];

// // let cart = [];
// let currentSlide = 0;

// // Handle View Details Click
// document.querySelectorAll('.view-details').forEach(button => {
//     button.addEventListener('click', (e) => {
//         const productId = e.target.dataset.id;
//         window.location.href = `product-details.html?id=${productId}`;
//     });
// });

// // Load Product Details on Details Page
// function loadProductDetails() {
//     const params = new URLSearchParams(window.location.search);
//     const productId = params.get('id');
//     const product = products.find(p => p.id == productId);

//     if (product) {
//         document.getElementById('product-name').textContent = product.name;
//         document.getElementById('product-price').textContent = `$${product.price}`;
//         document.getElementById('slider-img').src = product.images[0];
//     }
// }

// // Slider Navigation
// document.getElementById('next-slide').addEventListener('click', () => {
//     currentSlide = (currentSlide + 1) % products[0].images.length;
//     document.getElementById('slider-img').src = products[0].images[currentSlide];
// });

// // Add to Cart
// document.getElementById('add-to-cart').addEventListener('click', () => {
//     cart.push(products[0]);
//     alert('Product added to cart!');
// });
  