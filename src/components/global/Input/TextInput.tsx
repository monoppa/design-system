import React from 'react';
import cx from 'classnames';
import InputLabel from './InputLabel';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
}

// type TextInputProps = {

// };

const TextInput = ({
  name,
  value,
  label,
  placeholder,
  error,
  required,
  ...inputProps
}: TextInputProps) => {
  const inputClasses = cx({
    ['input']: true,
    ['input-border']: !error,
    ['input-error']: error,
  });

  return (
    <div className='flex flex-col'>
      {!!label && <InputLabel name={name} label={label} required={required} />}

      <input
        id={name}
        name={name}
        value={value}
        className={inputClasses}
        placeholder={placeholder}
        {...inputProps}
      />

      {!!error && <p className='text-xs font-semibold text-red-500'>{error}</p>}
    </div>
  );
};

export default TextInput;
