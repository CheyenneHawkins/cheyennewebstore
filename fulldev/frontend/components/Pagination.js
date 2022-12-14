import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { number } from 'prop-types';
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
  const pageCountString = `${pageCount}`;
  const itemsPer = 4;
  const pageOptions = (
    <select name="itemsPer" id="itemsPer">
      <option value="4">4</option>
      <option value="8">8</option>
      <option value="12">12</option>
    </select>
  );

  return (
    <PaginationStyles>
      <Head>
        <title>
          CHEYENNE - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>←Prev</a>
      </Link>
      <p>{count} Items Total</p>
      <div>
        Show
        {pageOptions}
        per page
      </div>
      <p>
        Page {page} of{' '}
        <Link href={`/products/${pageCount}`}>{pageCountString}</Link>
      </p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next→</a>
      </Link>
    </PaginationStyles>
  );
}
