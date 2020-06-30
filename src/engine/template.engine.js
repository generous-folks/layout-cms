import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

import shortid from 'shortid';

export const getComponent = (index, component, path, isAdmin, isTopLevel) => {
  const Component = loadable(() => import(/* webpackChunkName: "template" */ `../lib/${component.target}.template`));

  return <Component key={`${component.id || shortid.generate()}`} path={path} isAdmin={isAdmin} isTopLevel={isTopLevel} {...component} />;
};

export const getTemplate = (components, path, isAdmin, isTopLevel) => {
  try {
    return components
    ? Object.values(components).map((component, index) => getComponent(index, component, path, isAdmin, isTopLevel))
    : null;
  } catch (error) {
    throw new Error('Fuck this ' + error.message)
  }
};
//replaceInDev(path, shortid.generate())
export default function Layout({ content }) {
  return getTemplate(content);
}

Layout.defaultProps = {
  content: null,
};

Layout.propTypes = {
  content: PropTypes.shape({}),
};
