import React, { ReactNode } from 'react';

type SelectItemProps = {
  children: ReactNode;
  value: string | number;
};

const SelectItem = ({ children, value }: SelectItemProps) => {
  return <option value={value}>{children}</option>;
};

export default SelectItem;
