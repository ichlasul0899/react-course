import React from 'react';
import { Link } from 'react-router-dom';

const CardPorto = ({ data }) => {
  // console.log(data, "=", data.srcImage, "====>", data.title)
  return (
    <div className="col m4 s12">
      <div className="card">
        <div className="card-image">
          <img src={data.srcImage} className="materialboxed" alt={data.title} />
          <span className="card-title">{data.title}</span>
        </div>
        <div className="card-content">
          <p>{data.desc}</p>
        </div>
        <div className="card-action">
          <Link to={`/portfolio/${data.id}`}>More Detail</Link>
        </div>
      </div>
    </div>
  );
};

export default CardPorto;
