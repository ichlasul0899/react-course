import React from 'react';
import Portfolio from '../component/Portfolio';
import Footer from '../component/Footer';

const HomePage = () => {
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Top 3 My Portfolio</h3>
      <Portfolio />
      <Footer />
    </>
  );
};

export default HomePage;
