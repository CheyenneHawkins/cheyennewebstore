import { number, string } from 'prop-types';
import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  const initialValues = Object.values(initial).join('');

  /// /////// this successfully makes a string out of the tag array,
  /// /////// but I can't get it into the inputs object yet
  const tagString = inputs?.tags?.map((element) => element.name).join(', ');

  /// ////////--------BUG------------//////////

  /// //////// useEffect should refresh the form fields when the query comes back,
  /// //////// which works, but it's preventing editing the fields

  // useEffect(() => {
  //   setInputs(initial), [initialValues];
  // });

  // useEffect(() => {
  //   convertTags, [];
  // });

  // function convertTags() {
  //   setInputs({
  //     ...inputs,
  //     [inputs.tags]: tagString,
  //   });
  // }

  function handleChange(e) {
    let { value, name, type } = e.target;

    console.log(tagString);

    // all html input is delivered as string
    // convert to number
    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
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
