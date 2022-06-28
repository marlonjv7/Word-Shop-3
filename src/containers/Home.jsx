import React from 'react'
import { H1 } from '../styles/StylesGlobals';
import { logoutActionAsync } from '../redux/actions/login.action';
import { useDispatch } from 'react-redux/es/exports';
import { Button } from '@mui/material';

const Home = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <H1 className='text-center'>Home</H1>
            <Button onClick={() => dispatch(logoutActionAsync())}>Logout</Button>
            <h3>feacture</h3>
            <h2>hola</h2>
            <h4>release</h4>
            <h5>develop</h5>
        </div>
    )
}

export default Home;
