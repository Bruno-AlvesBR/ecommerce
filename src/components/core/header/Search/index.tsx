import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { Input, ButtonSearch, Container } from './styles';
import { useRef, useState } from 'react';

interface ISearchProps {
  searchTerm?: string;
}

const Search: React.FC<ISearchProps> = ({ searchTerm = '' }) => {
  const buttonRef = useRef(null);

  const [isOpenSearch, setIsOpenSearch] = useState(true);

  const handlePressKey = e => {
    if (e.key !== 'Enter') return;

    buttonRef.current.click();
  };

  return (
    <Container>
      <Input
        placeholder="Pesquise aqui..."
        isOpenSearch={isOpenSearch}
        onKeyDown={handlePressKey}
      />
      {searchTerm?.length <= 0 ? (
        <ButtonSearch
          ref={buttonRef}
          isOpenSearch={isOpenSearch}
          onClick={() => setIsOpenSearch(!isOpenSearch)}
        >
          {isOpenSearch ? <SearchIcon /> : <CloseIcon />}
        </ButtonSearch>
      ) : (
        <Link
          ref={buttonRef}
          href={`/search?q=${searchTerm}`}
          passHref
        >
          <ButtonSearch isOpenSearch={isOpenSearch}>
            <SearchIcon />
          </ButtonSearch>
        </Link>
      )}
    </Container>
  );
};

export default Search;
