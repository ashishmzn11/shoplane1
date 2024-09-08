import React, { useState, useEffect } from "react";
import './Product.css'
import { NavLink } from "react-router-dom";

import ProductDetail from "./ProductDetail";

const Product = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setloading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setdata(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);



  const Loading = () => {
    return (
      <>
        <div className= "d-flex justify-content-center">
          <div className= "spinner-border" role="status">
            <span className= "visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  };

  const filterproduct = (cat) => {
    let updatedlist = data.filter((x) => {
      return x.category === cat;
    });
    setfilter(updatedlist);
  };
  const ShowProducts = () => {
    return (
      <div className="button d-flex justify-content-center mb-1 pb-1">
        <button
          className="btn btn-outline-dark me-2 "
          onClick={() => {
            setfilter(data);
          }}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => {
            filterproduct("men's clothing");
          }}
        >
          MEN
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => {
            filterproduct("women's clothing");
          }}
        >
          WOMEN
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => {
            filterproduct("jewelery");
          }}
        >
          ACCESSORIES
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => {
            filterproduct("electronics");
          }}
        >
          ELECTRONICS
        </button>
      </div>
    );
  };



  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">
              CATEGORIES TO BAG{" "}
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
      <div className="row">
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-3" key={product.id}>
              <div className="card h-100 text-center p-3 my-3" id="card-transition-hover">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <NavLink
                    to={`/product/${product.id}`}
                    className="btn btn-outline-dark"
                    
                  >
                    Buy Now
                  </ NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;