import styled from 'styled-components';

const PaginationStyles = styled.div`
  /* color: red; */
  width: 100%;
  text-align: center;
  display: inline-grid;
  grid-template-columns: 100px 200px 1fr 150px 100px;
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  font-size: 1.7rem;
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  & > * {
    /* color: blue; */
    margin: 0;
    /* padding: 15px 30px; */
    padding: 2px 30px;
    border-right: 1px solid var(--lightGray);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
  select {
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    border-radius: 10px;
    padding: 2px;
    font-size: 1.5rem;
    /* background: grey; */
  }
`;

export default PaginationStyles;
