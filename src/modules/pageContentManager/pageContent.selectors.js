import _get from 'lodash/get';

export const getCurrentPage = state => _get(state, 'pageContent.currentPage');
export const getCurrentPageContent = state => _get(state, `pageContent.pages.${getCurrentPage(state)}.content`);
export const getStoredPage = (name, state) => _get(state, `pageContent.pages.${name}`);
export const getStoredPages = state => _get(state, 'pageContent.pages');
