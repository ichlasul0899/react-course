import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ProductCard = ({ data }) => {
  const { variants, description } = data;
  const image = variants[0].images;
  const srcDummy =
    'https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_960_720.png';

  const kata = description.slice(0, 30);

  return (
    <Link to={`/product/${data.id}`} className="col-sm col-md myLink">
      <div
        className="card"
        style={{ marginBottom: '20px', maxHeight: '350px' }}
      >
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            {data.in_stock ? (
              <span className="badge badge-secondary">Available</span>
            ) : (
              <span className="badge badge-primary">sold</span>
            )}
          </h6>
          <img
            src={image[0] ? image[0].product_url : srcDummy}
            className="card-img-top"
            alt={image[0] ? image[0].product_url : srcDummy}
          />
          <div style={{ height: '60px' }}>
            <p className="card-text">
              {description.length >= 30 ? `${kata} ...` : description}
            </p>
          </div>
          <div
            className="priceInfo"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              className="mybadges"
              style={{
                marginRight: '10px',
                color: 'red',
                backgroundColor: '#ffcccc',
                padding: '2px 8px',
                borderRadius: '5px',
              }}
            >
              {data.display_promo_price_percentage}
            </div>
            <div style={{ color: '#999999', textDecoration: 'line-through' }}>
              {data.display_normal_price}
            </div>
          </div>
          <h5 style={{ fontWeight: 'bold' }}>{data.display_price}</h5>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
