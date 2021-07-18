import { getConfig } from '../functions/onCall/getConfig.function';
import { getPageContent } from '../functions/onCall/getPageContent.function';

const getContentTarget = ({ url, config }) => {
  const filteredPages = config ? Object.values(config.pages).filter(page => page.path === url) : [];
  if (filteredPages[0]) {
    return filteredPages[0].target;
  }

  return 'home';
};

export const preloadState = async url => {
  const config = await getConfig({ configType: 'public' });
  const ref = getContentTarget({ config, url });
  const content = await getPageContent({ lang: 'en', ref });

  return {
    config,
    pageContent: {
      currentPage: ref,
      pages: {
        [ref]: {
          content,
          path: `public/content/en/${ref}`,
        },
      },
    },
  };
};
