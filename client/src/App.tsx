import React from 'react'

import Container from '@material-ui/core/Container'

import { Header } from './components/Header'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { useDispatch } from 'react-redux'
import { authActions } from './store/auth/actions'
import { productsActions } from './store/products/actions'

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(authActions.fetchCurrentUser())
    dispatch(productsActions.fetchProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header />
      <Container maxWidth='md'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route path='/404' component={NotFound} />
          <Redirect from='*' to='/404' />
        </Switch>
      </Container>
    </>
  )
}

export default App
