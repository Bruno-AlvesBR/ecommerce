interface IMenuList {
  title: string;
  slug: string;
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
