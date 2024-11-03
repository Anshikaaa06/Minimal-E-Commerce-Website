// Mock product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        image: "https://s.alicdn.com/@sc04/kf/Hf38842ff13e943d381311e8d7bdeea579.jpg_300x300.jpg",
        price: "₹1199",
        description: "Noise-cancelling headphones for immersive sound"
    },
    {
        id: 2,
        name: "Smart Watch",
        image: "https://images-eu.ssl-images-amazon.com/images/I/61EclBYcocL._AC_UL200_SR200,200_.jpg",
        price: "₹999",
        description: "Stay connected, stylish and smart"
    },
    {
        id: 3,
        name: "Shoes",
        image: "https://golfoy.com/media/catalog/product/cache/c746a41e8c245f404548c2a03949d960/s/2/s2g-spikeless-24-wide-golf-shoes-ig8108_1_1.jpg",
        price: "₹1599",
        description: "Style your walk with comfort"
    },
    {
        id: 4,
        name: "Home Decor",
        image: "https://static.vecteezy.com/system/resources/thumbnails/042/124/761/small/ai-generated-cozy-armchair-and-coffee-table-isolated-on-transparent-background-with-clipping-path-3d-render-free-png.png",
        price: "₹749",
        description: "Transform your space with elegant decor"
    }
];



// Function to display products
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
        `;

        productList.appendChild(productItem);
    });
}

// Initial display of products
displayProducts(products);

// Search functionality
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});


