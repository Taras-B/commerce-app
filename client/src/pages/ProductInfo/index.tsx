import React from 'react'
import { useDispatch } from 'react-redux'

import { useParams } from 'react-router'

import Grid from '@material-ui/core/Grid'
import { useTypedSelector } from '../../utils/typedSelector'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

import { productActions } from '../../store/product/actions'
import { NotFound } from '../NotFound'

export const ProductInfo = () => {
  const { id } = useParams<{ id: string }>()
  const { product, isProduct } = useTypedSelector((state) => state.product)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(productActions.fetchProduct(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (!isProduct) {
    return <NotFound />
  }
  return (
    <Grid container spacing={4}>
      <Grid item md={4} xs={12}>
        <Box>
          <img
            width='300px'
            src={`http://localhost:5000/${product?.picture}`}
            alt={product?.name}
          />
        </Box>
      </Grid>
      <Grid container item md={8} xs={12}>
        <Grid item md={12} xs={12}>
          <Typography align='center' variant='h4'>
            {product?.name}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
