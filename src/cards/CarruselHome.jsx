import React from 'react'
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import { DIVCarrusel } from '../styles/StylesGlobals';

const data = [
  {
    src: 'https://res.cloudinary.com/doaijv8m0/image/upload/v1655992729/proyectoSprint-3/%D0%A1%D0%BB%D0%BE%D0%B9_1_2_eczrke.png',
    title: 'Warm up',
    description: 'Before training, be sure to warm up, give it 5 - 10 minutes',
  },
  {
    src: 'https://res.cloudinary.com/doaijv8m0/image/upload/v1655992729/proyectoSprint-3/%D0%A1%D0%BB%D0%BE%D0%B9_1_2_eczrke.png',
    title: 'Warm up',
    description: 'Before training, be sure to warm up, give it 5 - 10 minutes',
  },
  {
    src: 'https://res.cloudinary.com/doaijv8m0/image/upload/v1655992729/proyectoSprint-3/%D0%A1%D0%BB%D0%BE%D0%B9_1_2_eczrke.png',
    title: 'Warm up',
    description: 'Before training, be sure to warm up, give it 5 - 10 minutes',
  },
];

const CarruselHome = () => {
  return (
    <DIVCarrusel>
      <Box className='DIVCARRU1'
        sx={{
          m: 'auto',
          display: 'flex',
          gap: 3,
          py: 1,
          overflow: 'auto',
          width: 350,
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',
          },
          '::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {data.map((item, idx) => (
          <Card
            className='Carru'
            row
            key={idx}
            variant=""
            sx={{
              gap: 2,
              '--Card-padding': (theme) => theme.spacing(2),
            }}
          >
            <div className='DIVCARRU2 my-auto' sx={{ ml: 1 }}>
              <h4 fontWeight="ml">{item.title}</h4>
              <h3 className=''>{item.description}</h3>
            </div>
            <img
            className='my-auto'
              src={`${item.src}`}
              alt={item.title}
            />
          </Card>
        ))}
      </Box>
    </DIVCarrusel>
  )
}

export default CarruselHome;