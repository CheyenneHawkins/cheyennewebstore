import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';
import { UseCart } from '../lib/cartState';
import CartCount from './CartCount';
import SignOut from './Signout';

export default function Nav() {
  const user = useUser();
  const { toggleCart } = UseCart();

  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          {/* <button type="button" onClick={SignOut}>
            Sign Out
          </button> */}
          <Link href="/signout">Sign Out</Link>
          <button type="button" onClick={toggleCart}>
            My Cart
            <CartCount
              count={user.cart.reduce(
                (tally, cartItem) => tally + cartItem.quantity,
                0
              )}
            />
          </button>
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sell</Link>
          <Link href="/signin">Orders</Link>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
