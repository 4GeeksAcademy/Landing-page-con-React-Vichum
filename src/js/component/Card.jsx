// Card.js
import React from 'react';

const Card = ({ image, title, description, link }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3"> {/* Cambiar a clases responsivas */}
      <div className="card mb-4"> {/* Añadir un margen inferior para el espaciado */}
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
