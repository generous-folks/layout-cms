import { connect } from 'react-redux';

import Splash from './splash.component';
import { showSplash } from './splash.action';
import { getConfigModules } from '../config/config.selectors';
import { getSplash, getSplashed } from './splash.selectors';

const mapStateToProps = state => ({
  splash: getSplash(state),
  splashed: getSplashed(state),
  modules: getConfigModules(state),
});

export default connect(
  mapStateToProps,
  { showSplash },
)(Splash);
