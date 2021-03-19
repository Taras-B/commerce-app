import React from 'react'

import Button from '@material-ui/core/Button'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Divider from '@material-ui/core/Divider'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
import AddShoppingIcon from '@material-ui/icons/AddShoppingCart'

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
          <Grid item xs={12} md={4} sm={6} key={el._id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={'http://localhost:5000/' + el.picture}
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
                    <Tooltip title={el.name} leaveDelay={500}>
                      <Typography variant='h6' component='h2' color='textPrimary' noWrap>
                        {el.name}
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
                      ${el.price}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Grid container justify='space-between'>
                  <Button size='small' color='primary' variant='outlined'>
                    Open
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
        ))}
      </Grid>
    </Grid>
  )
}
