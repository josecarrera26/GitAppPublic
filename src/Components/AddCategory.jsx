import React, { useState } from 'react';

/**
 * AddCategory component
 * @param {function} setCategories - function to set the categories
 * @returns {React.ReactElement} - JSX for adding a new category
 */
export function AddCategory({ onNewCategory }) {
  // Initialize the input value state variable
  const [inputValue, setInputValue] = useState('');

  /**
   * onInputChange function
   * @param {Object} event - the input change event
   */
  const onInputChaged = (event) => {
    setInputValue(event.target.value);
  }

  /**
   * onSubmit function
   * @param {Object} event - the form submit event
   */
  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim()
    if (newInputValue.length < 1) {
      alert('ingrese un dato');
      return;
    } else {
      onNewCategory(newInputValue);
      setInputValue('');
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text"
          name=""
          placeholder='Buscar gifs'
          id="txtBuscar"
          value={inputValue}
          onChange={onInputChaged}
        />
      </form>
    </div>
  )
}