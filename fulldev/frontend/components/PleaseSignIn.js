import { useUser } from './User';

// wraps any component into a login page if not already logged in
export default function ({ children }) {
  const me = useUser();
  if (!me) return <SignIn />;
  return children;
}
