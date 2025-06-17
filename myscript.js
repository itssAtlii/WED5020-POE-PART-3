const form = document.getElementById('contact-form');
        const successMessage = document.querySelector('.success-message');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            // Simulate sending message (e.g., via API) and then show success
            successMessage.style.display = 'block';

            // Reset form inputs
            form.reset();

            // Hide message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        });
        document.addEventListener('DOMContentLoaded', () => {
            const checkoutForm = document.getElementById('checkoutForm');
            const totalAmountEl = document.getElementById('totalAmount');
          
            if (!checkoutForm) return;
          
            checkoutForm.addEventListener('submit', (event) => {
              event.preventDefault();
          
              if (!checkoutForm.checkValidity()) {
                checkoutForm.reportValidity();
                return;
              }
          
              // Normally here would be payment processing logic.
          
              // For demo, show a confirmation:
              alert('Thank you for your purchase! Your order has been received.');
          
              checkoutForm.reset();
          
              // Optional: Reset total or update UI accordingly
              if (totalAmountEl) {
                // Keep total or reset as needed
              }
            });
          });
    // Initialize an empty cart
    const cart = [];

    // Function to update the cart display
    function updateCartDisplay() {
        const cartContainer = document.getElementById('cart-items');
        const totalContainer = document.getElementById('cart-total');
        cartContainer.innerHTML = ''; // Clear previous cart items

        let total = 0;

        // Loop through cart items and display them
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - R${item.price.toFixed(2)} x ${item.quantity}`;
            cartContainer.appendChild(cartItem);
            total += item.price * item.quantity; // Calculate total
        });

        totalContainer.textContent = `Total: R${total.toFixed(2)}`; // Update total display
    }

    // Function to add a product to the cart
    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1; // Increase quantity if already in cart
        } else {
            cart.push({ name, price, quantity: 1 }); // Add new item to cart
        }
        updateCartDisplay(); // Update cart display
    }

    // Event listener for add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productName = productElement.getAttribute('data-name');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            addToCart(productName, productPrice); // Add product to cart
        });
    });

          