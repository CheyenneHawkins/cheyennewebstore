import { useLazyQuery, useQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import router from 'next/router';
import styled from 'styled-components';
import Product from './Product';

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
          # { tags_some: $searchTerm }
        ]
      }
    ) {
      id
      name
      # tags
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function SearchSimple({ searchTerm }) {
  const { loading, data, error } = useQuery(SEARCH_PRODUCTS_QUERY, {
    variables: { searchTerm },
  });

  console.log(data, loading, error);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h4>
        {data.searchTerms.length} results for "{searchTerm}"
      </h4>
      <h6 />
      <ProductsListStyles>
        {data.searchTerms.map((product) => (
          <Product key={product.id} product={product} editView="none" />
        ))}
      </ProductsListStyles>
    </>
  );
}
