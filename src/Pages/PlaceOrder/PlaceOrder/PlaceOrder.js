import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = (services) => {
    const { serviceId } = useParams();
    const { user } = useAuth();

    const [users, setUsers] = useState({});

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const service = data.find(user => user?.id === parseInt(serviceId));
                setUsers(service);
            })
    }, [])

    console.log({ users });
    console.log({ user });
    console.log({ serviceId });



    return (
        <div>




            <div className="container px-4 my-5">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3 ">
                            <h1>{users.name}</h1>
                            <img src={users.img} alt="" />
                            <p className="w-50 my-2">{users.description}</p>


                            <div className="my-5">
                                <NavLink className="mx-2 home-btn" exact to="/" style={{ fontWeight: "bold", color: "black", textDecoration: "none" }} activeStyle={{ fontWeight: "bold", color: "orange", textDecoration: "none" }}>BACK TO HOMEPAGE</NavLink>

                            </div>
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

        </div >
    );
};

export default PlaceOrder;