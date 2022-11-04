import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import styled from 'styled-components';
import wait from 'waait';
import formatMoney from '../lib/formatMoney';

export default function AllOrders() {
  const ORDER_USER_QUERY = gql`
    query {
      authenticatedItem {
        ... on User {
          id
          email
          name
          orders {
            id
          }
        }
      }
    }
  `;

  function useUser() {
    const { data, loading } = useQuery(ORDER_USER_QUERY);
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return data?.authenticatedItem;
  }

  const user = useUser();

  const OrderList = () => (
    <div>
      <ul>
        {user.orders.map((order) => (
          <li key={order.id}>
            <p>Order #</p>
            <Link href={`/order/${order.id}`}>{order.id}</Link>
          </li>
        ))}
      </ul>
      ;
    </div>
  );

  // const OrderList = async function RunOrders() {
  //   <ul>
  //     {await wait(1000)}
  //     {user.orders.map((order) => (
  //       <li key={order.id}>
  //         <p>Order #</p>
  //         <Link href={`/order/${order.id}`}>{order.id}</Link>
  //       </li>
  //     ))}
  //   </ul>;
  // };

  return (
    <div>
      <h2>{user.name} Orders</h2>
      <h2>{user.email}</h2>
      <OrderList />
    </div>
  );
}
