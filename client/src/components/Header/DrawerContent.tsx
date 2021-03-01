import React from 'react'

import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone'
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone'
import { useStylesHeader } from './index'

interface IPropsDrawerContent {
  handleDrawerToggle: () => void
}

export const DrawerContent = ({ handleDrawerToggle }: IPropsDrawerContent) => {
  const { toolbar } = useStylesHeader()
  return (
    <div onClick={handleDrawerToggle}>
      <div className={toolbar}></div>
      <Divider />
      <List>
        {[
          {
            id: 1,
            title: 'Home',
            icon: <AccountCircleTwoToneIcon />,
            link: '/',
          },
          {
            id: 4,
            title: 'My watch list',
            icon: <FavoriteTwoToneIcon />,
            link: 'watch',
          },
        ].map((obj) => (
          <Link
            to={obj.link}
            key={obj.id}
            style={{ textDecoration: 'none', color: 'grey' }}>
            <ListItem button key={obj.id}>
              <ListItemIcon>{obj.icon}</ListItemIcon>
              <ListItemText primary={obj.title} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />

      <Grid container direction='column'>
        <Button component={Link} to='/login' color='primary'>
          Login
        </Button>
        <Button component={Link} to='/signup' color='primary'>
          SignUp
        </Button>
      </Grid>
    </div>
  )
}
