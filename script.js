// Datos de muestra para productos
const products = [
    { id: 1, name: "Anillo de Diamantes", price: 1999.99, image: "diamond-ring.jpg", description: "Elegante anillo de diamantes con banda de oro de 18k." },
    { id: 2, name: "Collar de Oro", price: 799.99, image: "gold-necklace.jpg", description: "Collar de oro de 24k con diseño intrincado." },
    { id: 3, name: "Pulsera de Plata", price: 299.99, image: "silver-bracelet.jpg", description: "Pulsera de plata esterlina con dijes." },
    { id: 4, name: "Pendientes de Zafiro", price: 599.99, image: "sapphire-earrings.jpg", description: "Pendientes de zafiro azul con diamantes." },
    { id: 5, name: "Reloj de Lujo", price: 2499.99, image: "luxury-watch.jpg", description: "Reloj de lujo con movimiento automático y caja de oro." },
    { id: 6, name: "Brazalete Personalizado", price: 399.99, image: "custom-bracelet.jpg", description: "Brazalete personalizado con grabado láser." },
];

// Datos de muestra para Instagram Reels
const instagramReels = [
    { id: 1, embedCode: '<iframe src="https://www.instagram.com/reel/ABC123/" width="100%" height="100%" frameborder="0"></iframe>' },
    { id: 2, embedCode: '<iframe src="https://www.instagram.com/reel/DEF456/" width="100%" height="100%" frameborder="0"></iframe>' },
    { id: 3, embedCode: '<iframe src="https://www.instagram.com/reel/GHI789/" width="100%" height="100%" frameborder="0"></iframe>' },
    { id: 4, embedCode: '<iframe src="https://www.instagram.com/reel/JKL012/" width="100%" height="100%" frameborder="0"></iframe>' },
];

// Funcionalidad del carrito
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

// Renderizado de productos
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card', 'bg-black', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'border', 'border-[#D4AF37]');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-bold text-xl mb-2 text-[#D4AF37]">${product.name}</h3>
                <p class="text-white mb-2">$${product.price.toFixed(2)}</p>
                <button onclick="showProductModal(${product.id})" class="bg-[#D4AF37] text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">Ver Detalles</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Modal de producto
function showProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <h2 class="text-2xl font-bold mb-4 text-[#D4AF37]">${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover mb-4 rounded-lg">
        <p class="text-white mb-4">${product.description}</p>
        <p class="text-xl font-bold mb-4 text-[#D4AF37]">$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${JSON.stringify(product)})" class="bg-[#D4AF37] text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">Agregar al Carrito</button>
    `;
    document.getElementById('product-modal').classList.remove('hidden');
}

// Cerrar modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('product-modal').classList.add('hidden');
});

// Renderizado de Instagram Reels
function renderInstagramReels() {
    const reelsContainer = document.getElementById('instagram-reels');
    instagramReels.forEach(reel => {
        const reelDiv = document.createElement('div');
        reelDiv.classList.add('aspect-square', 'overflow-hidden', 'rounded-lg');
        reelDiv.innerHTML = reel.embedCode;
        reelsContainer.appendChild(reelDiv);
    });
}

// Toggle del carrito de compras
document.getElementById('cart-button').addEventListener('click', () => {
    document.getElementById('shopping-cart').classList.toggle('translate-x-0');
});

// Envío del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí normalmente enviarías los datos del formulario a un servidor
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    e.target.reset();
});

// Envío del formulario de newsletter
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí normalmente enviarías el email a un servidor para la suscripción al newsletter
    alert('¡Gracias por suscribirte a nuestro newsletter!');
    e.target.reset();
});

// Rotación del banner superior
const bannerMessages = [
    "¡Envío gratis en pedidos superiores a $500!",
    "¡Nueva colección disponible ahora!",
    "¡Oferta por tiempo limitado: 20% de descuento en todos los collares!"
];
let currentBannerIndex = 0;

function rotateBanner() {
    const bannerText = document.getElementById('banner-text');
    bannerText.textContent = bannerMessages[currentBannerIndex];
    currentBannerIndex = (currentBannerIndex + 1) % bannerMessages.length;
}

// Integración de PayPal
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
                alert('¡Transacción completada por ' + details.payer.name.given_name + '!');
                // Aquí normalmente limpiarías el carrito y actualizarías tu backend
                cart = [];
                updateCartCount();
                updateCartTotal();
                renderCart();
                closeCheckoutModal();
            });
        }
    }).render('#paypal-button-container');
}

// Funcionalidad del menú móvil
document.getElementById('mobile-menu-button').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('open');
});

document.getElementById('close-mobile-menu').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.remove('open');
});

// Funcionalidad del modal de checkout
document.getElementById('checkout-button').addEventListener('click', () => {
    document.getElementById('checkout-modal').classList.remove('hidden');
});

document.getElementById('close-checkout').addEventListener('click', closeCheckoutModal);

function closeCheckoutModal() {
    document.getElementById('checkout-modal').classList.add('hidden');
}

// Envío del formulario de checkout
document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí normalmente procesarías el pedido
    alert('¡Gracias por tu compra! Tu pedido ha sido procesado.');
    cart = [];
    updateCartCount();
    updateCartTotal();
    renderCart();
    closeCheckoutModal();
});

// Inicializar todo cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderInstagramReels();
    setInterval(rotateBanner, 5000); // Rotar el banner cada 5 segundos
    rotateBanner(); // Mostrar el banner inicial
    initPayPalButton();
});