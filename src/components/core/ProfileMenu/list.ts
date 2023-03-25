interface IMenuList {
  slug: string;
  title: string;
}

const menuList: Array<IMenuList> = [
  {
    title: 'Início',
    slug: 'inicio',
  },
  {
    title: 'Configurações',
    slug: 'configuracoes',
  },
];

export { menuList };
