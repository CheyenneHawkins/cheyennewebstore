import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useState } from 'react';
import wait from 'waait';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import Form from './styles/Form';
import { useUser } from './User';
import Success from './Success';

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION($id: ID!, $name: String, $address: String) {
    updateUser(id: $id, data: { name: $name, address: $address }) {
      name
      address
    }
  }
`;

export default function Account() {
  const [successState, setSuccessState] = useState(false);

  const on = successState ? 'modalon' : '';

  const user = useUser();

  const { inputs, handleChange, clearForm, resetForm, handleRefresh } =
    useForm(user);

  const [updateUser, { data, error, loading }] =
    useMutation(UPDATE_USER_MUTATION);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await updateUser({
            variables: {
              id: user.id,
              name: inputs.name,
              address: inputs.address,
            },
          });
          await wait(200);
          setSuccessState(true);
          await wait(2000);
          setSuccessState(false);
        }}
      >
        <fieldset>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="address">
            Address
            <input
              type="text"
              id="address"
              name="address"
              placeholder="address"
              value={inputs.address}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Update Account</button>
        </fieldset>
      </Form>
      {/* {successState && <Success />} */}
      <Success prop={on} word="Account" />
    </>
  );
}
