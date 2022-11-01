import RequestReset from '../components/RequestReset';
import ResetPassword from '../components/Reset';

export default function ResetPage({ query }) {
  if (!query?.token) {
    return (
      <div>
        {/* <p>Reset who's password?</p> */}
        <RequestReset />
      </div>
    );
  }

  return (
    <div>
      <ResetPassword token={query.token} />
    </div>
  );
}
