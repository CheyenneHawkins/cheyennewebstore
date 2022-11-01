export default function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    // in case product is deleted while still in a cart
    if (!cartItem.product) return tally;
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
