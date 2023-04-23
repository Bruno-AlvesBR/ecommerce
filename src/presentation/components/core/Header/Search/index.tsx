import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { Input } from './Input';
import { Button } from './Button';

const Search: React.FC = () => {
  const buttonRef = useRef(null);
  const { push } = useRouter();

  const [isOpenSearch, setIsOpenSearch] = useState(true);
  const [term, setTerm] = useState('');

  const handlePressKey = (event: any) => {
    if (event?.key !== 'Enter') return;

    if (term) push(`/busca?q=${term}`);
  };

  return (
    <div className="flex flex-row items-center justify-end min-h-10 max-h-10 flex-1">
      <Input
        isOpenSearch={isOpenSearch}
        handlePressKey={handlePressKey}
        setTerm={setTerm}
      />
      <Button
        isOpenSearch={isOpenSearch}
        setIsOpenSearch={setIsOpenSearch}
        buttonRef={buttonRef}
      />
    </div>
  );
};

export default Search;
