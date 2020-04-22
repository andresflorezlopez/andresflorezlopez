import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import * as Tags from './MainContainer.styled';

const MainContainer = ({children}) => (
  <Tags.MainContainer>
    <Header />
    {children}
    <Footer />
  </Tags.MainContainer>
);

MainContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainContainer;