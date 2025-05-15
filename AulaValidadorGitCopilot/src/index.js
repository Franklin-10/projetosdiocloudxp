// Function to validate credit card numbers
function validateCreditCard(cardNumber) {
  // Remove all spaces from the input
  const sanitizedCardNumber = cardNumber.replace(/\s+/g, '');

  // Check if the input contains only digits
  if (!/^\d+$/.test(sanitizedCardNumber)) {
    return 'Invalid input: Card number must contain only digits.';
  }

  const cardPatterns = [
    { name: 'MasterCard', pattern: /^5[1-5][0-9]{14}$/ },
    { name: 'Visa 16 Dígitos', pattern: /^4[0-9]{15}$/ },
    { name: 'American Express', pattern: /^3[47][0-9]{13}$/ },
    { name: 'Diners Club', pattern: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
    { name: 'Discover', pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
    { name: 'EnRoute', pattern: /^(2014|2149)[0-9]{11}$/ },
    { name: 'JCB', pattern: /^(?:2131|1800|35\d{3})\d{11}$/ },
    { name: 'Voyager', pattern: /^8699[0-9]{11}$/ },
    { name: 'HiperCard', pattern: /^(606282|3841)[0-9]{10,13}$/ },
    { name: 'Aura', pattern: /^50[0-9]{14}$/ },
  ];

  for (const card of cardPatterns) {
    if (card.pattern.test(sanitizedCardNumber)) {
      return `Valid card: ${card.name}`;
    }
  }

  return 'Invalid card number';
}

// Example usage
const cardNumber = '3573 7933 9627 3808'; // Replace with the card number to test
console.log(validateCreditCard(cardNumber));
