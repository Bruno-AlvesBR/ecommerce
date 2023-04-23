import React from 'react';
import { PropsWithChildren } from 'react';

interface IMobileView extends PropsWithChildren {
  fullWidth?: boolean;
}

const MobileView: React.FC<IMobileView> = ({
  fullWidth = false,
  children,
}) => (
  <div
    className={`sm:flex hidden ${
      fullWidth ? 'w-full' : 'w-fit'
    } h-fit relative`}
  >
    {children}
  </div>
);

export { MobileView };
