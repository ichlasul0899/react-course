import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productService } from '../../services';
import { DetailProductCard, Loading } from '../../components';

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [userDataLoading, setUserDataLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setUserDataLoading(true);
    productService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setUserDataLoading(false);
      });
  }, [id]);

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        {error && <p>Error bos</p>}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px',
          }}
        >
          {userDataLoading && <Loading />}
        </div>
        <div className="row">
          <DetailProductCard data={product} />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
