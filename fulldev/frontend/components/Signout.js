import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import router from 'next/router';
import wait from 'waait';
import { CURRENT_USER_QUERY } from './User';

const SIGNOUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

export default function SignOut() {
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    // refetch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  function autoSignOut() {
    signout();
    router.push({
      pathname: '/products',
    });
    // wait(1000);
    // window.location.reload(true);
  }

  //   autoSignOut();

  return (
    <>
      <button type="button" onClick={autoSignOut()}>
        SIGN OUT
      </button>
    </>
  );
}
