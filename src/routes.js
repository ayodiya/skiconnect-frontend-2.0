import { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import { HOME_ROUTE } from './utils/routes'

const HomePage = lazy(() => import('./pages/home'))

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={HOME_ROUTE} component={HomePage} />
      </Switch>
    </>
  )
}

export default Routes
