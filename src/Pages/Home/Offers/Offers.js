import React from 'react';

const Offers = () => {
    return (
        <div id="offers" className="text-center mb-5">

            <div className="container p-5 my-2 text-center">
                <h1>OUR BEST</h1>
                <h1 className="green-color">OFFERS</h1>
                <p>Price is what you pay. Value is what you get.</p>
            </div>
            <div className="container overflow-hidden">
                <div className="row gx-5">
                    <div className="col">
                        <div className="card text-dark bg-light mb-3"  >
                            <div className="card-header"><h3>STANDARD</h3></div>

                            <div className="card-body">
                                <div className="card-title"><h4><sup>$</sup> </h4><h1>42</h1> <h4><sub>/Mounthly</sub></h4></div>

                            </div>

                            <div className="card-footer">3 days a week program</div>
                            <div className="card-footer">Diet program Included</div>
                            <div className="card-footer">Professional Trainers</div>
                            <div className="card-footer"> <div className="text-danger fw-bold">X</div> </div>
                            <div className="card-footer"> <div className="text-danger fw-bold">X</div> </div>
                            <div className="card-footer"><button className="green-bg btn text-white">PURCHASE</button></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-dark mb-3"  >
                            <div className="card-header"><h3>KING PACKAGE</h3></div>

                            <div className="card-body">
                                <div className="card-title"><h4><sup>$</sup> </h4><h1>230</h1> <h4><sub>/Two Yearly</sub></h4></div>

                            </div>

                            <div className="card-footer">3 days a week program</div>
                            <div className="card-footer">Diet program Included</div>
                            <div className="card-footer">Professional Trainers</div>
                            <div className="card-footer">Yoga program Included</div>
                            <div className="card-footer">Aerobic program Included</div>
                            <div className="card-footer"><button className="green-bg btn text-white">PURCHASE</button></div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-dark bg-light mb-3"  >
                            <div className="card-header"><h3>PROFESSIONAL</h3></div>

                            <div className="card-body">
                                <div className="card-title"><h4><sup>$</sup> </h4><h1>150</h1> <h4><sub>/Yearly</sub></h4></div>

                            </div>

                            <div className="card-footer">3 days a week program</div>
                            <div className="card-footer">Diet program Included</div>
                            <div className="card-footer">Professional Trainers</div>
                            <div className="card-footer">Yoga program Included</div>
                            <div className="card-footer"> <div className="text-danger fw-bold">X</div> </div>
                            <div className="card-footer"><button className="green-bg btn text-white">PURCHASE</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;