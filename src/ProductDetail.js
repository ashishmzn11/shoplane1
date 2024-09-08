import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { StateContext } from "./context/StateProvider";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([[]]);
  const [loading, setloading] = useState(false);
  const [cart, setcart] = useContext(StateContext);

  useEffect(() => {
    const getproduct = async () => {
      setloading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setloading(false);
    };
    getproduct();
  }, []);

  const productarr = Object.entries(product);

  const addtocart = () => {
    setcart((currentcart) => [...currentcart, product]);
  };
  const removeCart = () => {
    setcart((currentcart) => currentcart.filter((c) => c.id !== product.id));
  };

  const Loading = () => {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}{" "}
            <i className="bi bi-star-fill"></i>
          </p>
          <h3 className="display-6 fw-bold my-4"> $ {product.price}</h3>
          <p className="lead">{product.description}</p>

          {cart.includes(product) ? (
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={removeCart}
            >
              {" "}
              Remove From Cart
            </button>
          ) : (
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={addtocart}
            >
              {" "}
              Add To Cart
            </button>
          )}

          <NavLink to="/cart" className="btn btn-dark ms-2 px-3">
            {" "}
            Go To Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
