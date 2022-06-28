import React from 'react'
import NavBar from '../components/NavBars';
import { H1 } from '../styles/StylesGlobals';

const Home = () => {
    return (
        <div>
            <H1 className='text-center'>Home</H1>
            <h3>feacture</h3>
            <h2>hola</h2>
            <h4>release</h4>
            <h5>develop</h5>
            <NavBar />
        </div>
    )
}

export default Home;
