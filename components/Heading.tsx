import React, { FC, PropsWithChildren } from 'react';

type Props = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-base';
  color?: 'text-primary-400' | 'text-primary-500' | 'text-gray-100' | 'text-gray-200';
};

const Heading: FC<PropsWithChildren<Props>> = ({ children, level, size = 'text-lg', color = 'text-gray-100' }) => {
  const Tag = level as keyof JSX.IntrinsicElements;
  return <Tag className={`font-moderat ${size} ${color}`}>{children}</Tag>;
};

export default Heading;
