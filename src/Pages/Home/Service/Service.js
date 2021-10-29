import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (

        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top img-thumbnail" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <div className="m-auto pb-3">
                        <Link to={`/placeOrder/${id}`}>
                            <button className="btn green-bg text-white">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Service;


