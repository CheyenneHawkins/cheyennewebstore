import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  border-radius: 15px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: white;
  /* background: rgba(0, 0, 0, 0.01); */
  border: 5px solid white;
  padding: 20px;
  font-size: 1.8rem;
  line-height: 1.5;
  font-weight: 600;
  display: block;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 1rem;
    font-size: 1.3rem;
    border: none;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.1);
    &:focus {
      outline: 1;
      border-color: var(--red);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #ff3019 0%,
        #e2b04a 50%,
        #ff3019 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
