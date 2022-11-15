import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import waait from '../node_modules/waait';
import { UseCart, openCart } from '../lib/cartState';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
      quantity
    }
  }
`;

export default function AddToCart({ id }) {
  const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
    variables: { id },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const { toggleCart } = UseCart();
  const { closeCart } = UseCart();

  return (
    <button
      // disabled={loading}
      type="button"
      onClick={async () => {
        addToCart({
          variables: { id },
          refetchQueries: [{ query: CURRENT_USER_QUERY }],
        });
        // await waait(1000);
        // console.log('Open sesame');
        // toggleCart();
        // await waait(2500);
        // closeCart();
      }}
    >
      Add{loading && 'ing'} to Cart 🛒{' '}
    </button>
  );
}
