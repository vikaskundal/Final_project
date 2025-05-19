const handlePayment = async () => {
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 100, currency: 'usd' })
    });
  
    const { clientSecret } = await response.json();
  
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });
  
    if (error) {
      console.error('Payment failed:', error.message);
    } else if (paymentIntent.status === 'succeeded') {
      console.log('✅ Payment succeeded!');
      // Optionally call backend to store order
    }
  };
  