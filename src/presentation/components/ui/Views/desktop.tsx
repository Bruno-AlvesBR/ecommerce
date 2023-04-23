import React from 'react';
import { PropsWithChildren } from 'react';

interface IDesktopView extends PropsWithChildren {
  fullWidth?: boolean;
}

const DesktopView: React.FC<IDesktopView> = ({
  fullWidth = false,
  children,
}) => (
  <div
    className={`sm:hidden flex ${
      fullWidth ? 'w-full' : 'w-fit'
    } h-fit relative`}
  >
    {children}
  </div>
);

export { DesktopView };
