import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  /* border: 1px solid var(--lightGray); */
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid var(--lightGray);
  background: ${(props) => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${(props) => (props.highlighted ? props.theme.lightgrey : 'white')};
  img {
    margin-right: 10px;
  }
  cursor: pointer;
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px red;
  }

  to {
    box-shadow: 0 0 5px 1px red;
  }
`;

const SearchStyles = styled.div`
  /* position: relative; */
  align-self: center;
  input {
    width: 100%;
    height: 25px;
    padding: 10px;
    /* border: pink 2px solid; */
    border-radius: 20px;
    font-size: 1.5rem;
    border: rgb(0, 0, 0, 0.1) solid 1px;
    /* &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate; */
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
