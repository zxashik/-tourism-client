import React from 'react';

const Camping = () => {
    return (
        <div id="camping" className="">


            <div className="container p-5 my-5 text-center">

                <h1 className="green-color">Camping And Hiking</h1>
                <p>Find the accommodation that fits best with your vacation
                </p>
            </div>
            <div className="container my-5">
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://paragliding-interlaken.ch/wp-content/uploads/2019/04/Camping-Lazy-Rancho.webp" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title green-color">Camping Lazy Rancho</h1>
                                <h3> <b>Location:</b> Lehnweg 6, 3800 Unterseen-Interlaken</h3>
                                <p className="card-text">At the Camping Lazy Rancho, nature lovers, families with children, and active holidaymakers will find exactly what they’re looking for to enjoy a relaxing and exciting holiday. The Lazy Rancho campsite offers full-comfort pitches with water/waste water, standard pitches and hard-stands for campervans/RCs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 shadow-lg" >
                    <div className="row g-0">

                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title green-color">Camping Manor Farm</h1>
                                <h3> <b>Location:</b>  Seestrasse 201, 3800 Interlaken-Thunersee</h3>
                                <p className="card-text">Famous for 40 years for cleanliness and a comprehensive first-rate service. In winter, sheltered and easily accessible site at the valley bottom, the ideal starting point to quickly get to all the well-known winter sports resorts.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="https://paragliding-interlaken.ch/wp-content/uploads/2019/04/Manor-Farm.webp" className="img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Camping;