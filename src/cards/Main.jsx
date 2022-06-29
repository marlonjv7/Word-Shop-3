import React from 'react'
import CardsHome from './CardsHome';
import CarruselHome from './CarruselHome';
import NavHome from './NavHome'

const Main = () => {
    return (
        <div className=''>
            <NavHome />
            <CarruselHome />
            <CardsHome />
        </div>
    )
}

export default Main;