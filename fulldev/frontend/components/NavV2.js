import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import NavStyles from './styles/NavStylesV2';
import { useUser } from './User';
import { UseCart } from '../lib/cartState';
import CartCount from './CartCount';

const AccountMenu = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: auto;
  width: 200px;
  transform-origin: top top;
  display: none;
  grid-template-rows: 50px;
  grid-auto-rows: 50px;
  justify-content: center;
  z-index: 2;
  position: absolute;
  text-decoration: none;
  transition: transform 2s;
  transform: translate(-40%, -400);
  & a {
    color: white;
    /* border: red 1px solid; */
  }
`;

const ImageStyle = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  &:hover ${AccountMenu} {
    transition: 1s;
    /* border: red 1px solid; */
    transform: translate(-40%, 90px);
    display: grid;
  }
`;

export default function Nav() {
  const user = useUser();
  const { toggleCart } = UseCart();

  return (
    <NavStyles>
      <Link href="/products">Shop</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/account" className="dropmenu">
            <ImageStyle>
              <Image
                src="/static/icons8-user-60.png"
                height="30"
                width="30"
                layout="fixed"
              />
              <AccountMenu>
                <Link href="/orders">Orders</Link>
                <Link href="/account">Account</Link>
                <Link href="/signout">Sign Out</Link>
              </AccountMenu>
            </ImageStyle>
          </Link>
          <button type="button" onClick={toggleCart}>
            Cart
            <CartCount
              count={user.cart.reduce(
                (tally, cartItem) =>
                  tally + (cartItem.product ? cartItem.quantity : 0),
                0
              )}
            />
          </button>
        </>
      )}
      {!user && (
        <>
          {/* <Link href="/signin">Sell</Link>
          <Link href="/signin">Orders</Link> */}
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
