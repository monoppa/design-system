import React, { ReactNode } from 'react';
import cx from 'classnames';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: 'solid' | 'outline';
  disabled?: boolean;
  onClick?: () => {};
  type?: 'button' | 'submit';
};

const Button = ({
  children,
  className = '',
  variant = 'solid',
  disabled = false,
  onClick,
  type = 'button',
}: ButtonProps) => {
  const classes = cx({
    ['button']: true,
    ['button-solid']: variant !== 'outline',
    ['button-outline']: variant === 'outline',
    [className]: !!className,
  });

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
