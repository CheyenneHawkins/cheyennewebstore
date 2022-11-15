import wait from 'waait';
import UpdateProduct from '../components/UpdateProduct';

export default function UpdatePage({ query }) {
  return (
    <div>
      {/* {console.log('INCOMING QUERY:')} */}
      {/* {console.log(query.id)} */}
      <UpdateProduct id={query.id} />
    </div>
  );
}
