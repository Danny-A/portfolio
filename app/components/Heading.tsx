import React, { FC } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '~/utils/tailwindmerge';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const headingStyles = tv({
  base: 'font-heading',
  variants: {
    size: {
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: '3xl',
  },
});

export type TextVariants = VariantProps<typeof headingStyles>;

type Props = TextVariants & {
  as?: HeadingLevel;
  className?: string;
  children: React.ReactNode;
};

const Heading: FC<Props> = ({
  as = 'h2',
  className,
  children,
  ...props
}) => {
  const Component = as;
  
  return (
    <Component className={cn(headingStyles(props), className)}>
      {children}
    </Component>
  );
};

export default Heading;
