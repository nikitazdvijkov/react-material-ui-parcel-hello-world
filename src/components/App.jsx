import React from 'react'
import Counter from './Counter'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import HomeIcon from '@material-ui/icons/Home'

import './App.scss'

export default function App() {
  return (
    <Container maxWidth='sm' className='container'>
      <div className='heading'>
        <Typography variant='h3' component='h1'>
          Hello, world!
        </Typography>
      </div>
      <Counter />
      <Typography
        style={{
          marginTop: '1rem',
          display: 'flex',
          alignItems: 'center',
        }}
        variant='body1'
        component='p'
      >
        Icon demo: &nbsp; <HomeIcon fontSize='small' />
      </Typography>
    </Container>
  )
}
