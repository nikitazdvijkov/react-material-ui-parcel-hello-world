import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button
        variant='contained'
        style={{ marginBottom: '1rem' }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </Button>
      <Typography variant='body1' component='p'>
        Count: {count}
      </Typography>
    </>
  )
}
