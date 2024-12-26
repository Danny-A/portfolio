import { FC, PropsWithChildren } from 'react';
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
      secondary: 'text-gray-200',
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'primary',
  },
});

export type TextVariants = VariantProps<typeof textStyles>;

type Props = TextVariants & {
  children?: React.ReactNode;
  /** The DOM element to render */
  as?: Extract<
    keyof JSX.IntrinsicElements,
    | 'caption'
    | 'div'
    | 'span'
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
  /** For usage with ARIA attributes */
  id?: string;
  dangerouslySetInnerHTML?: { __html: string };
  'aria-hidden'?: boolean | 'true' | 'false';
  className?: string;
};

const Text: FC<PropsWithChildren<Props>> = ({
  as: Component = 'p',
  children,
  dangerouslySetInnerHTML,
  className,
  ...props
}) => {
  return (
    <Component
      className={cn(textStyles(props), className)}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </Component>
  );
};

export default Text;
