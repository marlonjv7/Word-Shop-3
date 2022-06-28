import React from 'react'
import NavBar from '../components/NavBar';
import { H1 } from '../styles/StylesGlobals';

const Home = () => {
    return (
        <div>
            <H1 className='text-center'>Home</H1>
            <NavBar />
        </div>
    )
}

export default Home;