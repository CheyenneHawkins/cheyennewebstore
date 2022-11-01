import { useState } from 'react';
import RequestReset from '../components/RequestReset';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { SubtleButton } from '../components/styles/SickButton';

export default function SignInPage() {
  const [showSignIn, setShowSignIn] = useState(true);

  const [showReset, setShowReset] = useState(false);

  const [showCreate, setShowCreate] = useState(false);

  function SignInButton() {
    return (
      <SubtleButton
        type="button"
        onClick={() => {
          setShowSignIn(true);
          setShowReset(false);
          setShowCreate(false);
        }}
      >
        Sign In
      </SubtleButton>
    );
  }

  function SignUpButton() {
    return (
      <SubtleButton
        type="button"
        onClick={() => {
          setShowSignIn(false);
          setShowReset(false);
          setShowCreate(true);
        }}
      >
        Create Account
      </SubtleButton>
    );
  }
  function ResetButton() {
    return (
      <SubtleButton
        type="button"
        onClick={() => {
          setShowReset(true);
          setShowSignIn(false);
          setShowCreate(false);
        }}
      >
        Reset Password
      </SubtleButton>
    );
  }

  // shows signin form
  if (showSignIn) {
    return (
      <div>
        <SignIn />
        <SignUpButton />
        <ResetButton />
      </div>
    );
  }
  // shows sign up form
  if (showCreate) {
    return (
      <div>
        <SignUp />
        <SignInButton />
      </div>
    );
  }
  // shows reset form
  if (showReset) {
    return (
      <div>
        <RequestReset />
        <SignUpButton />
        <SignInButton />
      </div>
    );
  }
}
