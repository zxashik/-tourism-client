import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://eerie-eyeballs-55193.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])




    return (
        <div>




            <div className="container px-4 my-5">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3 ">
                            <h1>{service.name}</h1>
                            <img src={service.img} alt="" />
                            <p className="w-50 my-2">{service.description}</p>
                            <h6>Cost: {service.price}</h6>

                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                            {/* <img src={user?.photoURL} alt="" /> */}
                            <h3>Email: {user?.email}</h3>
                            <h3>User Name: {user?.displayName}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <NavLink className="mx-2 home-btn" exact to="/" style={{ fontWeight: "bold", color: "black", textDecoration: "none" }} activeStyle={{ fontWeight: "bold", color: "orange", textDecoration: "none" }}>BACK TO HOMEPAGE</NavLink>

            </div>

        </div >
    );
};

export default PlaceOrder;