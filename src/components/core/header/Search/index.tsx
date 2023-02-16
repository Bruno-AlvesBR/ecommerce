import { Link } from '@/components/ui/Link';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState } from 'react';

import { Input, ButtonSearch, Container } from './styles';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

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
    <Container>
      <Input
        placeholder="Pesquise aqui..."
        isOpenSearch={isOpenSearch}
        onKeyDown={handlePressKey}
        onChange={event => setTerm(event.target.value)}
      />
      <ButtonSearch
        ref={buttonRef}
        isOpenSearch={isOpenSearch}
        onClick={() => setIsOpenSearch(!isOpenSearch)}
      >
        {isOpenSearch ? <SearchIcon /> : <CloseIcon />}
      </ButtonSearch>
    </Container>
  );
};

export default Search;
