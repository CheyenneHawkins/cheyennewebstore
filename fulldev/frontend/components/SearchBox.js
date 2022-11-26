import router from 'next/router';
import styled from 'styled-components';
import Image from 'next/image';

const SearchBar = styled.div`
  width: 100%;
  height: 20px;
  margin: 5px;
  padding: 10px;
  input {
    border: rgb(0, 0, 0, 0.1) solid 1px;
    border-radius: 15px;
    font-size: 1.5rem;
    color: gray;
    border: black solid 1px;
    width: 80%;
    padding-left: 10px;
  }
  button {
    border: none;
    background-color: none;
    background: none;
    margin-top: 5px;
    &:active {
      transform: translate(1px, 2px);
    }
  }
  form {
    display: flex;
  }
`;

export default function SearchBox() {
  return (
    <SearchBar>
      <form
        id="searchbox"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target[0].value != '') {
            console.log(e.target[0].value);
            router.push({
              pathname: '/search/',
              query: { id: e.target[0].value },
            });
            document.getElementById('searchbox').reset();
          }
        }}
      >
        <input type="text" placeholder="search for products" />
        <button type="submit">
          <Image
            src="/static/magnify.png"
            height="20"
            width="20"
            layout="fixed"
          />
        </button>
      </form>
    </SearchBar>
  );
}
