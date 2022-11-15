// import AllOrders from '../components/AllOrders';

import SearchSimple from '../components/SearchSimple';

export default function SearchPage({ query }) {
  return (
    <>
      <SearchSimple searchTerm={query.id} />
    </>
  );
}
