import React from 'react';
import cx from 'classnames';

type ButtonProps = {
  className?: string;
};

const Button = ({ className = '' }: ButtonProps) => {
  const classes = cx({
    button: true,
    [className]: !!className,
  });

  return <button className={classes}>Component</button>;
};

export default Button;
