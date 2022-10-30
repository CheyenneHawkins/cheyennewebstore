import { number, string } from 'prop-types';
import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  // useEffect(() => {
  //   setInputs(initial), [initialValues];
  // });

  // console.log('Initial values:');
  // console.log(initialValues);

  function handleChange(e) {
    let { value, name, type } = e.target;

    // all html input is delivered as string
    // convert to number
    if (type === 'number') {
      value = parseInt(value);
      console.log(typeof value);
    }

    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
