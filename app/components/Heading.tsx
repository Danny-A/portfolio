import React from 'react';
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

interface HeadingProps extends TextVariants {
  as?: HeadingLevel;
  className?: string;
  children: React.ReactNode;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = 'h2', className, children, ...props }, ref) => {
    const Component = as;
    
    return (
      <Component 
        ref={ref}
        className={cn(headingStyles(props), className)}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

export default Heading;
