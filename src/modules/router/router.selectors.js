import _get from 'lodash/get';

export const getLocation = state => _get(state, 'router.location');
export const getPathname = state => _get(state, 'router.location.pathname', '');
