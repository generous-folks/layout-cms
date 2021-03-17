import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import loadable from '@loadable/component';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './modules/navbar/navbar.connector';
import UserRoutes from './modules/routes/userRoutes.connector';
import Toaster from './modules/toaster/toast.connector';

const Admin = loadable(() => import('./pages/admin/admin.component'));

const App = () => (
  <Fragment>
    <CssBaseline />
    <NavBar desktop={true}>
      <UserRoutes />
      <Toaster />
    </NavBar>
    <Router>
      <Admin path="admin/*" />
    </Router>
  </Fragment>
);

export default App;
