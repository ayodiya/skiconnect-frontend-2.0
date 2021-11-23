import { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import { LANDING_ROUTE, REGISTER_ROUTE } from './utils/routes'

const Landing = lazy(() => import('./pages/Landing'))
const Register = lazy(() => import('./pages/Register'))

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={LANDING_ROUTE} component={Landing} />
        <Route exact path={REGISTER_ROUTE} component={Register} />
      </Switch>
    </>
  )
}

export default Routes
