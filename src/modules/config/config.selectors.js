import _get from 'lodash/get';

const DEFAULT_OBJECT = {};

export const getConfigPages = state => _get(state, 'config.pages', DEFAULT_OBJECT);
export const getConfigModules = state => _get(state, 'config.modules', DEFAULT_OBJECT);
export const getConfigGeneral = state => _get(state, 'config.general', DEFAULT_OBJECT);
export const getConfigName = state => _get(state, 'config.name', '');
export const getConfigTheme = state => _get(state, 'config.modules.theme', DEFAULT_OBJECT);
