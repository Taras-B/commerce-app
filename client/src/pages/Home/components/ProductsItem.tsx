import React from 'react'

import Button from '@material-ui/core/Button'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Divider from '@material-ui/core/Divider'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
import AddShoppingIcon from '@material-ui/icons/AddShoppingCart'

interface IPropsItem {
  id: string
  picture: string
  name: string
  price: number
  media: string
  productInfo: (id: string) => void
}

export const ProductsItem = ({
  id,
  picture,
  name,
  price,
  media,
  productInfo,
}: IPropsItem) => {
  return (
    <Grid item xs={12} md={4} sm={6}>
      <Card>
        <CardActionArea>
          <CardMedia
            className={media}
            image={'http://localhost:5000/' + picture}
            title='Image Mars'
          />
        </CardActionArea>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography variant='h6' color='textPrimary'>
                Name:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Tooltip title={name} leaveDelay={500}>
                <Typography variant='h6' component='h2' color='textPrimary' noWrap>
                  {name}
                </Typography>
              </Tooltip>
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={3} alignItems='center'>
            <Grid item xs={3}>
              <Typography variant='body1' color='textPrimary'>
                Price:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant='body2' color='textSecondary' component='p'>
                ${price}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justify='space-between'>
            <Button
              size='small'
              color='primary'
              variant='outlined'
              onClick={() => productInfo(id)}>
              Info
            </Button>
            <Fab
              size='small'
              onClick={() => console.log('but')}
              color='secondary'
              aria-label='add to shopping cart'>
              <AddShoppingIcon />
            </Fab>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  )
}
