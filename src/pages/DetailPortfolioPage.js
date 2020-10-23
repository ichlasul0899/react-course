import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailPortfolioPage = () => {
  const { id } = useParams();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/posts/${id}`)
      .then((response) => { return response.json(); })
      .then((post) => {
        setTitle(post.title);
        setImage(post.srcImage);
        setDesc(post.desc);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="center light">
            Detail
            {title}
          </h3>
          <div className="col m4 s12">
            <div className="card">
              <div className="card-image">
                <img src={image} className="materialboxed" alt={title} />
                <span className="card-title">{title}</span>
              </div>
              <div className="card-content">
                <p>{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPortfolioPage;
