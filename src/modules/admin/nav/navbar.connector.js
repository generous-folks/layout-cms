import { connect } from 'react-redux';
import { getPathname } from '../../router/router.selectors';

import NavBar from './navbar.component';

const mapStateToProps = state => ({ pathname: getPathname(state) });

export default connect(mapStateToProps)(NavBar);
