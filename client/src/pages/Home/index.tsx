import React from 'react'

import Button from '@material-ui/core/Button'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

export const Home = () => {
  return (
    <Grid container justify='center' spacing={3}>
      <Grid item md={3} xs={12}>
        <Box color='text.primary' bgcolor='text.secondary' borderRadius={16}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Typography align='center'>Category</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant='outlined'>Phone</Button>
            </Grid>

            <Grid item xs={12}>
              <Button variant='outlined'>Fridge</Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item md={9} xs={12}>
        Items
      </Grid>
    </Grid>
  )
}
