import React from 'react';
import cx from 'classnames';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  optional?: boolean;
}

// type TextInputProps = {

// };

const TextInput = ({
  name,
  value,
  label,
  placeholder,
  error,
  optional = false,
  ...inputProps
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
          <span>{label}</span>

          {!!optional && (
            <>
              &nbsp;
              <span className='text-gray-700'>(optional)</span>
            </>
          )}
        </label>
      )}

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
