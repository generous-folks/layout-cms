import { dbGet } from '../../admin';

export const getConfig = async data => {
  const { configType } = data;

  return dbGet(`${configType}/config`);
};
