import React from 'react';

type InputLabelProps = {
  name: string;
  label: string;
  required?: boolean;
};

const InputLabel = ({ name, label, required = false }: InputLabelProps) => {
  return (
    <label htmlFor={name} className='pb-2 text-gray-800 cursor-pointer'>
      <span>{label}</span>

      {!required && (
        <>
          &nbsp;
          <span className='text-gray-700'>(optional)</span>
        </>
      )}
    </label>
  );
};

export default InputLabel;
