import _get from 'lodash/get';

export const getAdminConfig = state => _get(state, 'admin.config');

export const hasConfig = state => !!getAdminConfig(state);

export const isAdmin = state => !!_get(state, 'admin.isAdmin');

export const isAdminInitialized = state => !!_get(state, 'admin.initialized');
