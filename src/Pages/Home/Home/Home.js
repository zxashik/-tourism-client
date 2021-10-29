import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Gallery from '../Gallery/Gallery';
import Camping from '../Camping/Camping';

const Home = () => {
    const { loading } = useAuth();
    if (loading) {
        return <h6 className="text-center my-5" ><Spinner animation="border" variant="danger" /></h6>
    }
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <Camping></Camping>
        </div>
    );
};

export default Home;