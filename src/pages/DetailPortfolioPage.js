import React from 'react';
import { useParams } from 'react-router-dom';
import Portfolio from '../component/Portfolio';

const DetailPortfolioPage = () => {
  const { id } = useParams();
  return (
    <>
      <Portfolio from="detail" id={id} />
    </>
  );
};

export default DetailPortfolioPage;
