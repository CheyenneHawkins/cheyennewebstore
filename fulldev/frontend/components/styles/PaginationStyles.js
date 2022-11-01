import styled from 'styled-components';

const PaginationStyles = styled.div`
  /* color: red; */
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  font-size: 1.7rem;
  /* border: 1px solid black; */
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  & > * {
    /* color: blue; */
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--lightGray);
    /* border-right: 1px solid black; */
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;

export default PaginationStyles;
