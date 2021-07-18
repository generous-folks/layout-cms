import _get from 'lodash/get';

export const getSplash = state => _get(state, 'splash.splash');
export const getSplashed = state => _get(state, 'splash.splashed');
