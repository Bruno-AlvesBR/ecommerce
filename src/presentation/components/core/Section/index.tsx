import { PropsWithChildren } from 'react';

import { Carrousel } from '@/presentation/components/core/Carrousel';
import { Link } from '@/presentation/components/ui/Link';

interface ISection extends PropsWithChildren {
  title: string;
  url: string;
}

const Section: React.FC<ISection> = ({
  children,
  title,
  url = '/404/',
}) => (
  <div className="sm:gap-5 relative w-full flex flex-col gap-8 h-fit">
    <Carrousel title={title} itemId="card" isShowHeader>
      {children}
    </Carrousel>

    <Link
      className="hover:text-red800 font-sm text-black1000 underline transition-all ease-in delay-[50] text-center w-fit mx-auto"
      href={url}
    >
      VER TODOS
    </Link>
  </div>
);

export { Section };
