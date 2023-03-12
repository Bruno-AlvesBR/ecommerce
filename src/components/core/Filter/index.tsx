import { useState } from 'react';
import ArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ArrowUp from '@mui/icons-material/KeyboardArrowUp';
import useMediaQuery from '@mui/material/useMediaQuery';

import { filterList } from './list';

import {
  Container,
  Content,
  ContentFields,
  ContentField,
  ContentTitle,
  Input,
  Title,
  FieldInfo,
  ContentHeader,
  ContentIcon,
  ContentFiltersTypes,
} from './styles';
import theme from '@/styles/theme';

const Filter: React.FC = () => {
  const isMobile = useMediaQuery(theme?.breakpoints?.down('sm'));

  const [expandFilter, setExpandFilter] = useState(false);

  const handleToggleFilterShow = () =>
    isMobile && setExpandFilter(!expandFilter);

  return (
    <Container expandedFilter={expandFilter}>
      <ContentHeader
        expandedFilter={expandFilter}
        onClick={handleToggleFilterShow}
      >
        <Title variant="h2">Filtros</Title>
        <ContentIcon>
          {expandFilter ? <ArrowDown /> : <ArrowUp />}
        </ContentIcon>
      </ContentHeader>

      <ContentFiltersTypes expandedFilter={expandFilter}>
        {filterList.map((filter, index) => (
          <Content key={index}>
            <ContentTitle variant="h5">{filter?.title}</ContentTitle>

            <ContentFields>
              {filter?.field?.list?.map((field, index) => (
                <ContentField key={index}>
                  <Input type={filter?.field?.type} />

                  <FieldInfo>{field}</FieldInfo>
                </ContentField>
              ))}
            </ContentFields>
          </Content>
        ))}
      </ContentFiltersTypes>
    </Container>
  );
};

export { Filter };
