import styled from 'styled-components';

const Title = styled.h3`
  margin: 0 1rem;
  text-align: end;
  /* transform: skew(-5deg) rotate(-1deg); */
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  transform: translateX(10px);
  overflow: hidden;
  a {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background: rgb(0, 0, 0, 0.7);
    /* background: var(--red); */
    display: inline;
    position: relative;
    line-height: 1.3;
    font-size: 3rem;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }
`;

export default Title;
