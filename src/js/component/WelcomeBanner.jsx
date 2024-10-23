// WelcomeBanner.js
import React from 'react';

const WelcomeBanner = () => {
  return (
    <div className="container my-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 text-start">
          <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
          <p className="col-12 col-md-8 fs-4"> {/* Cambiar col-md-8 a col-12 para móviles */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non
            incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Call to action!
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
