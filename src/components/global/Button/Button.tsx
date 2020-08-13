import React, { ReactNode } from 'react';
import cx from 'classnames';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'solid' | 'outline';
  disabled?: boolean;
};

const bareClasses =
  ' py-2 px-6 transition-all duration-75 ease-in-out font-semibold shadow-md disabled:shadow-none disabled:cursor-not-allowed';

const outlineClasses =
  'border disabled:border-gray-400 disabled:text-gray-400' + bareClasses;

const solidClasses = 'disabled:bg-gray-300 disabled:text-white';

const Button = ({
  children,
  className = '',
  variant = 'solid',
  disabled = false,
}: ButtonProps) => {
  const classes = cx({
    [bareClasses]: true,
    ['button']: !disabled,
    [className]: !!className,
    [solidClasses]: variant !== 'outline',
    [outlineClasses]: variant === 'outline',
  });

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
