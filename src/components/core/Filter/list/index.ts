import { HTMLInputTypeAttribute } from 'react';

interface IFilterList {
  title: string;
  field: {
    type: HTMLInputTypeAttribute;
    list: Array<string>;
  };
}

const filterList: Array<IFilterList> = [
  {
    title: 'Gênero',
    field: {
      type: 'checkbox',
      list: ['Masculino', 'Feminino'],
    },
  },
  {
    title: 'Marca',
    field: {
      type: 'checkbox',
      list: ['Adidas', 'Nike', 'Fila', 'Under Armour'],
    },
  },
];

export { filterList };
