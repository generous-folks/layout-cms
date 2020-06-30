import { GET_PAGE_CONTENT_BEGIN, GET_PAGE_CONTENT_FAILURE, GET_PAGE_CONTENT_SUCCESS, SET_PAGE_CONTENT, SET_CURRENT_PAGE } from './pageContent.action';

const initialState = {
  getPageContentPending: false,
  getPageContentError: null,
  currentPage: null,
  pages: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case GET_PAGE_CONTENT_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        getPageContentPending: true,
        getPageContentError: null,
      };

    case SET_PAGE_CONTENT:
    case GET_PAGE_CONTENT_SUCCESS:
      // The request is success
      return {
        ...state,
        getPageContentPending: false,
        getPageContentError: null,
        currentPage: action.page,
        pages: {
          ...state.pages,
          [action.page]: {
            content: { ...action.data },
            path: action.path,
            page: action.page,
          }
        },
      };

    case GET_PAGE_CONTENT_FAILURE:
      // The request is failed
      return {
        ...state,
        getPageContentPending: false,
        getPageContentError: action.data.error,
      };

    default:
      return state;
  }
}
