import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';
import wait from 'waait';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';
import Success from './Success';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
      tags {
        name
      }
    }
  }
`;

const UPDATE_PRODUCT_MUTATION = gql`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int # $tags: Array
  ) {
    updateProduct(
      id: $id
      data: {
        name: $name
        description: $description
        price: $price
        tags: $tags
        # photo: $photo
      }
    ) {
      id
      name
      description
      price
      tags
      # photo {
      #   id
      #   image {
      #     publicUrlTransformed
      #   }
    }
  }
`;

export default function UpdateProduct({ id }) {
  const [successState, setSuccessState] = useState(false);

  const on = successState ? 'modalon' : '';

  // get existing product
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, {
    variables: { id },
  });

  // since we've already used the variables data, error, and loading, we can rename them as we declare them here
  const [
    updateProduct,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_PRODUCT_MUTATION);

  const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Product);

  // function to populate the tag field with existing tags
  function getTags() {
    let theTags = '';
    // iterates over the array of tag objects make string
    if (data?.Product.tags) {
      const forLength = data.Product.tags.length;
      for (let i = 0; i < forLength; i++) {
        theTags = theTags.concat(`${data?.Product.tags[i].name}, `);
        // console.log(data?.Product.tags[i].name);
      }
    }
    return theTags;
  }

  function convertTags() {
    console.log(inputs.tags);
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          convertTags;
          const res = await updateProduct({
            variables: {
              id,
              name: inputs.name,
              description: inputs.description,
              price: inputs.price,
              tags: inputs.tags,
            },
          });
          await wait(200);
          setSuccessState(true);
          await wait(2000);
          setSuccessState(false);
        }}
      >
        <DisplayError error={error} />
        <fieldset disabled={updateLoading} aria-busy={updateLoading}>
          {/* <label htmlFor="image">
            Image
            <img
              src={data.Product.photo.image.publicUrlTransformed}
              alt={data.Product.name}
            />
            <input
              onInvalid={() => {
                console.log('idiot.');
              }}
              type="file"
              id="image"
              name="image"
              value={getPic()}
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
          {/* ----- BUG ----  */}
          {/* ----- Unable to edit tags from this form ----  */}
          <label htmlFor="tags">
            Tags
            <textarea
              id="tags"
              name="tags"
              placeholder="tags"
              value={getTags()}
              // value={inputs.tags}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Update Product</button>
        </fieldset>
      </Form>
      <Success prop={on} word="Product" />
    </div>
  );
}
