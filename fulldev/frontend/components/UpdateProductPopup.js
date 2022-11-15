import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import wait from 'waait';
import { useState } from 'react';
import { number } from 'prop-types';
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
    $price: Int
    $tags: Array
  ) {
    updateProduct(
      id: $id
      data: {
        name: $name
        description: $description
        price: $price
        tags: $tags
      }
    ) {
      id
      name
      description
      price
      tags
    }
  }
`;

export default function UpdateProduct({ id, trigger }) {
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

  // console.log(data?.Product.tags);
  const [inputTags, setInputTags] = useState('');

  // function to populate the tag field with existing tags
  function getTags() {
    let theTags = '';
    // iterates over the array of tag objects make string
    if (data?.Product.tags) {
      const forLength = data.Product.tags.length;
      console.log(forLength);
      for (let i = 0; i < forLength; i++) {
        theTags = theTags.concat(`${data?.Product.tags[i].name}, `);
        // console.log(data?.Product.tags[i].name);
      }
    }
    return theTags;
  }

  // not sure why, making these functions was the only way to get them to
  // populate in the value field of the form without refreshing
  function getName() {
    let currentName = '';
    if (data?.Product.name) {
      currentName = data?.Product.name;
    }
    return currentName;
  }

  function getPrice() {
    let currentPrice = '';
    if (data?.Product.price) {
      currentPrice = data?.Product.price;
    }
    return currentPrice;
  }

  function getDescription() {
    let currentDescription = '';
    if (data?.Product.description) {
      currentDescription = data?.Product.description;
    }
    return currentDescription;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return trigger ? (
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
              // tags: inputs.tags,
            },
          });
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
            Namey Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={getName()}
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
              value={getPrice()}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="description"
              value={getDescription()}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="tags">
            Tags
            <textarea
              id="tags"
              name="tags"
              placeholder="add tags"
              value={getTags()}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Update Product</button>
        </fieldset>
      </Form>
    </div>
  ) : null;
}
