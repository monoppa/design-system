import React, { ReactNode } from 'react';
import cx from 'classnames';

import CaretDown from '../Icons/CaretDown';
import InputLabel from './InputLabel';

type SelectValue = string | number;

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
  name: string;
  value: SelectValue;
  label?: string;
  error?: string;
  required?: boolean;
}

const Select = ({
  children,
  name,
  value,
  label,
  error,
  required,
  ...selectProps
}: SelectProps) => {
  const selectClasses = cx({
    ['input']: true,
    ['input-border']: !error,
    ['input-error']: error,
  });

  return (
    <div className='flex flex-col'>
      {!!label && <InputLabel name={name} label={label} required={required} />}

      <div className={`relative ${selectClasses}`}>
        <select
          name={name}
          value={value}
          className='block w-full bg-transparent appearance-none focus:outline-none'
          {...selectProps}
        >
          {children}
        </select>

        <div className='absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none'>
          <CaretDown className='w-4 h-4 text-gray-900 fill-current' />
        </div>
      </div>

      {!!error && <p className='text-xs font-semibold text-red-500'>{error}</p>}
    </div>
  );
};

export default Select;
