import React from 'react'
// import NavBar from '../components/NavBar';
import NavBarSup from '../components/NavBarSup';
import { H1 } from '../styles/StylesGlobals';

const Home = () => {
    return (
        <div>
            <NavBarSup />
            <H1 className='text-center'>Home</H1>
        </div>
    )
}

export default Home;
