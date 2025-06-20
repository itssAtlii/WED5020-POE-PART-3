document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productName = productElement.getAttribute('data-name');
            const productPrice = productElement.getAttribute('data-price');

            // Create confirmation message
            const confirmationMessage = `You have added ${productName} to your cart for R${productPrice}.`;

            // Show alert with confirmation message
            alert(confirmationMessage);
        });
    });
});
