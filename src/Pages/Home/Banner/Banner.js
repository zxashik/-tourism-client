import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/Yt3rTSY/b1.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className="my-font text-uppercase">things to do in, <span className="green-color">interlaken...</span></h5>
                            <p><i>Activities For The Whole Family</i></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/bB9xBzc/b2.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className="my-font text-uppercase">air activities <span className="green-color">interlaken</span></h5>
                            <p><i>See Interlaken From Up Above</i></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/z206sK4/rat-ski-SMj2-DY7-QUfw-unsplash.jpg" className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 className="my-font text-uppercase">Land Activities Explore    <span className="green-color"> Interlaken!!!!</span></h5>
                            <p><i>Several activities to enjoy the summer in Interlaken
                                .</i></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Banner;