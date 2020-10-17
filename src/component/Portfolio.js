import React from 'react';
import CardPorto from './CardPorto';

const Portfolio = (props) => {
  const portfolio = [
    {
      id: 1,
      srcImage: 'assets/images/gambar1.png',
      title: 'Mobile UI MedicTF',
      desc:
        'I am a very simple card. I am good at containing small bits of information. ',
    },
    {
      id: 2,
      srcImage: 'assets/images/gambar2.png',
      title: 'Mobile UI MedicTF',
      desc:
        'I am a very simple card. I am good at containing small bits of information. ',
    },
    {
      id: 3,
      srcImage: 'assets/images/gambar3.png',
      title: 'Mobile UI MedicTF',
      desc:
        'I am a very simple card. I am good at containing small bits of information. ',
    },
  ];

  const { from, id } = props;

  // const data = portfolio.filter((data.id) => {
  //   if (id == data.id) {
  //     return data;
  //   }
  // });

  //     if (data) {
  //       renderedPortfolio = <CardPorto data={data[0]} />;
  //     } else {
  //       console.log('Hai');
  //     }
  //   } else {
  //     renderedPortfolio = (
  //       <>
  //         {portfolio.map((data, index) => {
  //           return <CardPorto data={data} id={index} />;
  //         })}
  //       </>
  //     );
  // }
  const renderedPortfolio = (
    <>
      {portfolio.map((data, index) => {
        return <CardPorto data={data} id={index} />;
      })}

      <p>{from}</p>
      <p>{id}</p>
    </>
  );

  return (
    <section id="portfolio" className="scrollspy">
      <div className="container">
        <div className="row">
          <h3 className="center light">Portfolio</h3>
          {renderedPortfolio}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
