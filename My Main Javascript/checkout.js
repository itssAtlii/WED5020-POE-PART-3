function showConfirmation() {
    // Get form values
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    // Create confirmation message
    const confirmationMessage = `
        Please confirm your details:
        Phone: ${phone}
        Address: ${address}
        City: ${city}
        Province: ${state}
        Zip Code: ${zip}
        Card Number: ${cardNumber}
        Expiry Date: ${expiry}
        CVV: ${cvv}
    `;

    // Show alert with confirmation message
    if (confirm(confirmationMessage)) {
        return true; // Allow form submission
    } else {
        return false; // Prevent form submission
    }
}
