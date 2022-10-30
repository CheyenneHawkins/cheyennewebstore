import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

export default function UpdateProduct({ id }) {
  // get existing product
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  // console.log(data.Product.name);
  // console.log(data.Product.description);
  // console.log(data.Product.name);

  // get mutation to update product

  // since we've already used the variables data, error, and loading, we can rename them as we declare them here
  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Product);

  if (loading) {
    return <p>Loading...</p>;
  }
  // make form to handle updates

  return (
    <div>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await updateProduct({
            variables: {
              id,
              name: inputs.name,
              description: inputs.description,
              price: inputs.price,
            },
          });
          console.log(res);

          //   await createProduct();
          //   clearForm();
          //   Router.push({
          //     pathname: `/product/${data}`,
          // //   });
        }}
      >
        <DisplayError error={error} />
        <fieldset disabled={updateLoading} aria-busy={updateLoading}>
          {/* <label htmlFor="image">
            Image
            <input
              required
              onInvalid={() => {
                console.log('idiot.');
              }}
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
            />
          </label> */}
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="price"
              value={inputs.price}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="description"
              value={inputs.description}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Update Product</button>
        </fieldset>
      </Form>
    </div>
  );
}
