import React from 'react'
import { BtnNextOne, ChooseImg, ChoosePrg, ChooseTitle, FirstLi, OthersLi, UlSlide } from '../styles/StylesGlobals'
import { Link } from 'react-router-dom'

const Choose = () => {
  return (
    <>
         <ChooseImg src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656445869/Bulletinboard/Svg_ujnqcy.png' alt='ChoosetImg' />
            <ChooseTitle>Choose</ChooseTitle>
            <ChoosePrg>Choose products available add to favorites and then buy</ChoosePrg>
            <UlSlide>
                <Link to="/choose"><FirstLi>a</FirstLi></Link>
                <Link to="/sell"><OthersLi>a</OthersLi></Link>
                <Link to="/buy"><OthersLi>a</OthersLi></Link>
            </UlSlide>
            <Link to="/sell" style={{'textDecoration':'none'}}><BtnNextOne>Next</BtnNextOne></Link>
    </>
  )
}

export default Choose