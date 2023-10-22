import { FC, PropsWithChildren } from 'react';

type Props = {
  size?: 'text-xs' | 'text-sm' | 'text-md' | 'text-lg' | 'text-base';
  color?: 'text-gray-100' | 'text-gray-200';
};

const Text: FC<PropsWithChildren<Props>> = ({ children, size = 'text-base', color = 'text-gray-100' }) => {
  return <p className={`${color} ${size}`}>{children}</p>;
};

export default Text;
