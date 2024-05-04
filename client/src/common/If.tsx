import React from 'react';

type IFProps = {
  children: React.ReactNode;
  condition: boolean;
};

export const If = (props: IFProps) => {
  if (!props.condition) {
    return null;
  }

  return props.children;
};
