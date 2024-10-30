// Retrieve cart data from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsDiv = document.getElementById('cartItems');
const totalAmountP = document.getElementById('totalAmount');

// Check if the cart is empty
if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
} else {
    // Display each cart item
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;
        cartItemsDiv.appendChild(cartItem);
    });

    // Calculate and display the total amount
    const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
    totalAmountP.textContent = "Total: $" + totalAmount.toFixed(2);
}
