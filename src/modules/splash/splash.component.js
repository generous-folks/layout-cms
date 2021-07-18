import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _get from 'lodash/get';

import { makeStyles, useTheme } from '@material-ui/styles';

import SVG from '../../components/svg.component';
import logo from '../../logo.svg';
import { useSelector } from 'react-redux';
import { getSplash } from './splash.selectors';

const useStyles = makeStyles(theme => ({
  container: {
    display: _get(theme, 'splash.enabled') ? 'initial' : 'none',
    position: 'absolute',
    top: '0px',
    left: '0px',
    zIndex: 100000,
    width: '100vw',
    height: '100vh',
    background: theme.isBlack ? theme.palette.secondary.main : theme.palette.primary.main,
    transition: 'all 0.5s',
  },
  visible: {
    opacity: 1,
    visibility: 'block',
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0,
  },
}));

const Splash = () => {
  const classes = useStyles(useTheme());
  const splash = useSelector(getSplash);

  return (
    <div className={classNames(classes.container, splash ? classes.visible : classes.hidden)}>
      <SVG src={logo} width="300px" alt="logo" />
    </div>
  );
};

Splash.propTypes = {
  splash: PropTypes.bool.isRequired,
};

export default Splash;
