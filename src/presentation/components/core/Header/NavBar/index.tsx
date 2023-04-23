import { useRouter } from 'next/router';
import IndianaScroll from 'react-indiana-drag-scroll';

import { listNav } from './List';
import { Link } from '@/presentation/components/ui/Link';

const NavBar: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <IndianaScroll className="relative flex flex-row items-center justify-left w-full max-w-[1280px] my-0 mx-auto p-0 snap-x snap-mandatory">
      {listNav?.length > 0 &&
        listNav.map(item => (
          <Link
            key={item.id}
            href={item.path}
            className={`hover:no-underline focus:no-underline focus:bg-red800 focus:text-white1000 sm:text-3 uppercase transition ease-in delay-050 px-3 py-0 font-bold snap-start rounded-t-2 hover:bg-red800 hover:text-white1000 ${
              asPath.includes(item.path)
                ? 'text-white1000 bg-red800'
                : 'text-blue700 bg-transparent'
            }`}
          >
            {item.title}
          </Link>
        ))}
    </IndianaScroll>
  );
};

export { NavBar };
