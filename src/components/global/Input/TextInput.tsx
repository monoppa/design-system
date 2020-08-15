import React from 'react';
import cx from 'classnames';

type TextInputProps = {
  name: string;
  value?: string;
  label?: string;
  placeholder?: string;
  error?: string;
};

const TextInput = ({
  name,
  value,
  label,
  placeholder,
  error,
}: TextInputProps) => {
  const inputClasses = cx({
    ['input']: true,
    ['input-border']: !error,
    ['input-error']: error,
  });

  return (
    <div className='flex flex-col'>
      {!!label && (
        <label htmlFor={name} className='pb-2 text-gray-800 cursor-pointer'>
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        value={value}
        className={inputClasses}
        placeholder={placeholder}
      />

      {!!error && <p className='text-xs font-semibold text-red-500'>{error}</p>}
    </div>
  );
};

export default TextInput;
