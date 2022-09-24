import { ReactNode } from 'react';

export interface IListProps {
  id: string;
  title: string;
  icon?: ReactNode;
  query: string;
}

export const listCategories: IListProps[] = [
  {
    id: 'laptops',
    title: 'Laptops',
    icon: <svg />,
    query: 'laptops',
  },
  {
    id: 'camera',
    title: 'Camera',
    icon: <svg />,
    query: 'camera',
  },
  {
    id: 'accessories',
    title: 'Accessories',
    icon: <svg />,
    query: 'accessories',
  },
  {
    id: 'tv',
    title: 'TV',
    icon: <svg />,
    query: 'tv',
  },
  {
    id: 'headphones',
    title: 'Headphones',
    icon: <svg />,
    query: 'headphones',
  },
  {
    id: 'storage',
    title: 'Storage',
    icon: <svg />,
    query: 'storage',
  },
  {
    id: 'home-theater',
    title: 'Home Theater',
    icon: <svg />,
    query: 'home-theater',
  },
];
