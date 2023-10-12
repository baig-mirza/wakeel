$(document).ready(function () {
  $("#popup-button").click(function () {
      $("#popup").fadeIn();
  });

  $("#close-popup").click(function () {
      $("#popup").fadeOut();
  });
});


$(document).ready(function () {
  $("#collection-button").click(function () {
      $("#popup").fadeIn();
  });

  $("#close-popup").click(function () {
      $("#popup").fadeOut();
  });
});

// Define your products with names, prices, and any other relevant details
const products = [
    { name: 'Lana Blue Hoodie', price: 79.99, stripeProductId: 'price_1NzW9FFBKA9GuLojiWMVcW46' },
    // Add more products as needed
  ];
  
  // Create an empty cart array
  let cart = [];
  
  // Function to add an item to the cart
  function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartUI();
  }
  
  // Function to update the cart UI
  function updateCartUI() {
    // Get the cart items element by its ID
    const cartItemsElement = document.getElementById('cart-items');
  
    // Clear the previous contents
    cartItemsElement.innerHTML = '';
  
    // Iterate through the cart array and add each item to the cartItemsElement
    for (const item of cart) {
      // Create a new list item for the item
      const listItem = document.createElement('li');
      // Set the text content of the list item with the item name and price
      listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
      // Append the list item to the cartItemsElement
      cartItemsElement.appendChild(listItem);
    }
  
    // Calculate and display the cart total
    const cartTotal = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
  }
  
  // Add a click event listener to the "Add to Cart" button
  document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', function () {
      const productName = this.getAttribute('data-product-name');
      const price = parseFloat(this.getAttribute('data-product-price'));
      addToCart(productName, price);
    });
  });
  
  const checkoutButton = document.getElementById('checkout-btn');
checkoutButton.addEventListener('click', checkout);
  // Function to initiate the Stripe checkout
// Function to initiate the Stripe checkout
async function checkout() {
    // Use the Stripe.js library to initiate checkout
    const stripe = Stripe('pk_test_51NytAEFBKA9GuLojSNhZSIryOI6DGi1Or6NofwczqEtzjVNMiV1UyGU1LR4oxcJo70nvOeiDJa7m9DUtSgB0NAI900cNQu8tCD'); // Replace with your actual Stripe public key
  
    const lineItems = cart.map(item => ({
      price: item.stripeProductId, // Use the stripeProductId here
      quantity: 1,
      currency: 'aud', // Replace with the appropriate currency code (e.g., 'aud')
    }));
  
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lineItems: lineItems, // Use "line_items" instead of "lineItems"
      }),
    });
  
    const { sessionId } = await response.json();
  
    // Redirect to Stripe checkout page
    await stripe.redirectToCheckout({ sessionId: sessionId });
  }
  
  // Add a click event listener to the "Checkout" button in the modal
 
  document.querySelector('.scroll-down-arrow').addEventListener('click', function () {
    // Animate the reveal effect
    const landing = document.querySelector('.landing');
    const content = document.querySelector('.content');
    const arrow = document.querySelector('.scroll-down-arrow');

    // Translate the landing and fade out the landing
    landing.style.transform = 'translateY(-100%)';
    landing.style.opacity = '0';
    arrow.style.display = 'none';

    // After a short delay (adjust as needed), show the content
    setTimeout(() => {
        landing.style.display = 'none';
        content.style.transform = 'translateY(0%)';
        
        // Enable scrolling by removing the overflow: hidden; property from the body
        document.body.style.overflow = 'auto';
    }, 1000); // Adjust the delay time (in milliseconds)
});



// Rest of your code...




var menu = document.querySelector(".mobile-menu")

if (navigator.userAgent.match(/Mobile/)) {

    menu.classList.add("ms-auto");

};
