import { dbGet } from '../../admin';

export const getConfig = async (data, context) => {
  const { configType } = data;

  // eslint-disable-next-line no-console
  console.error({ context });
  return dbGet(`${configType}/config`);
};

