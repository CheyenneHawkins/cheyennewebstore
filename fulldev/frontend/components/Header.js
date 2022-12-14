// this is a next tag that creates a link without refreshing the page
import Link from 'next/link';
import styled from 'styled-components';
import Cart from './Cart';
import Nav from './Nav';
import Search from './Search';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: greenyellow;
  transform: scale();
  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  /* position: fixed;
  z-index: 2;
  background-color: white;
  width: 100%; */
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
    font-size: 1rem;
    padding-left: 15px;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">STORE, BABY!</Link>
        </Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <Search />
      </div>
      <Cart />
    </HeaderStyles>
  );
}
