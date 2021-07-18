import { connect } from 'react-redux';

import Navbar from './navbar.component';
import { toggleNavbar } from '../app/app.action';
import renderOrNothing from '../../components/renderOrNothing.hoc';
import { getPathname } from '../router/router.selectors';
import { getConfigModules, getConfigGeneral, getConfigName, getConfigPages } from '../config/config.selectors';
import { getMobileOpen } from '../app/app.selectors';

const mapStateToProps = state => ({
  mobileOpen: getMobileOpen(state),
  pages: getConfigPages(state),
  modules: getConfigModules(state),
  general: getConfigGeneral(state),
  name: getConfigName(state),
  isUser: !getPathname(state).includes('admin'),
});

export default connect(
  mapStateToProps,
  { toggle: toggleNavbar },
)(renderOrNothing(({ isUser }) => isUser, Navbar));
