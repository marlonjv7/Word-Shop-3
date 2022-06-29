import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/joy/Box';
import { DIVCards } from '../styles/StylesGlobals';

const CardsHome = () => {

    return (
        <DIVCards className='row row-cols-1'>
            <Box className='row row-cols-1' sx={{ width: '80%', mx: 'auto', gap: 2 }}>
                <Card className='BGPrinc-2 col px-0 mb-3' sx={{ maxWidth: 345, mx: 'auto' }}>
                    <CardMedia sx={{ maxHeight: 100, pb: 0 }}
                        component="img"
                        image="https://res.cloudinary.com/doaijv8m0/image/upload/v1655992729/proyectoSprint-3/Img_iom3wf.png"
                        alt=""
                    />
                    <CardContent className="flex-column" sx={{ display: 'flex', pb: 0 }}>
                        <div className='d-flex'>
                            <h2>Split 3 days</h2>
                            <p className='ms-auto my-auto'>45 min</p>
                        </div>

                        <div className='d-flex mt-3'>
                            <p className='descript w-75 my-auto'>the workout is divided into 3 days, day 1 biceps back day 2 triceps chest day 3 shoulders legs</p>
                            <span className='ms-auto mt-auto'>free</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className='BGPrinc-2 col px-0 mb-3' sx={{ maxWidth: 345, mx: 'auto' }}>
                    <CardMedia sx={{ maxHeight: 100, pb: 0 }}
                        component="img"
                        image="https://res.cloudinary.com/doaijv8m0/image/upload/v1655992729/proyectoSprint-3/Img_iom3wf.png"
                        alt=""
                    />
                    <CardContent className="flex-column" sx={{ display: 'flex', pb: 0 }}>
                        <div className='d-flex'>
                            <h2>Split 3 days</h2>
                            <p className='ms-auto my-auto'>45 min</p>
                        </div>

                        <div className='d-flex mt-3'>
                            <p className='descript w-75 my-auto'>the workout is divided into 3 days, day 1 biceps back day 2 triceps chest day 3 shoulders legs</p>
                            <span className='ms-auto mt-auto'>free</span>
                        </div>
                    </CardContent>
                </Card>

                <Card className='BGPrinc-2 col px-0 mb-3' sx={{ maxWidth: 345, mx: 'auto' }}>
                    <CardMedia sx={{ maxHeight: 100, pb: 0 }}
                        component="img"
                        image="https://res.cloudinary.com/doaijv8m0/image/upload/v1655992729/proyectoSprint-3/Img_iom3wf.png"
                        alt=""
                    />
                    <CardContent className="flex-column" sx={{ display: 'flex', pb: 0 }}>
                        <div className='d-flex'>
                            <h2>Split 3 days</h2>
                            <p className='ms-auto my-auto'>45 min</p>
                        </div>

                        <div className='d-flex mt-3'>
                            <p className='descript w-75 my-auto'>the workout is divided into 3 days, day 1 biceps back day 2 triceps chest day 3 shoulders legs</p>
                            <span className='ms-auto mt-auto'>free</span>
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </DIVCards>
    )
}

export default CardsHome;