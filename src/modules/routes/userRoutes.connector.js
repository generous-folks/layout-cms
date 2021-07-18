import { connect } from 'react-redux';
import { getConfigModules, getConfigPages } from '../config/config.selectors';

import UserRoutes from './userRoutes.component';

const mapStateToProps = state => ({
  modules: getConfigModules(state),
  pages: getConfigPages(state),
});

export default connect(mapStateToProps)(UserRoutes);
