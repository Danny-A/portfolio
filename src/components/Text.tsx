import { ElementType, JSX } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '~/utils/tailwindmerge';

export const textStyles = tv({
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    },
    weight: {
      normal: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold',
      medium: 'font-medium',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
    },
    truncate: {
      true: 'truncate',
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'primary',
  },
});

export type TextVariants = VariantProps<typeof textStyles>;

type TextElements = Extract<
  keyof JSX.IntrinsicElements,
  | 'p'
  | 'span'
  | 'div'
  | 'caption'
  | 'section'
  | 'article'
  | 'abbr'
  | 'summary'
  | 'details'
  | 'legend'
  | 'address'
  | 'figcaption'
  | 'p'
  | 'aside'
  | 'bdi'
  | 'th'
  | 'td'
  | 'cite'
  | 'code'
  | 'dt'
  | 'dd'
  | 'dfn'
  | 'del'
  | 'ins'
  | 'li'
>;

type TextProps<E extends ElementType = TextElements> = TextVariants & {
  as?: E;
  children?: React.ReactNode;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-hidden'?: boolean;
} & Omit<React.ComponentPropsWithoutRef<E>, keyof TextVariants>;

/**
 * Text component for consistent typography across the application
 *
 * @example
 * ```tsx
 * <Text size="lg" weight="bold" color="primary">Hello World</Text>
 * <Text as="span" truncate>This text will be truncated...</Text>
 * ```
 */
const Text = <E extends ElementType = 'p'>({ as, children, className, ...props }: TextProps<E>) => {
  const Component = as || 'p';
  return (
    <Component className={cn(textStyles(props), className)} {...props}>
      {children}
    </Component>
  );
};

export default Text;
