// Sample product data
const products = [
    { id: 1, name: "Anillo de Diamantes", price: 1999.99, images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"], category: "Anillos", description: "Elegante anillo de diamantes con banda de oro de 18k." },
    { id: 2, name: "Collar de Oro", price: 799.99, images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"], category: "Cadenas y Colgantes", description: "Collar de oro de 24k con diseño intrincado." },
    { id: 3, name: "Pulsera de Plata", price: 299.99, images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"], category: "Pulseras", description: "Pulsera de plata esterlina con dijes." },
    { id: 4, name: "Aretes de Zafiro", price: 599.99, images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"], category: "Aretes", description: "Aretes de zafiro azul con acentos de diamantes." },
    { id: 5, name: "Reloj de Lujo", price: 2499.99, images: ["https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"], category: "Relojes", description: "Reloj de lujo con movimiento automático y caja de oro." },
    { id: 6, name: "Colgante Personalizado", price: 399.99, images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"], category: "Trabajo Personalizado", description: "Colgante personalizado con grabado láser." }
];

// Sample Instagram Reels data
const instagramReels = [
    { id: 1, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", link: "#" },
    { id: 2, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", link: "#" },
    { id: 3, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", link: "#" },
    { id: 4, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80", link: "#" }
];

// Cart functionality
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    }
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        updateCart();
    }
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartCountElement = document.getElementById('cart-count');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'flex justify-between items-center mb-4';
        itemElement.innerHTML = `
            <div>
                <h4 class="font-bold">${item.name}</h4>
                <p>Cantidad: ${item.quantity}</p>
                <p>Precio: $${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" class="text-[#D4AF37] hover:text-white transition duration-300">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItemsElement.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    cartCountElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartTotalElement.textContent = total.toFixed(2);
}

// Load products
function loadProducts() {
    const productContainer = document.getElementById('product-categories');
    const categories = [...new Set(products.map(product => product.category))];

    categories.forEach(category => {
        const categoryProducts = products.filter(product => product.category === category);
        const categoryElement = document.createElement('div');
        categoryElement.className = 'mb-12';
        categoryElement.innerHTML = `
            <h3 class="text-2xl font-bold mb-6">${category}</h3>
            <div class="product-slider flex space-x-4 overflow-x-auto pb-4">
                ${categoryProducts.map(product => `
                    <div class="product-card flex-shrink-0 w-64 bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="${product.images[0]}" alt="${product.name}" class="w-full h-64 object-cover">
                        <div class="p-4">
                            <h4 class="text-xl font-bold mb-2">${product.name}</h4>
                            <p class="text-gray-600 mb-4">$${product.price.toFixed(2)}</p>
                            <button onclick="openProductModal(${product.id})" class="bg-[#D4AF37] text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition duration-300">Ver Detalles</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        productContainer.appendChild(categoryElement);
    });
}

// Load Instagram Reels
function loadInstagramReels() {
    const reelsContainer = document.getElementById('instagram-reels');
    instagramReels.forEach(reel => {
        const reelElement = document.createElement('a');
        reelElement.href = reel.link;
        reelElement.className = 'block relative aspect-square overflow-hidden rounded-lg';
        reelElement.innerHTML = `
            <img src="${reel.image}" alt="Instagram Reel" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <i class="fab fa-instagram text-white text-4xl"></i>
            </div>
        `;
        reelsContainer.appendChild(reelElement);
    });
}

// Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const modalContent = document.getElementById('modal-content');
        modalContent.innerHTML = `
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    ${product.images.map(image => `
                        <div class="swiper-slide">
                            <img src="${image}" alt="${product.name}" class="w-full h-64 object-cover">
                        </div>
                    `).join('')}
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
            <div>
                <h3 class="text-2xl font-bold mb-2">${product.name}</h3>
                <p class="text-xl mb-4">$${product.price.toFixed(2)}</p>
                <p class="mb-4">${product.description}</p>
                <button onclick="addToCart(${product.id})" class="bg-[#D4AF37] text-white px-4 py-2 rounded-full hover:bg-opacity-80 transition duration-300">Agregar al Carrito</button>
            </div>
        `;
        document.getElementById('product-modal').classList.remove('hidden');

        // Initialize Swiper
        new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadInstagramReels();

    // Mobile menu
    document.getElementById('mobile-menu-button').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('open');
    });

    document.getElementById('close-mobile-menu').addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('open');
    });

    // Shopping cart
    document.getElementById('cart-button').addEventListener('click', () => {
        document.getElementById('shopping-cart').classList.toggle('translate-x-0');
    });

    document.getElementById('close-cart').addEventListener('click', () => {
        document.getElementById('shopping-cart').classList.remove('translate-x-0');
    });

    // Product modal
    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('product-modal').classList.add('hidden');
    });

    // Checkout
    document.getElementById('checkout-button').addEventListener('click', () => {
        document.getElementById('checkout-modal').classList.remove('hidden');
    });

    document.getElementById('close-checkout').addEventListener('click', () => {
        document.getElementById('checkout-modal').classList.add('hidden');
    });

    // Form submissions
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle contact form submission
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    });

    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle newsletter form submission
        alert('Gracias por suscribirte a nuestro boletín.');
    });

    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle checkout form submission
        alert('Gracias por tu compra. Recibirás un correo electrónico con los detalles de tu pedido.');
        cart = [];
        updateCart();
        document.getElementById('checkout-modal').classList.add('hidden');
    });

    // Rotating banner text
    const bannerTexts = [
        "Envío gratis en pedidos superiores a $500",
        "Nueva colección de verano disponible",
        "20% de descuento en todos los anillos"
    ];
    let currentBannerIndex = 0;
    const bannerElement = document.getElementById('banner-text');

    function rotateBannerText() {
        bannerElement.classList.remove('fade-in');
        setTimeout(() => {
            currentBannerIndex = (currentBannerIndex + 1) % bannerTexts.length;
            bannerElement.textContent = bannerTexts[currentBannerIndex];
            bannerElement.classList.add('fade-in');
        }, 500);
    }

    setInterval(rotateBannerText, 5000);
});

// PayPal integration
paypal.Buttons({
    createOrder: function(data, actions) {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: total.toFixed(2)
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Transacción completada por ' + details.payer.name.given_name);
            cart = [];
            updateCart();
            document.getElementById('checkout-modal').classList.add('hidden');
        });
    }
}).render('#paypal-button-container');