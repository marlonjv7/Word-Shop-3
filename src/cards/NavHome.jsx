import React, { useState, useEffect } from 'react'
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import { Offcanvas } from 'react-bootstrap';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import NavBar from './NavBar';
// import { DIVConfig } from '../styles/StyleGlobal';
import { NavLink } from 'react-router-dom';

const NavHome = () => {

    const [user, setUser] = useState({
        user: 'Usuario Nuevo'
    })
    // ---------------------------------------------------------------------------------
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // ---------------------------------------------------------------------------------
    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            setUser({ user: user.displayName })
        })
    }, [])

    return (
        <div>
            <Box className='' sx={{ display: 'flex' }}>
                <Avatar sx={{ my: 'auto' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" color="success" variant="outlined" onClick={handleShow} />
                <section className='ms-3'>
                    <h6 className='m-0'>Hi!</h6>
                    <h6 className='m-0'>{user.user}</h6>
                </section>
                <img className='ms-auto me-3 h-25 my-auto' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1655992730/proyectoSprint-3/Notification_wg2qqp.png" alt="notification" />
            </Box>

            <Offcanvas className='w-75' show={show} onHide={handleClose}>
                <Offcanvas.Title className='ms-3 mt-3'>
                    <Box className='' sx={{ display: 'flex', maxWidth: 400, mx: 'auto' }}>
                        <Avatar sx={{ my: 'auto' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" color="success" variant="outlined" />
                        <section className='ms-3'>
                            <h6 className='m-0'>Hi!</h6>
                            <h6 className='m-0'>{user.user}</h6>
                        </section>
                        <NavLink to='/editUser' className='ms-auto'><img className='ms-auto me-4 h-25 my-auto' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1656363580/proyectoSprint-3/editing_1_nkhsdw.png" alt="" /></NavLink>
                    </Box>
                </Offcanvas.Title>
                <Offcanvas.Body className='d-flex flex-column'>
                    <NavBar />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default NavHome;