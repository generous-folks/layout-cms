import _get from 'lodash/get';

export const getModules = state => _get(state, 'app.config.modules');

export const getPages = state => _get(state, 'app.config.pages');

export const getMobileOpen = state => _get(state, 'app.mobileOpen');
