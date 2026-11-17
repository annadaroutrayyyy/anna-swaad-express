function billSummary(cartItems) {
  const foodTotal = cartItems.reduce((sum, item) => {
    // Ensure price is a clean number (in case it's stored as "₹250" or "250.00")
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace(/[^\d.]/g, '')) 
      : Number(item.price);

    const quantity = Number(item.quantity ?? item.qty ?? 1);

    return sum + (price * quantity);
  }, 0);

  return {
    total: Number(foodTotal.toFixed(2))
  };
}
