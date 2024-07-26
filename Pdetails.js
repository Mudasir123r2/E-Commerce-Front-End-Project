document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const panelAll = document.querySelector('.panel-all');
    const panelOptions = document.querySelector('.panel-option');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    panelAll.addEventListener('click', () => {
        panelOptions.classList.toggle('active');
    });
});


const products = [
    {
        name: 'Product 1',
        description: 'Elevate your daily routine with this must-have accessory.',
        price: '$19.99',
        image: 'men-1.jpg'
    },
    {
        name: 'Product 2',
        description: 'Stay organized and stylish with this versatile product.',
        price: '$29.99',
        image: 'men-2.jpg'
    },
    {
        name: 'Product 3',
        description: 'Experience the perfect blend of form and function',
        price: '$39.99',
        image: 'men-3.jpg'
    },
    {
        name: 'Product 4',
        description: 'Upgrade your daily essentials with this premium product.',
        price: '$49.99',
        image: 'women-6.jpg'
    },
    {
        name: 'Product 5',
        description: 'Add a touch of elegance to your daily life',
        price: '$59.99',
        image: 'health-1.jpg'
    }
];

let currentIndex = 0;

const productDisplay = document.getElementById('productDisplay');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function displayProduct(index) {
    productDisplay.innerHTML = `
        <div class="product-card">
            <img src="${products[index].image}" alt="${products[index].name}" class="product-image">
            <h2 class="product-name">${products[index].name}</h2>
            <p class="product-description">${products[index].description}</p>
            <p class="product-price">${products[index].price}</p>
            <button class="FONT sign-button orderNow">Order Now</button>
            <button class="FONT sign-button orderNow cart">Add to Cart <i class="fa-solid fa-cart-shopping"></i> </button>
        </div>
    `;
}

function showNextProduct() {
    currentIndex = (currentIndex + 1) % products.length;
    displayProduct(currentIndex);
}

function showPreviousProduct() {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    displayProduct(currentIndex);
}

prevBtn.addEventListener('click', showPreviousProduct);
nextBtn.addEventListener('click', showNextProduct);

// Initial display
displayProduct(currentIndex);