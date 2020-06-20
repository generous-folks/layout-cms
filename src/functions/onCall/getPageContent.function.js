import { dbGet } from '../../admin';

export const getPageContent = data => {
  const { lang, ref } = data;

  return dbGet(`public/content/${lang}/${ref}`);
};

