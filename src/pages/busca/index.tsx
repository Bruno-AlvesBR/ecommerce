import { useRouter } from 'next/router';
import React from 'react';

const Tenis = () => {
  const { query } = useRouter();

  return <div>{query?.q}</div>;
};

export default Tenis;
