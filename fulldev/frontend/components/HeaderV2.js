// this is a next tag that creates a link without refreshing the page
import Link from 'next/link';
import styled from 'styled-components';
import Cart from './Cart';
import Nav from './NavV2';
import SearchBox from './SearchBox';

const Logo = styled.h1`
  font-size: 2rem;
  margin-top: 0;
  margin-left: 2rem;
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 2;
  /* background: red; */
  transform: scale();
  height: 100%;
  a {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  --headerwidth: 300px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 60px;
  overflow: hidden;

  .headerspacer {
    width: var(--headerwidth);
    /* background: green; */
  }

  .headerline {
    display: grid;
    grid-template-columns: auto minmax(100px, 1fr) minmax(100px, 1fr);
    grid-template-rows: 60px;
    overflow-wrap: normal;
  }

  .navcart {
    display: flex;
    justify-content: end;
    /* background-color: aqua; */
  }

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
    <>
      <HeaderStyles>
        <div className="headerspacer"> </div>
        <div className="headerline">
          <Logo>
            <Link href="/">CHEYENNE SHOES</Link>
          </Logo>
          <SearchBox />
          <div className="navcart">
            <Nav />
            <Cart />
          </div>
        </div>
        <div className="headerspacer"> </div>
      </HeaderStyles>
    </>
  );
}
