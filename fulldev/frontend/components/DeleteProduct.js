import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import wait from 'waait';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  console.log(payload);
  cache.evict(cache.identify(payload.data.deleteProduct));
}

const refreshPage = () => {
  window.location.reload(true);
};

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
    update,
  });
  return (
    <>
      <button
        type="button"
        disabled={loading}
        //   className="delbutton"
        onClick={async () => {
          if (confirm('Are you serious?!')) {
            console.log(id);
            deleteProduct().catch((err) => err.message);
            await wait(2000);
            refreshPage();
          }
        }}
      >
        {children}
      </button>
      <button
        onClick={() => {
          refreshPage();
        }}
      >
        REFRESH
      </button>
    </>
  );
}
