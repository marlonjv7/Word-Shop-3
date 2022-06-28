import React from 'react'
import { Link } from 'react-router-dom'
import { BtnNextOne, ChooseImg, ChoosePrg, ChooseTitle, FirstLi, OthersLi, UlSlide } from '../styles/StylesGlobals'

const Buy = () => {
  return (
   <>
     <>
        <ChooseImg src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656445869/Bulletinboard/Svg-2_zo2og5.png' alt='BuyImg' />
            <ChooseTitle>Buy</ChooseTitle>
            <ChoosePrg>See and choose products suitable products or products that are nearby</ChoosePrg>
            <UlSlide>
                <Link to="/choose"><OthersLi>a</OthersLi></Link>
                <Link to="/sell"><OthersLi>a</OthersLi></Link>
                <Link to="/buy"><FirstLi>a</FirstLi></Link>
            </UlSlide>
            <Link to="/signup" style={{'textDecoration':'none'}}><BtnNextOne>Next</BtnNextOne></Link>

    </>
   </>
  )
}

export default Buy