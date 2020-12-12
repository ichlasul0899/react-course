import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { productService } from '../../services';
import { ProductCard, Loading } from '../../components';
import './style.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [userDataLoading, setUserDataLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [mydata, setData] = useState([]);
  const limit = 50;
  const perPage = 10;

  useEffect(() => {
    setUserDataLoading(true);
    productService
      .getProduct(search, limit, 0)
      .then(({ data }) => {
        setData(data);
        setProducts(data.slice(offset, offset + perPage));
        setPageCount(Math.ceil(data.length / perPage));
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setUserDataLoading(false);
      });
  }, [search, offset]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(inputSearch);
  };

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage);
    setProducts(mydata.slice(offset, offset + perPage));
    setSearch('');
  };

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        {error && <p>Error bos</p>}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {userDataLoading && <Loading />}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', alignContent: 'center' }}
          >
            <input
              type="text"
              name="search"
              value={inputSearch}
              onChange={handleChange}
              placeholder="Search. . . (ex: bango)"
              style={{
                border: '0px',
                padding: '5px',
                borderRadius: '10px 0 0 10px',
                paddingLeft: '30px',
              }}
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </form>
        </div>

        <h2 className="display-4">Ayo Belanja Barang Harian Mu </h2>

        <div className="row">
          {products.map((e, index) => {
            return <ProductCard data={e} index={index} />;
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ReactPaginate
            previousLabel="<<<"
            nextLabel=">>>"
            breakLabel="..."
            breakClassName="breakme"
            pageCount={pageCount}
            marginPageDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
