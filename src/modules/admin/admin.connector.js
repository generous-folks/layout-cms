import { connect } from 'react-redux';

import Admin from './admin.component';
import { configInitAdmin, initializeAdmin } from './admin.action';
import { logout } from '../auth/auth.action';
import { getPathname } from '../router/router.selectors';
import { getAdminConfig, isAdmin, isAdminInitialized } from './admin.selectors';

const mapStateToProps = state => ({
  pathname: getPathname(state),
  config: getAdminConfig(state),
  isAdmin: !!isAdmin(state),
  initialized: isAdminInitialized(state),
});

export default connect(
  mapStateToProps,
  {
    configInitAdmin,
    logout,
    initializeAdmin,
  },
)(Admin);
