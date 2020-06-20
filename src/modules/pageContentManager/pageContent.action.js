import { callApi } from '../../utils/firebase.utils';
import { getCurrentPage, getStoredPage } from './pageContent.selectors';

export const GET_PAGE_CONTENT_BEGIN = 'pageContent/GET_PAGE_CONTENT_BEGIN';
export const GET_PAGE_CONTENT_SUCCESS = 'pageContent/GET_PAGE_CONTENT_SUCCESS';
export const GET_PAGE_CONTENT_FAILURE = 'pageContent/GET_PAGE_CONTENT_FAILURE';
export const SET_PAGE_CONTENT = 'pageContent/SET_PAGE_CONTENT';
export const SET_CURRENT_PAGE = 'pageContent/SET_CURRENT_PAGE';

export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });

export const getPageContent = (ref, lang) => async (dispatch, getState) => {
  try {
    const state = getState();
    const isCurrentPage = ref === getCurrentPage(state);
    const hasPageStored = getStoredPage(ref, state);

    // No need to fetch the current page
    if (isCurrentPage) {
      return;
    }

    // Change currentPage early so content can change if we have it stored
    dispatch(setCurrentPage(ref));

    // Page is already stored, no need to fetch
    if(hasPageStored) {
      return;
    }

    dispatch({ type: GET_PAGE_CONTENT_BEGIN });

    const { data } = await callApi('getPageContent', { lang, ref });
    dispatch({
      type: GET_PAGE_CONTENT_SUCCESS,
      data,
      path: `public/content/${lang}/${ref}`,
      page: ref,
    });
  } catch (e) {
    dispatch({
      type: GET_PAGE_CONTENT_FAILURE,
      data: { error: e.message },
    });
  }
};

export const setPageContent = ({ data, lang, ref }) => ({
  type: SET_PAGE_CONTENT,
  data,
  path: `public/content/${lang}/${ref}`,
  page: ref,
});

