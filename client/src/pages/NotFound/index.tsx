import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

export const NotFound = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        width='300'
        src='https://m3-static.marvelapp.com/assets/dadea5f740a58a0f63565f1295854a98.gif'
        alt='Not Found'
      />
      <Typography variant='h4'>Oh no, bad luck!</Typography>
      <Box mb={4}>
        <Typography variant='body1'>
          The page you’re looking for could have been deleted or never have existed.
        </Typography>
      </Box>
      <Button color='primary' variant='contained' component={Link} to='/'>
        go to home page
      </Button>
    </div>
  )
}
