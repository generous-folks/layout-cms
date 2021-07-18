import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import _values from 'lodash/values';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { makeStyles, useTheme } from '@material-ui/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: { display: 'flex' },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: { display: 'none' },
  },
  drawerPaper: { width: drawerWidth },
  content: {
    flexGrow: 1,
    marginTop: '15%',
    width: '-webkit-fill-available',
    [theme.breakpoints.up('sm')]: { marginTop: '7.5%' },
  },
}));

const NavBar = ({ pages, pathname, toggle, desktopOpen, mobileOpen, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  if (!pages) {
    return null;
  }

  const drawer = (
    <div>
      <List>
        <ListItem selected={pathname === `/admin/`} component={Link} to="/admin/" button key="dashboard">
          <ListItemText primary="DASHBOARD" />
        </ListItem>
        {_values(pages).map(page => (
          <ListItem component={Link} to={page.path} selected={pathname === page.path} button key={page.name}>
            <ListItemText primary={page.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={toggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        {desktopOpen && (
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant={desktopOpen ? 'permanent' : 'temporary'}
              open={desktopOpen}
            >
              {drawer}
            </Drawer>
          </Hidden>
        )}
      </nav>
      <main className={desktopOpen ? classes.content : {}}>{children}</main>
    </div>
  );
};

NavBar.defaultProps = { children: null };
NavBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.node]),
  mobileOpen: PropTypes.bool.isRequired,
  desktopOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  pages: PropTypes.PropTypes.shape({}).isRequired,
  pathname: PropTypes.string.isRequired,
};

export default NavBar;
