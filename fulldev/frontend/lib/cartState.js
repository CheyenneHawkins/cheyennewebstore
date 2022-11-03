import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // custom provider stores state and updaters

  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return (
    <LocalStateProvider
      value={{ cartOpen, setCartOpen, closeCart, openCart, toggleCart }}
    >
      {children}
    </LocalStateProvider>
  );
}

function UseCart() {
  // this is the consumer to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export { CartStateProvider, UseCart };
