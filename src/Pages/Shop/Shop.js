import React from 'react';
import './Shop.css'

const Shop = () => {
    return (
        <div className="">
            <div className="container p-5 my-5 text-center">
                <h1>OUR</h1>
                <h1 className="green-color">PRODUCT STORE</h1>
            </div>

            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/shop-image-14.jpg" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">BASKETBALL</h5>
                                <h6>$100</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/shop-image-13.jpg" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">BLACK JACKET</h5>
                                <h6>$120</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/shop-image-12.jpg" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">WHITE JACKET</h5>
                                <h6>$150</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h3-shop-img-3.png" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">WHEY PROTEIN</h5>
                                <h6>$89</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://prowess.qodeinteractive.com/wp-content/uploads/2018/02/h3-shop-img-1.png" className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">WHEY PROTEIN GREEN</h5>
                                <h6>$89</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;