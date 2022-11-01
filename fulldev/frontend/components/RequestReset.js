import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import Form from './styles/Form';
import Error from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [signup, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    await signup().catch(console.error);
    resetForm();
  }

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <fieldset>
        {data?.sendUserPasswordResetLink === null && (
          <p>Success! Check your email!</p>
        )}
        <h2>Reset Password</h2>
        <Error error={error} />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@youremail.com"
          autoComplete="email"
          value={inputs.email}
          onChange={handleChange}
        />

        <button type="submit">Request Reset</button>
      </fieldset>
    </Form>
  );
}
