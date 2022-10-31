import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';

export default function Pagination({ page }) {
  const PAGE_COUNT_QUERY = gql`
    query {
      _allProductsMeta {
        count
      }
    }
  `;

  const { data, error, loading } = useQuery(PAGE_COUNT_QUERY);

  if (error) {
    return <p>ERROR</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>CHEYENNE - Page {page} of ___</title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>←Prev</a>
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      {console.log('Count:')}
      {console.log(count)}
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next→</a>
      </Link>
    </PaginationStyles>
  );
}
