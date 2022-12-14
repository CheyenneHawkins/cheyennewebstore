import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';
import formatMoney from '../lib/formatMoney';
import AddToCart from './AddToCart';

const ProductStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  max-width: var(--maxWidth);
  img {
    margin-top: 100px;
    width: 100%
    height: 100%;
    object-fit: contain;
  }
  justify-content: center;
  align-items: top;
`;

const ProductDescription = styled.div`
  margin-left: 50px;
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      tags {
        name
      }
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  // useQuery takes in the query language from apollo, pasted into the variable
  // SINGLE_ITEM_QUERY, followed by the variable to plug in the id
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    // prettier autoformats this
    // equivalent to variables: {id : id} -- first "id" is the database field,
    // second "id" is the prop that was passed in to the function
    variables: { id },
  });
  // console.log(data);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <DisplayError error={error} />;
  }
  let tagList = '';

  function getTags() {
    let theTags = '';
    // iterates over the array of tag objects make string
    if (data.Product.tags) {
      const forLength = data.Product.tags.length;
      for (let i = 0; i < forLength; i++) {
        theTags = theTags.concat(`${data.Product.tags[i].name}, `);
      }
    }
    tagList = theTags;
  }

  if (data) {
    getTags();

    return (
      <ProductStyles>
        {/* Head is imported from next, allows you to inject anything
    into the head of the document, we're using it to change the title of the page
    to the product name */}
        <Head>
          <title>Cheyenne | {data.Product.name}</title>
        </Head>

        <img
          src={data.Product.photo.image.publicUrlTransformed}
          alt={data.Product.name}
          // height="700"
          width="700"
        />
        <ProductDescription>
          {/* <div className="details"> */}
          <h2>{data.Product.name}</h2>
          <h3>
            <i>{formatMoney(data.Product.price)}</i>
          </h3>
          <p>{data.Product.description}</p>
          <AddToCart id={data.Product.id} />
          <p>Tags</p>
          <p>{tagList}</p>
          {/* </div> */}
        </ProductDescription>
      </ProductStyles>
    );
  }
}
