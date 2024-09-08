import React, { useEffect, useState } from "react";
import { StateContext } from "./context/StateProvider";
import { useContext } from "react";
import ProductDetail from "./ProductDetail";

const Cart = () => {
  const [cart, setcart] = useContext(StateContext);
  const [increase, setIncrease] = useState("");
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  const removeCart = () => {
    setcart((currentcart) => currentcart.filter((c) => c.id !== cart[0].id));
  };
  const emptyCart = () => {
    <div className="card">
      <div className="card-body justify-content-right">
        <p className="lead fw-bolder mb-2">Empty</p>
      </div>
    </div>;
  };

  return (
    <div>
      <section className="h-100 py-5">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>

              {cart.length === 0 && emptyCart()}
              {cart.map((item) => {
                return (
                  <>
                    <div className="card rounded-3 mb-4" key={item.id}>
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={item.image}
                              className="img-fluid rounded-3"
                              alt={item.title}
                              key={item.id}
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <p className="lead fw-normal mb-2">{item.title}</p>
                            <p>
                              <span className="text-muted">Rating </span>
                              {item.rating.rate}
                              <i className="bi bi-star-fill"></i>
                              <br />
                            </p>
                          </div>
                          <div className="col-md-6 col-sm-3 col-lg-2 ">
                            <input
                              id="form1"
                              value={1}
                              onChange={(e) => setcart(e.target.value)}
                              className="form-control form-control-sm"
                            />

                            {/* <button className="btn btn-link px-1 mx-2" onClick={()=>handleIncrement(item.id)}>
                        <i className="bi bi-plus-lg"></i>
                      </button> */}
                          </div>
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 className="mb-0">${item.price}</h5>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-danger">
                              <button
                                className="btn px-3 text-danger"
                                onClick={() => {
                                  removeCart(cart);
                                }}
                              >
                                <i className="bi bi-trash-fill"></i>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

              <div className="card">
                <div className="card-body justify-content-right">
                  <p className="lead fw-bolder mb-2">Total : ${total}</p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-outline-dark d-grid gap-2 col-6 mx-auto fw-bolder"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Proceed to Pay ${total}
                  </button>

                  {/* box Model */}
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">
                            Payment
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="container py-5">
                            <div className="row">
                              <div className="col-lg-12 mx-auto">
                                <div className="card ">
                                  <div className="card-header">
                                    <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                      <ul
                                        role="tablist"
                                        className="nav bg-light nav-pills rounded nav-fill mb-3"
                                      >
                                        <li className="nav-item">
                                          {" "}
                                          <a
                                            data-toggle="pill"
                                            href="#credit-card"
                                            className="nav-link active p-3 mb-2 bg-dark text-white"
                                          >
                                            {" "}
                                            <i className="bi bi-credit-card-2-back-fill"></i>{" "}
                                            Credit Card / Debit Card
                                          </a>{" "}
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="tab-content">
                                      <div
                                        id="credit-card"
                                        className="tab-pane fade show active pt-3"
                                      >
                                        <form role="form">
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="username">
                                              <h6>Card Owner</h6>
                                            </label>{" "}
                                            <input
                                              type="text"
                                              name="username"
                                              placeholder="Card Owner Name"
                                              required
                                              className="form-control "
                                            />{" "}
                                          </div>
                                          <div className="form-group">
                                            {" "}
                                            <label htmlFor="cardNumber">
                                              <h6>Card number</h6>
                                            </label>
                                            <div className="input-group">
                                              {" "}
                                              <input
                                                type="text"
                                                name="cardNumber"
                                                placeholder="Valid card number"
                                                className="form-control "
                                                required
                                              />
                                              <div className="input-group-append">
                                                {" "}
                                                <span className="input-group-text text-muted">
                                                  {" "}
                                                  <i className="fa-brands fa-cc-mastercard"></i>
                                                  <i className="fab fa-cc-amex mx-1"></i>{" "}
                                                </span>{" "}
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-sm-8">
                                              <div className="form-group">
                                                {" "}
                                                <label>
                                                  <span className="hidden-xs">
                                                    <h6>Expiration Date</h6>
                                                  </span>
                                                </label>
                                                <div className="input-group">
                                                  {" "}
                                                  <input
                                                    type="number"
                                                    placeholder="MM"
                                                    name=""
                                                    className="form-control"
                                                    required
                                                  />{" "}
                                                  <input
                                                    type="number"
                                                    placeholder="YY"
                                                    name=""
                                                    className="form-control"
                                                    required
                                                  />{" "}
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-sm-4">
                                              <div className="form-group mb-4">
                                                {" "}
                                                <label
                                                  data-toggle="tooltip"
                                                  title="Three digit CV code on the back of your card"
                                                >
                                                  <h6>
                                                    CVV{" "}
                                                    <i className="bi bi-question-circle-fill"></i>
                                                  </h6>
                                                </label>{" "}
                                                <input
                                                  type="text"
                                                  required
                                                  className="form-control"
                                                />{" "}
                                              </div>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-light btn btn-outline-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <div className="card-footer">
                            {" "}
                            <button
                              type="button"
                              className="subscribe btn btn-outline-dark btn-block shadow-sm"
                            >
                              {" "}
                              Confirm Payment{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* box model end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
