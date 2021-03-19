import React from 'react'

import { ProductsItem } from './components/ProductsItem'

import Button from '@material-ui/core/Button'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { useTypedSelector } from '../../utils/typedSelector'

const useStyles = makeStyles({
  root: {
    maxWidth: 460,
  },
  media: {
    height: 180,
  },
})

export const Home = () => {
  const classes = useStyles()
  const { products, isProducts } = useTypedSelector((state) => state.products)
  if (!isProducts) {
    return <div>NO Products</div>
  }
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
      <Grid container item md={9} xs={12} spacing={2}>
        {products?.map((el) => (
          <ProductsItem
            name={el.name}
            price={el.price}
            picture={el.picture}
            media={classes.media}
            key={el._id}
          />
        ))}
      </Grid>
    </Grid>
  )
}
