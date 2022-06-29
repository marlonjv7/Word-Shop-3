import React from 'react'
// import NavBar from '../components/NavBar';
import { H1 } from '../styles/StylesGlobals';
import { logoutActionAsync } from '../redux/actions/login.action';
import { useDispatch } from 'react-redux/es/exports';
import { Button } from '@mui/material';
import Main from '../cards/Main';

const Home = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <H1 className='text-center'>Home</H1>
            <Button onClick={() => dispatch(logoutActionAsync())}>Logout</Button>
            <Main />
        </div>
    )
}

export default Home;
