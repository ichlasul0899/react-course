import React from 'react';
import './style.css';

const DetailProductCard = ({ data }) => {
  const { categories, variants } = data;

  return (
    <div className="col-sm">
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <div className="row">
            <div className="col-sm-6">
              <div style={{ marginBottom: '20px' }}>
                {variants &&
                  variants.map((e) => {
                    const { images } = e;
                    return (
                      <div>
                        <ul className="list-group list-group-horizontal-sm">
                          {images &&
                            images.map((img, idx) => {
                              return (
                                <div
                                  className="card2"
                                  style={{ width: '18rem' }}
                                >
                                  <img
                                    src={img.product_url}
                                    className="card-img-top"
                                    alt={`${img.small_url}, ${idx}`}
                                  />
                                </div>
                              );
                            })}
                        </ul>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="col-sm-6">
              <p className="card-text">{data.description}</p>
              <div style={{ marginBottom: '20px' }}>
                <ul className="list-group list-group-horizontal-sm">
                  {categories &&
                    categories.map((e, i) => {
                      return (
                        <span
                          className="badge badge-secondary"
                          style={{ marginRight: '5px', marginBottom: '5px' }}
                        >
                          {i + 1}
                          .
                          {e}
                        </span>
                      );
                    })}
                </ul>
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
                <div
                  style={{ color: '#999999', textDecoration: 'line-through' }}
                >
                  {data.display_normal_price}
                </div>
              </div>
              <h5 style={{ fontWeight: 'bold' }}>{data.display_unit_price}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductCard;
