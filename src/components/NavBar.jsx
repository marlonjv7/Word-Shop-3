import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    return (
        <div>
            <Navbar className="bg-dark">
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>Brand link</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;