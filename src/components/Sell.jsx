import React from 'react'
import { BtnNextOne, ChooseImg, ChoosePrg, ChooseTitle, FirstLi, OthersLi, UlSlide } from '../styles/StylesGlobals'
import { Link } from 'react-router-dom'

const Sell = () => {
  return (
    <>
     <ChooseImg src='https://res.cloudinary.com/dg29vcpk7/image/upload/v1656445869/Bulletinboard/Svg-1_pmnwel.png' alt='WorkoutImg' />
            <ChooseTitle>Sell</ChooseTitle>
            <ChoosePrg>your items for sale and see how fast they get bought</ChoosePrg>
            <UlSlide>
                <Link to="/choose"><OthersLi>a</OthersLi></Link>
                <Link to="/sell"><FirstLi>a</FirstLi></Link>
                <Link to="/buy"><OthersLi>a</OthersLi></Link>
            </UlSlide>
            <Link to="/buy" style={{'textDecoration':'none'}}><BtnNextOne>Next</BtnNextOne></Link>

    </>
  )
}

export default Sell