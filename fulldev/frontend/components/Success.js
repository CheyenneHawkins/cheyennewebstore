import styled from 'styled-components';

const SuccessBox = styled.div`
  height: 60px;
  width: 200px;
  z-index: -1;
  position: fixed;
  transition: transform 0.6s;
  transform: translate(20px, -100px);
  display: flex;
  background-color: green;
  color: white;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 20px;
  margin-top: 20px;
  &.modalon {
    transform: translate(20px, 0px);
  }
`;

export default function Success({ prop, word }) {
  return <SuccessBox className={prop}>{word} Updated</SuccessBox>;
}
