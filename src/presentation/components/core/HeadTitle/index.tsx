import Head from 'next/head';
import { useRouter } from 'next/router';
import { memo, useCallback, useEffect, useState } from 'react';

const HeadComponent = () => {
  const { asPath } = useRouter();

  const [path, setPath] = useState<string>('Dunked');

  const handleFormatPathsChars = useCallback(() => {
    const splittedPaths = asPath.split('/');

    const charactersPath = [];

    splittedPaths.forEach(char => {
      if (char) {
        const formattedChar =
          char.charAt(0).toUpperCase() + char.slice(1);

        if (formattedChar) charactersPath.push(formattedChar);
      }
    });

    setPath(charactersPath.map(item => item).join(' | '));
  }, [asPath]);

  useEffect(() => {
    if (asPath.includes('perfil')) {
      setPath('Perfil');
    } else {
      handleFormatPathsChars();
    }
  }, [handleFormatPathsChars, asPath]);

  return (
    <Head>
      <title>{path || 'Dunked'}</title>
    </Head>
  );
};

const HeadTitle = memo(HeadComponent);
export { HeadTitle };
