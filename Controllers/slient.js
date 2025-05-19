const stripe = Stripe('SECTRET'); // Use your Stripe publishable key

const handlePayment = async () => {
  const response = await fetch('/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount: 100, currency: 'usd' }), // Set amount in cents (e.g., 100 for $1.00)
  });
  const { clientSecret } = await response.json();

  const { error } = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: cardElement, // cardElement is a reference to the Stripe Element input for card info
    },
  });

  if (error) {
    console.log('Payment failed: ', error.message);
  } else {
    console.log('Payment successful!');
    // You can also call an API to store order details in your database
  }
};
