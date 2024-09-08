import React from "react";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div
        className="card bg-dark text-white pt-2"
        style={{ margin: "70px 0px" }}
      >
        <img
          src="/assets/1.jpg"
          className="card-img"
          alt="background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              New Season Arrivals
            </h5>
            <p className="card-text lead fs-2">Check Out All The Trends</p>

            <button
              class="btn btn-outline-dark "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Toggle right offcanvas
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">...</div>
            </div>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
