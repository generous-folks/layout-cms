import { LOCATION_CHANGE } from 'redux-first-history';
import _get from 'lodash/get';
import { getPageContent } from '../modules/pageContentManager/pageContent.action';
import { CHANGE_LANG } from '../modules/lang/lang.actions';
import { getConfigPages } from '../modules/config/config.selectors';
import { getCurrentLang } from '../modules/lang/lang.selectors';
import { getPathname } from '../modules/router/router.selectors';

const getContentForRoute = (pages, pathname, lang) => dispatch => {
  if (pathname === '/') {
    return dispatch(getPageContent('home', lang));
  }

  const pageItem = Object.values(pages).filter(page => page.path === pathname)[0];

  if (!pageItem) {
    return;
  }

  dispatch(getPageContent(pageItem.target, lang));
};

export default ({ dispatch, getState }) => next => action => {
  const state = getState();

  next(action);
  const pages = getConfigPages(state);
  const currentLang = getCurrentLang(state);
  const pathname = getPathname(state);

  switch (action.type) {
    case CHANGE_LANG:
      dispatch(getContentForRoute(pages, pathname, action.lang));
      break;
    case LOCATION_CHANGE:
      dispatch(getContentForRoute(pages, _get(action, 'payload.location.pathname'), currentLang));
      break;
    default:
      break;
  }
};
