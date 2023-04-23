import NextLink from 'next/link';
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
  useMemo,
} from 'react';

export interface ILink
  extends DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    PropsWithChildren {
  noDecoration?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Link: React.FC<ILink> = ({
  href,
  children,
  noDecoration,
  disabled,
  target,
  onClick,
  className,
  ...props
}) => {
  const styles = useMemo(() => {
    const atributtes: any = {};

    if (noDecoration)
      Object.assign(atributtes, { textDecoration: 'none' });
    if (disabled)
      Object.assign(atributtes, { pointerEvents: 'none' });

    return atributtes;
  }, [noDecoration, disabled]);

  return (
    <NextLink href={href} passHref>
      <a
        style={styles}
        target={target}
        className={`text-4 hover:underline focus:underline w-fit outline-blue700 ${className}`}
        {...props}
        onClick={onClick}
        onKeyDown={onClick}
        aria-hidden="true"
      >
        {children}
      </a>
    </NextLink>
  );
};

export { Link };
