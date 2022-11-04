import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';

const OrderDisplay = styled.div`
  display: grid;
  width: 800px;
  grid-template-columns: 100px 200px 200px 200px;
  grid-template-rows: 50px;
  grid-auto-rows: 50px;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  align-items: flex-start;
  /* border: purple solid 1px; */
  padding: 15px 15px 0px 15px;
`;

/// ///-------DEFINE DATABASE QUERY FOR ORDER DETAILS-----------////////

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    Order(where: { id: $id }) {
      id
      charge
      total
      items {
        id
        name
        quantity
        price
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

/// //////--------SEND DATABASE QUERY THE ORDER#--------/////

export default function SingleOrder({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <DisplayError error={error} />;
  }

  /// //////------------ORDER DISPLAY -- COMPONENTS----------////////////

  const OrderTotal = () => (
    <div className="ordertotal">
      <h3>Order Total:</h3>
      <h3>{formatMoney(data.Order.total)}</h3>
    </div>
  );

  const OrderID = () => (
    <div className="ordertotal">
      <h3>Order ID:</h3>
      <h3>{data.Order.id}</h3>
    </div>
  );

  const OrderList = () => (
    <>
      <h2>Items</h2>
      {data.Order.items.map((item) => (
        <OrderDisplay key={item.id}>
          <img
            width="50"
            src={item.photo.image.publicUrlTransformed}
            alt={item.name}
          />
          <Link href={`/product/${item.id}`}>{item.name}</Link>
          <h6 className="qty">{item.quantity}</h6>
          <h6 className="qty">{formatMoney(item.price)}</h6>
          <br />
        </OrderDisplay>
      ))}
    </>
  );

  /// //////------------ORDER DISPLAY-- LAYOUT----------////////////

  return (
    <>
      {console.log(data)}
      <OrderTotal />
      <OrderID />
      <OrderList />
    </>
  );
}
