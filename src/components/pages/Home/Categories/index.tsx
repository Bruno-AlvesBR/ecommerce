import { listCategories } from './List';
import CategoriesTitle from './Title';

import { Card, Content, Title } from './styles';

const Categories: React.FC = () => (
  <div style={{ marginTop: 32 }}>
    <CategoriesTitle />
    <Content>
      {listCategories?.map(item => (
        <Card key={item?.id}>
          <Title variant="h2">{item?.title}</Title>
          {item?.icon}
        </Card>
      ))}
    </Content>
  </div>
);

export default Categories;
