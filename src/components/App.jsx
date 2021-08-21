import React from 'react'
import Counter from './Counter'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

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
    </Container>
  )
}
