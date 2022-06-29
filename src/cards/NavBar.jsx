import React from 'react'
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux'
import { logoutActionAsync } from '../redux/actions/login.action';
import { BTNLOGOUT } from '../styles/StylesGlobals';

const NavBar = () => {

  const dispatch = useDispatch()

  return (
    <div className='d-flex mt-auto mb-5'>
      <Box className='mb-5'>
        <BTNLOGOUT onClick={() => dispatch(logoutActionAsync())}>Logout</BTNLOGOUT>
      </Box>
    </div>
  )
}

export default NavBar;