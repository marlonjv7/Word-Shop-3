import React from 'react'
import {IntroDiv, LogoImg } from '../styles/StylesGlobals'
import { Link } from 'react-router-dom' 

const Intro = () => {
  return (
    <>
        <IntroDiv>
            <Link to="/choose"><LogoImg src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656444935/Bulletinboard/Logo_3_hdfpgj.png' alt='logoApp'/></Link>
        </IntroDiv>
    </>
  )
}

export default Intro