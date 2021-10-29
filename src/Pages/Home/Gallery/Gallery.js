import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div id="gallery" className="">


            <div className="container p-5 my-5 text-center">

                <h1 className="green-color">Adventure Gallery</h1>
                <p>The destinations are pretty great here. Go ahead, take a look around.</p>
            </div>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-2">
                    <div className="col">
                        <div className="card">
                            <img src="https://d329jirxh7znrd.cloudfront.net/adventure/wp-content/uploads/sites/256/2019/07/gallery01.jpg" className="card-img-top img-thumbnail" alt="..." />

                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://d329jirxh7znrd.cloudfront.net/adventure/wp-content/uploads/sites/256/2019/07/gallery02.jpg" className="card-img-top img-thumbnail" alt="..." />

                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://d329jirxh7znrd.cloudfront.net/adventure/wp-content/uploads/sites/256/2019/07/gallery03.jpg" className="card-img-top img-thumbnail" alt="..." />

                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://d329jirxh7znrd.cloudfront.net/adventure/wp-content/uploads/sites/256/2019/07/gallery04.jpg" className="card-img-top img-thumbnail" alt="..." />

                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://d329jirxh7znrd.cloudfront.net/adventure/wp-content/uploads/sites/256/2019/07/gallery05.jpg" className="card-img-top img-thumbnail" alt="..." />

                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://d329jirxh7znrd.cloudfront.net/adventure/wp-content/uploads/sites/256/2019/07/gallery06.jpg" className="card-img-top img-thumbnail" alt="..." />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;