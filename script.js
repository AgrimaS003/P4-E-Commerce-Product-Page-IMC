// JavaScript for Cart Management and Product Page Navigation
// let cartItems = [];

// Function to view product details
function viewProduct(productId) {
  const productDetails = {
    1: { name: "Product 1", price: "$49.99", img: "product1.jpg" },
    2: { name: "Product 2", price: "$39.99", img: "product2.jpg" },
    3: { name: "Product 3", price: "$29.99", img: "product3.jpg" } 
  };
  
  const product = productDetails[productId];
  localStorage.setItem("product", JSON.stringify(product));
  window.location.href = "product.html";
}

// Function to load product details on the product page
window.addEventListener("load", function() {
  const product = JSON.parse(localStorage.getItem("product"));
  if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-image").src = product.img;
  }
});

// Initialize cart data
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart function
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };

    // Add product to cart and update total amount
    cart.push(product);

    // Store cart data in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    // Display an alert for successful addition
    alert(`Added ${productName} to cart. Current total: $${getTotalAmount().toFixed(2)}`);

    // Log to confirm product was added
    console.log(`Product added to cart: `, product);
    console.log(`Updated cart: `, cart);
}

// Helper function to calculate total amount
function getTotalAmount() {
    return cart.reduce((sum, item) => sum + item.price, 0);
}

    // const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

    // alert("Product added to cart! Total: $" + totalAmount.toFixed(2));
