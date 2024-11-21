// Sample product data
const products = [
    { id: 1, name: "Diamond Ring", price: 1999.99, image: "diamond-ring.jpg", category: "Rings", description: "Elegant diamond ring with 18k gold band." },
    { id: 2, name: "Gold Necklace", price: 799.99, image: "gold-necklace.jpg", category: "Chains and Pendants", description: "24k gold necklace with intricate design." },
    { id: 3, name: "Silver Bracelet", price: 299.99, image: "silver-bracelet.jpg", category: "Bracelets", description: "Sterling silver bracelet with charms." },
    { id: 4, name: "Sapphire Earrings", price: 599.99, image: "sapphire-earrings.jpg", category: "Earrings", description: "Blue sapphire earrings with diamond accents." },
    { id: 5, name: "Luxury Watch", price: 2499.99, image: "luxury-watch.jpg", category: "Watches", description: "Luxury watch with automatic movement and gold case." },
    { id: 6, name: "Custom Pendant", price: 399.99, image: "custom-pendant.jpg", category: "Custom Work", description: "Customizable pendant with your choice of gemstone." },
    { id: 7, name: "Pearl Necklace", price: 899.99, image: "pearl-necklace.jpg", category: "Chains and Pendants", description: "Elegant pearl necklace with 18k gold clasp." },
    { id: 8, name: "Diamond Tennis Bracelet", price: 3499.99, image: "tennis-bracelet.jpg", category: "Bracelets", description: "Stunning diamond tennis bracelet in white gold." },
    { id: 9, name: "Emerald Ring", price: 1299.99, image: "emerald-ring.jpg", category: "Rings", description: "Vibrant emerald ring surrounded by diamonds." },
    { id: 10, name: "Gold Hoop Earrings", price: 349.99, image: "gold-hoops.jpg", category: "Earrings", description: "Classic 14k gold hoop earrings." },
    { id: 11, name: "Men's Signet Ring", price: 599.99, image: "signet-ring.jpg", category: "Rings", description: "Customizable men's signet ring in yellow gold." },
    { id: 12, name: "Diamond Pendant", price: 799.99, image: "diamond-pendant.jpg", category: "Chains and Pendants", description: "Solitaire diamond pendant on a delicate gold chain." }
];

// Sample data for Instagram Reels
const instagramReels = [
    { id: 1, embedCode: '<iframe src="https://www.instagram.com/reel/ABC123/" width="100%" height="100%" frameborder="0"></iframe>' },
    { id: 2, embedCode: '<iframe src="https://www.instagram.com/reel/DEF456/" width="100%" height="100%" frameborder="0"></iframe>' },
    { id: 3, embedCode: '<iframe src="https://www.instagram.com/reel/GHI789/" width="100%" height="100%" frameborder="0"></iframe>' },
    { id: 4, embedCode: '<iframe src="https://www.instagram.com/reel/JKL012/" width="100%" height="100%" frameborder="0"></iframe>' },
];

// Shopping cart functionality
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
        cart.push({ ...product,

 quantity: 1 });
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
        cartItem.classList.add('flex', 'justify-between', 'items-center', 'mb-4', 'border-b', 'border-[#D4AF37]', 'pb-2');
        cartItem.innerHTML = `
            <div>
                <h3 class="font-bold">${item.name}</h3>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Render products
function renderProducts() {
    const productSlider = document.querySelector('.product-slider');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card', 'bg-black', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'border', 'border-[#D4AF37]', 'flex-shrink-0', 'w-64', 'transition-transform', 'duration-300', 'hover:scale-105');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-xl mb-2 text-[#D4AF37]">${product.name}</h3>
                <p class="text-white mb-2">$${product.price.toFixed(2)}</p>
                <button onclick="showProductModal(${product.id})" class="bg-[#D4AF37] text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 w-full mb-2">View Details</button>
                <button onclick="addToCart(${JSON.stringify(product)})" class="bg-black text-[#D4AF37] border border-[#D4AF37] px-4 py-2 rounded-lg hover:bg-[#D4AF37] hover:text-black transition duration-300 w-full">Add to Cart</button>
            </div>
        `;
        productSlider.appendChild(productCard);
    });
}

// Product modal
function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h2 class="text-2xl font-bold mb-4 text-[#D4AF37]">${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover mb-4 rounded-lg">
        <p class="text-white mb-4">${product.description}</p>
        <p class="text-xl font-bold mb-4 text-[#D4AF37]">$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${JSON.stringify(product)})" class="bg-[#D4AF37] text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300 w-full">Add to Cart</button>
    `;
    document.getElementById('product-modal').classList.remove('hidden');
}

// Close modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('product-modal').classList.add('hidden');
});

// Render Instagram Reels
function renderInstagramReels() {
    const reelsContainer = document.getElementById('instagram-reels');
    instagramReels.forEach(reel => {
        const reelDiv = document.createElement('div');
        reelDiv.classList.add('aspect-square', 'overflow-hidden', 'rounded-lg');
        reelDiv.innerHTML = reel.embedCode;
        reelsContainer.appendChild(reelDiv);
    });
}

// Toggle shopping cart
document.getElementById('cart-button').addEventListener('click', () => {
    document.getElementById('shopping-cart').classList.toggle('translate-x-0');
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
});

// Newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would normally send the email to a server for newsletter subscription
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
    bannerText.classList.remove('fade-in');
    setTimeout(() => {
        bannerText.textContent = bannerMessages[currentBannerIndex];
        bannerText.classList.add('fade-in');
        currentBannerIndex = (currentBannerIndex + 1) % bannerMessages.length;
    }, 500);
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
                alert('Transaction completed by ' + details.payer.name.given_name + '!');
                // Here you would normally clear the cart and update your backend
                cart = [];
                updateCartCount();
                updateCartTotal();
                renderCart();
                closeCheckoutModal();
            });
        }
    }).render('#paypal-button-container');
}

// Mobile menu functionality
document.getElementById('mobile-menu-button').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('open');
});

document.getElementById('close-mobile-menu').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.remove('open');
});

// Checkout modal functionality
document.getElementById('checkout-button').addEventListener('click', () => {
    document.getElementById('checkout-modal').classList.remove('hidden');
});

document.getElementById('close-checkout').addEventListener('click', closeCheckoutModal);

function closeCheckoutModal() {
    document.getElementById('checkout-modal').classList.add('hidden');
}

// Checkout form submission
document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would normally process the order
    alert('Thank you for your purchase! Your order has been processed.');
    cart = [];
    updateCartCount();
    updateCartTotal();
    renderCart();
    closeCheckoutModal();
});

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderInstagramReels();
    setInterval(rotateBanner, 5000); // Rotate banner every 5 seconds
    rotateBanner(); // Show initial banner
    initPayPalButton();
});

// Scroll animation effect
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('fade-in');
        }
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', handleScrollAnimations);