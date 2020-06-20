import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

import { getCurrentPageContent } from '../../modules/pageContentManager/pageContent.selectors';
import { getTemplate } from '../../engine/template.engine';
import { Metadata } from '../../modules/seo/metadata.component';

export default function Layout() {
  const content = useSelector(getCurrentPageContent, shallowEqual);

  return (
    <Container style={{ margin: '0 auto', textAlign: 'center' }}>
      <Metadata />
      {(content && getTemplate(content)) || <CircularProgress />}
    </Container>
  );
}

Layout.defaultProps = {
  content: null,
};

Layout.propTypes = {
  content: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]),
};
