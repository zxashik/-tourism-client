import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark m-0 p-0">
            <h5 className="text-center text-white m-0 py-3">&copy; 2021 Go Interlaken LLC</h5>
            <div className="container overflow-hidden">
                <div className="row gx-2">
                    <div className="col">
                        <div className="p-3  bg-dark text-white">
                            <h2 className="green-color">Summer</h2>

                            <p>Paragliding</p>
                            <p>Skydiving</p>
                            <p>Lake Adventures</p>
                            <p>Canyoning</p>

                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3  bg-dark text-white">
                            <h2 className="green-color">Land</h2>

                            <p>Bungy Jump</p>
                            <p>Monster Scooter</p>
                            <p>Ropes Park</p>
                            <p>Canyoning</p>

                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3  bg-dark text-white ">
                            <h2 className="green-color">Winter</h2>

                            <p>Snowshoe Tour</p>
                            <p>Night Sledding</p>
                            <p>Skischool</p>
                            <p>Canyoning</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Footer;