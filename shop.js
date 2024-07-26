
const products = [
    { name: "Clothes", image: "box1_image.jpg", price: 50, oldPrice: 30, category: "clothes" },
    { name: "Health and Personal Care", image: "box2_image.jpg", price: 50, oldPrice: 30, category: "health" },
    { name: "Furniture", image: "box3_image.jpg", price: 50, oldPrice: 30, category: "furniture" },
    { name: "Electronics", image: "box4_image.jpg", price: 50, oldPrice: 30, category: "electronics" },
    { name: "Make Up", image: "box5_image.jpg", price: 50, oldPrice: 30, category: "makeup" },
    { name: "Pet Care", image: "box6_image.jpg", price: 50, oldPrice: 30, category: "pet-care" },
    { name: "New Arrival in toys", image: "box7_image.jpg", price: 50, oldPrice: 30, category: "toys" },
    { name: "Discover Fashion Trends", image: "product-2.jpeg", price: 50, oldPrice: 30, category: "clothes" },
    { name: "Discover Fashion Trends", image: "baby-1.jpg", price: 50, oldPrice: 30, category: "clothes" },
    { name: "Discover Fashion Trends", image: "baby-2.jpg", price: 50, oldPrice: 30, category: "clothes" },
    { name: "Discover Fashion Trends", image: "baby-3.jpg", price: 50, oldPrice: 30, category: "clothes" },
    { name: "Discover Fashion Trends", image: "baby-4.jpg", price: 50, oldPrice: 30, category: "clothes" },
    { name: "Discover Fashion Trends", image: "baby-5.jpg", price: 50, oldPrice: 30, category: "clothes" },
    { name: "Discover Fashion Trends", image: "box8_image.jpg", price: 50, oldPrice: 30, category: "clothes" },
    { name: "Discover Fashion Trends", image: "men-1.jpg", price: 50, oldPrice: 30, category: "clothes" },
    { name: "Discover Fashion Trends", image: "men-2.jpg", price: 50, oldPrice: 30, category: "clothes" },
    { name: "Men Products", image: "men-1.jpg", price: 50, oldPrice: 30, category: "men" },
    { name: "Men Products", image: "men-2.jpg", price: 50, oldPrice: 30, category: "men" },
    { name: "Men Products", image: "men-3.jpg", price: 50, oldPrice: 30, category: "men" },
    { name: "Men Products", image: "men-4.jpg", price: 50, oldPrice: 30, category: "men" },
    { name: "Men Products", image: "men-5.jpg", price: 50, oldPrice: 30, category: "men" },
    { name: "Men Products", image: "men-6.jpg", price: 50, oldPrice: 30, category: "men" },
    { name: "Men Products", image: "men-7.jpg", price: 50, oldPrice: 30, category: "men" },
    { name: "Men Products", image: "men-8.jpg", price: 50, oldPrice: 30, category: "men" },
    { name: "Women Products", image: "women-1.jpg", price: 50, oldPrice: 30, category: "women" },
    { name: "Women Products", image: "women-2.jpg", price: 50, oldPrice: 30, category: "women" },
    { name: "Women Products", image: "women-3.jpg", price: 50, oldPrice: 30, category: "women" },
    { name: "Women Products", image: "women-4.jpg", price: 50, oldPrice: 30, category: "women" },
    { name: "Women Products", image: "women-5.jpg", price: 50, oldPrice: 30, category: "women" },
    { name: "Women Products", image: "women-6.jpg", price: 50, oldPrice: 30, category: "women" },
    { name: "Women Products", image: "women-7.jpg", price: 50, oldPrice: 30, category: "women" },
    { name: "Baby's Collection", image: "baby-1.jpg", price: 50, oldPrice: 30, category: "baby Collection" },
    { name: "Baby's Collection", image: "baby-2.jpg", price: 50, oldPrice: 30, category: "baby Collection" },
    { name: "Baby's Collection", image: "baby-3.jpg", price: 50, oldPrice: 30, category: "baby Collection" },
    { name: "Baby's Collection", image: "baby-4.jpg", price: 50, oldPrice: 30, category: "baby Collection" },
    { name: "Baby's Collection", image: "baby-5.jpg", price: 50, oldPrice: 30, category: "baby Collection" },
];

const productsGrid = document.querySelector('.products-grid');
const sortSelect = document.getElementById('sort');
const categorySelect = document.getElementById('category');

function displayProducts(filteredProducts) {
    productsGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        productsGrid.innerHTML += `
            <div class="product-item shop-box">
                <div class="box-content">
                    <h3 class="P-name">${product.name}</h3>
                    <div class="shop-box-image" style="background-image: url('${product.image}');"></div>
                    <div class="shopping-price">
                    <span class="newprice shop-price">Price: $${product.price}</span> <span class="oldPrice">$${product.oldPrice}</span>
                    <div>
                    <div>
                        <button class="FONT sign-button orderNow shop-order-now">Order Now</button>
                        <button class="FONT sign-button orderNow cart shop-order-now media-cart">Add to Cart <i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
            </div>
        `;
    });
}

function sortProducts(products, criteria) {
    if (criteria === 'price-asc') {
        return products.sort((a, b) => a.price - b.price);
    } else if (criteria === 'price-desc') {
        return products.sort((a, b) => b.price - a.price);
    } else if (criteria === 'newest') {
        return products; // Assuming products array is already sorted by newest
    } else {
        return products;
    }
}

function filterProducts(products, category) {
    if (category === 'all') {
        return products;
    } else {
return products.filter(product => product.category === category);
}
}

// Initial display of products
displayProducts(products);

// Event listeners for sort and filter
sortSelect.addEventListener('change', () => {
const selectedCategory = categorySelect.value;
const filteredProducts = filterProducts(products, selectedCategory);
const sortedProducts = sortProducts(filteredProducts, sortSelect.value);
displayProducts(sortedProducts);
});

categorySelect.addEventListener('change', () => {
const selectedSort = sortSelect.value;
const filteredProducts = filterProducts(products, categorySelect.value);
const sortedProducts = sortProducts(filteredProducts, selectedSort);
displayProducts(sortedProducts);
});
