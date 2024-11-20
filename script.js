// Sample product data
const products = [
    { id: 1, name: "Diamond Ring", price: 1999.99, image: "diamond-ring.jpg", description: "Elegant diamond ring with 18k gold band." },
    { id: 2, name: "Gold Necklace", price: 799.99, image: "gold-necklace.jpg", description: "24k gold necklace with intricate design." },
    { id: 3, name: "Silver Bracelet", price: 299.99, image: "silver-bracelet.jpg", description: "Sterling silver bracelet with charm accents." },
    // Add more products as needed
];

// Sample Instagram Reels data
const instagramReels = [
    { id: 1, embedCode: '<iframe src="https://www.instagram.com/reel/ABC123/" width="100%" height="100%" frameborder="0"></iframe>' },
    { id: 2, embedCode: '<iframe src="https://www.instagram.com/reel/DEF456/" width="100%" height="100%" frameborder="0"></iframe>' },
    { id: 3, embedCode: '<iframe src="https://www.instagram.com/reel/GHI789/" width="100%" height="100%" frameborder="0"></iframe>' },
    { id: 4, embedCode: '<iframe src="https://www.instagram.com/reel/JKL012/" width="100%" height="100%" frameborder="0"></iframe>' },
];

// Cart functionality
let cart = [];

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function updateCartTotal() {
    const cartTotal = document.getElementById('cart-total');
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);
}

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartCount();
    updateCartTotal();
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartTotal();
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('flex', 'justify-between', 'items-center', 'mb-4');
        cartItem.innerHTML = `
            <div>
                <h3 class="font-bold">${item.name}</h3>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Product rendering
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card', 'bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-xl mb-2">${product.name}</h3>
                <p class="text-gray-700 mb-2">$${product.price.toFixed(2)}</p>
                <button onclick="showProductModal(${product.id})" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">View Details</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Product modal
function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover mb-4">
        <p class="text-gray-700 mb-4">${product.description}</p>
        <p class="text-xl font-bold mb-4">$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${JSON.stringify(product)})" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Add to Cart</button>
    `;
    document.getElementById('product-modal').classList.remove('hidden');
}

// Close modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('product-modal').classList.add('hidden');
});

// Instagram Reels rendering
function renderInstagramReels() {
    const reelsContainer = document.querySelector('#instagram-reels .grid');
    instagramReels.forEach(reel => {
        const reelDiv = document.createElement('div');
        reelDiv.classList.add('instagram-reel');
        reelDiv.innerHTML = reel.embedCode;
        reelsContainer.appendChild(reelDiv);
    });
}

// Shopping cart toggle
document.getElementById('cart-button').addEventListener('click', () => {
    document.getElementById('shopping-cart').classList.toggle('open');
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message. We will get back to you soon!');
    e.target.reset();
});

// Newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the email to a server for newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
});

// Top banner rotation
const bannerMessages = [
    "Free shipping on orders over $500!",
    "New collection available now!",
    "Limited time offer: 20% off all necklaces!"
];
let currentBannerIndex = 0;

function rotateBanner() {
    const bannerText = document.getElementById('banner-text');
    bannerText.textContent = bannerMessages[currentBannerIndex];
    currentBannerIndex = (currentBannerIndex + 1) % bannerMessages.length;
}

// PayPal integration
function initPayPalButton() {
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: document.getElementById('cart-total').textContent
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Transaction completed by ' + details.payer.name.given_name);
                // Here you would typically clear the cart and update your backend
                cart = [];
                updateCartCount();
                updateCartTotal();
                renderCart();
            });
        }
    }).render('#paypal-button-container');
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderInstagramReels();
    setInterval(rotateBanner, 5000); // Rotate banner every 5 seconds
    rotateBanner(); // Initial banner display
    initPayPalButton();
});