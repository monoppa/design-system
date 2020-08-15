import React, { ReactNode } from 'react';
import cx from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'solid' | 'outline';
  disabled?: boolean;
}

const Button = ({
  children,
  className = '',
  variant = 'solid',
  disabled = false,
  ...buttonProps
}: ButtonProps) => {
  const classes = cx({
    ['button']: true,
    ['button-solid']: variant !== 'outline',
    ['button-outline']: variant === 'outline',
    [className]: !!className,
  });

  return (
    <button className={classes} disabled={disabled} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
