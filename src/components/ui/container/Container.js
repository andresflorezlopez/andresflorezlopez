import React from 'react';
import PropTypes from 'prop-types';

import * as Tags from './Container.styled';

const Container = ({children}) => (
  <Tags.Container>
    {children}
  </Tags.Container>
);

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container;