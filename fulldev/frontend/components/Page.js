import propTypes, { node } from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
// import Header from './Header';
import Header from './HeaderV2';

// create all the custom variable properties
const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'josefin-sans';
        src: url('https://use.typekit.net/imh2fke.css');
        ${'' /* font-family: 'radnika_next'; */}
        ${'' /* src: url('/static/radnikanext-medium-webfont.woff2'); */}
        ${'' /* format('woff2'); */}
        font-weight: 400;
        font-style: normal;

    }
    html {
        --red: #ff0000;
        --black: #393939;
        --grey: #3A3A3A;
        --gray: var(--grey);
        --lightGrey: #e1d1d1;
        --lightGray: var(--lightGrey);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
        box-sizing : border-box ;
        font-size: 10px;
    }
    *, *:before; *:after {
        box-sizing: inherit;

    };

    body {
        font-family: 'radnika_next',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 0;
        margin: 0;
        font-size: 62.5%;
        line-height: 2;
    }
    a {
        text-decoration: none;
        color: var(--black);

    }

    a:hover {
        text-decoration: underline;
    }

    button {
        //font declarations on the body don't apply to buttons for some reason
        font-family: 'radnika_next',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .ordertotal {
      color: var(--black);
      display: grid;
      grid-template-columns: 200px auto;
      align-items: baseline;
      justify-content: start;
    }

    .ordertotal > * {
      padding: 10px;
      justify-self: end;
    }

    .qty { 
      padding-top: 0;
      text-align: start;
    }


`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
  font-size: 20px;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles /> {/* engages the custom variables declarations  */}
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: propTypes.any,
};
