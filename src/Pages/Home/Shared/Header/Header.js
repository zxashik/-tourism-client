import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"> <span className='green-color'>Go Interlaken</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home"><span className="text-white">Home</span></Nav.Link>

                        <Nav.Link as={HashLink} to="/home#services"><span className="text-white">Services</span></Nav.Link>



                        <Nav.Link as={HashLink} to="/home#gallery"><span className="text-white">Gallery</span></Nav.Link>

                        <Nav.Link as={HashLink} to="/home#camping"><span className="text-white">Camping</span></Nav.Link>




                        {user?.email ?
                            <>
                                <Nav.Link as={HashLink} to="/addService"><span className="text-white">AddService</span></Nav.Link>
                                <Nav.Link as={HashLink} to="/manageServices"><span className="text-white">ManageOrders</span></Nav.Link>
                                <Nav.Link as={HashLink} to="/myOrders"><span className="text-white">MyOrders</span></Nav.Link>
                                <Button onClick={logOut} variant="light"> Logout </Button> </> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            <span className="text-white">User: </span><a href="#login" >{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;