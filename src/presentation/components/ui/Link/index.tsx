import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { PropsWithChildren, useMemo } from 'react';

export interface ILink extends NextLinkProps {
  noDecoration?: boolean;
  disabled?: boolean;
  target?: string;
  onClick?: () => void;
}

const Link: React.FC<PropsWithChildren<ILink>> = ({
  href,
  children,
  noDecoration,
  disabled,
  target,
  onClick,
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
    <NextLink href={href}>
      <a
        style={styles}
        target={target}
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
